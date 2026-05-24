#!/usr/bin/env tsx
/**
 * One-time migration: static blog posts → Sanity
 *
 * Pre-requisites:
 *   1. Create a Sanity API token with Editor permissions at sanity.io/manage
 *   2. Add it to .env.local as SANITY_WRITE_TOKEN=sk-...
 *
 * Usage:
 *   npx tsx scripts/migrate-blog-to-sanity.ts
 */

import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from 'crypto';

// ─── Blog post imports ──────────────────────────────────────────────

import post01 from '../src/content/blog/why-webflow-best-platform-small-medium-businesses';
import post02 from '../src/content/blog/real-roi-great-website-investment-not-expense';
import post03 from '../src/content/blog/seo-local-seo-secret-getting-found-online';
import post04 from '../src/content/blog/5-common-website-mistakes-costing-clients';
import post05 from '../src/content/blog/how-often-update-website-why-matters';
import post06 from '../src/content/blog/web-design-services-toronto-ontario';
import post07 from '../src/content/blog/why-your-small-business-website-is-not-getting-leads';
import post08 from '../src/content/blog/how-small-businesses-use-ai-get-more-leads';
import post09 from '../src/content/blog/grow-roofing-company-online-local-leads';
import post10 from '../src/content/blog/best-ai-tools-small-businesses-save-time-grow';
import post11 from '../src/content/blog/best-marketing-books-small-business-get-clients';
import post12 from '../src/content/blog/what-small-businesses-can-learn-from-building-a-storybrand';

const ALL_POSTS = [
  post01, post02, post03, post04, post05, post06,
  post07, post08, post09, post10, post11, post12,
];

// ─── Load .env.local ────────────────────────────────────────────────

const envPath = path.resolve(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  }
}

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN. Set it in .env.local or as an env var.');
  process.exit(1);
}

// ─── Sanity client (write-enabled) ──────────────────────────────────

const client = createClient({
  projectId: 'g1x6uxb8',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

// ─── Helpers ────────────────────────────────────────────────────────

/** Short unique key for Portable Text blocks */
function k(): string {
  return randomUUID().slice(0, 8);
}

const SITE_URL = 'https://webloftstudio.com';

// ─── Inline HTML → Portable Text spans ─────────────────────────────

type Span = { _type: 'span'; _key: string; text: string; marks: string[] };
type MarkDef = { _key: string; _type: string; href?: string };

function decodeEntities(text: string): string {
  return text
    .replace(/&rarr;/g, '\u2192')
    .replace(/&mdash;/g, '\u2014')
    .replace(/&ndash;/g, '\u2013')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, '\u2019')
    .replace(/&lsquo;/g, '\u2018')
    .replace(/&rdquo;/g, '\u201D')
    .replace(/&ldquo;/g, '\u201C')
    .replace(/&nbsp;/g, ' ');
}

function parseInlineHtml(raw: string): { spans: Span[]; markDefs: MarkDef[] } {
  // Strip <img> tags entirely
  let text = raw.replace(/<img[^>]*\/?>/g, '');
  text = decodeEntities(text);

  const spans: Span[] = [];
  const markDefs: MarkDef[] = [];
  const activeMarks: string[] = [];

  const tagRe = /<(\/?)(strong|em|a|b|i)(\s[^>]*)?>/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;

  while ((match = tagRe.exec(text)) !== null) {
    const [full, closing, tag, attrs = ''] = match;

    // Text before this tag
    if (match.index > lastIdx) {
      const chunk = text.slice(lastIdx, match.index);
      if (chunk) spans.push({ _type: 'span', _key: k(), text: chunk, marks: [...activeMarks] });
    }

    const normTag = tag === 'b' ? 'strong' : tag === 'i' ? 'em' : tag;

    if (normTag === 'strong' || normTag === 'em') {
      if (closing) {
        const idx = activeMarks.lastIndexOf(normTag);
        if (idx !== -1) activeMarks.splice(idx, 1);
      } else {
        activeMarks.push(normTag);
      }
    } else if (normTag === 'a') {
      if (closing) {
        const idx = activeMarks.findIndex((m) => m.startsWith('link-'));
        if (idx !== -1) activeMarks.splice(idx, 1);
      } else {
        const hrefM = attrs.match(/href="([^"]*)"/);
        if (hrefM) {
          const linkKey = `link-${k()}`;
          let href = hrefM[1];
          if (href.startsWith('/')) href = SITE_URL + href;
          markDefs.push({ _key: linkKey, _type: 'link', href });
          activeMarks.push(linkKey);
        }
      }
    }

    lastIdx = match.index + full.length;
  }

  // Remaining text
  if (lastIdx < text.length) {
    const chunk = text.slice(lastIdx);
    if (chunk) spans.push({ _type: 'span', _key: k(), text: chunk, marks: [...activeMarks] });
  }

  if (spans.length === 0) {
    spans.push({ _type: 'span', _key: k(), text: '', marks: [] });
  }

  return { spans, markDefs };
}

/** Returns true if the paragraph is ONLY an <img> tag with no other text */
function isImageOnly(para: string): boolean {
  return !para.replace(/<img[^>]*\/?>/g, '').trim();
}

// ─── Sections → Portable Text body ─────────────────────────────────

type Section = {
  id: string;
  heading: string;
  intro?: string;
  paragraphs: string[];
  bullets?: string[];
};

