import type { Metadata } from 'next';

/* ── Types ─────────────────────────────────────────────────────────── */

export type BlogSection = {
  id: string;
  heading: string;
  intro?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  featured: boolean;
  image: string;
  keywords: string[];
  takeaways: string[];
  sections: BlogSection[];
  ctaTitle: string;
  ctaText: string;
  related: string[];
};

/* ── Post registry (add new imports here) ──────────────────────────── */

import post01 from '@/content/blog/why-webflow-best-platform-small-medium-businesses';
import post02 from '@/content/blog/real-roi-great-website-investment-not-expense';
import post03 from '@/content/blog/seo-local-seo-secret-getting-found-online';
import post04 from '@/content/blog/5-common-website-mistakes-costing-clients';
import post05 from '@/content/blog/how-often-update-website-why-matters';
import post06 from '@/content/blog/web-design-services-toronto-ontario';
import post07 from '@/content/blog/why-your-small-business-website-is-not-getting-leads';

const ALL_POSTS: BlogPost[] = [
  post01,
  post02,
  post03,
  post04,
  post05,
  post06,
  post07,
];

/* ── Public helpers ────────────────────────────────────────────────── */

/** All static posts sorted newest-first by isoDate. */
export function getAllPosts(): BlogPost[] {
  return [...ALL_POSTS].sort(
    (a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
  );
}

/** All post slugs (useful for generateStaticParams / sitemap). */
export function getAllSlugs(): string[] {
  return ALL_POSTS.map((p) => p.slug);
}

/** Find a single post by slug. Returns undefined if not found. */
export function getPost(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

/** Find a single post by slug. Throws if not found. */
export function getBlogPost(slug: string): BlogPost {
  const post = getPost(slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}

/** Resolve the related-posts list for a given post. */
export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is BlogPost => p !== undefined);
}

/** Generate Next.js Metadata for a blog post. */
export function getPostMetadata(slug: string): Metadata {
  const post = getBlogPost(slug);
  const url = `https://webloftstudio.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Webloft Studio`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: 'Webloft Studio',
      type: 'article',
      publishedTime: post.isoDate,
      authors: ['Webloft Studio'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}