function sectionsToBody(sections: Section[]): any[] {
  const blocks: any[] = [];

  for (const section of sections) {
    // H2 heading
    const h = parseInlineHtml(section.heading);
    blocks.push({
      _type: 'block',
      _key: k(),
      style: 'h2',
      children: h.spans,
      markDefs: h.markDefs,
    });

    // Intro paragraph
    if (section.intro) {
      const p = parseInlineHtml(section.intro);
      blocks.push({
        _type: 'block',
        _key: k(),
        style: 'normal',
        children: p.spans,
        markDefs: p.markDefs,
      });
    }

    // Paragraphs
    for (const para of section.paragraphs) {
      if (isImageOnly(para)) continue; // skip image-only paragraphs

      const p = parseInlineHtml(para);
      if (p.spans.length === 1 && !p.spans[0].text.trim()) continue;

      blocks.push({
        _type: 'block',
        _key: k(),
        style: 'normal',
        children: p.spans,
        markDefs: p.markDefs,
      });
    }

    // Bullet list
    if (section.bullets?.length) {
      for (const bullet of section.bullets) {
        const b = parseInlineHtml(bullet);
        blocks.push({
          _type: 'block',
          _key: k(),
          style: 'normal',
          listItem: 'bullet',
          level: 1,
          children: b.spans,
          markDefs: b.markDefs,
        });
      }
    }
  }

  return blocks;
}

// ─── Image upload ───────────────────────────────────────────────────

async function uploadImage(imagePath: string): Promise<any | null> {
  const rel = imagePath.replace(/^\//, '');
  const full = path.resolve(__dirname, '..', 'public', rel);

  if (!fs.existsSync(full)) {
    console.warn(`    Warning: image not found: ${rel}`);
    return null;
  }

  const buffer = fs.readFileSync(full);
  const ext = path.extname(full).slice(1).toLowerCase();
  const contentType = ext === 'png' ? 'image/png' : 'image/jpeg';

  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(full),
    contentType,
  });

  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  };
}

// ─── Main migration ─────────────────────────────────────────────────

async function migrate() {
  console.log('Blog migration: static posts -> Sanity\n');

  // 1. Categories
  const uniqueCategories = [...new Set(ALL_POSTS.map((p) => p.category))];
  const categoryIds = new Map<string, string>();

  console.log(`Creating ${uniqueCategories.length} categories...`);
  for (const title of uniqueCategories) {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    const doc = await client.createOrReplace({
      _id: `category-${slug}`,
      _type: 'category',
      title,
      slug: { _type: 'slug', current: slug },
    });
    categoryIds.set(title, doc._id);
    console.log(`  + ${title}`);
  }

  // 2. Author
  console.log('\nCreating author...');
  const author = await client.createOrReplace({
    _id: 'author-webloft-studio',
    _type: 'author',
    name: 'Webloft Studio',
  });
  console.log(`  + ${author.name}`);

  // 3. Posts
  console.log(`\nMigrating ${ALL_POSTS.length} posts...`);
  let count = 0;

  for (const post of ALL_POSTS) {
    count++;
    console.log(`\n[${count}/${ALL_POSTS.length}] ${post.title}`);

    // Upload main image
    let mainImage: any = undefined;
    if (post.image) {
      console.log(`  Uploading image: ${post.image}`);
      const img = await uploadImage(post.image);
      if (img) {
        img.alt = post.title;
        mainImage = img;
      }
    }

    // Convert sections → Portable Text
    const body = sectionsToBody(post.sections);
    console.log(`  Converted ${post.sections.length} sections -> ${body.length} blocks`);

    // Build podcast links (only non-empty URLs)
    let podcastLinks: any = undefined;
    if (post.podcastLinks) {
      const links: Record<string, string> = {};
      if (post.podcastLinks.spotify) links.spotify = post.podcastLinks.spotify;
      if (post.podcastLinks.applePodcasts) links.applePodcasts = post.podcastLinks.applePodcasts;
      if (post.podcastLinks.youtube) links.youtube = post.podcastLinks.youtube;
      if (Object.keys(links).length > 0) podcastLinks = links;
    }

    // Resolve audioUrl — must be absolute for Sanity's url type
    let audioUrl: string | undefined;
    if (post.audioUrl) {
      audioUrl = post.audioUrl.startsWith('/')
        ? SITE_URL + post.audioUrl
        : post.audioUrl;
    }

    // Build document
    const doc: { _id: string; _type: string } & Record<string, any> = {
      _id: `post-${post.slug}`,
      _type: 'post',
      title: post.title,
      shortTitle: post.shortTitle,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      publishedAt: `${post.isoDate}T12:00:00Z`,
      readTime: post.readTime,
      featured: post.featured,
      keywords: post.keywords,
      takeaways: post.takeaways,
      ctaTitle: post.ctaTitle,
      ctaText: post.ctaText,
      body,
      author: { _type: 'reference', _ref: author._id },
      categories: [
        { _type: 'reference', _ref: categoryIds.get(post.category)!, _key: k() },
      ],
    };

    if (mainImage) doc.mainImage = mainImage;
    if (audioUrl) doc.audioUrl = audioUrl;
    if (post.audioDuration) doc.audioDuration = post.audioDuration;
    if (post.chapters?.length) {
      doc.chapters = post.chapters.map((ch) => ({
        _type: 'podcastChapter',
        _key: k(),
        title: ch.title,
        timestamp: ch.timestamp,
      }));
    }
    if (podcastLinks) doc.podcastLinks = podcastLinks;

    await client.createOrReplace(doc);
    console.log(`  Done`);
  }

  console.log('\n---');
  console.log(`Migration complete!`);
  console.log(`  ${count} posts`);
  console.log(`  ${uniqueCategories.length} categories`);
  console.log(`  1 author`);
}

migrate().catch((err) => {
  console.error('\nMigration failed:', err);
  process.exit(1);
});
