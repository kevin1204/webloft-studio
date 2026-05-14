import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { defineField, defineType, defineArrayMember } from 'sanity';

/* ── Schemas ── */

const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule: any) =>
                  Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text' },
        { name: 'caption', type: 'string', title: 'Caption' },
      ],
    }),
  ],
});

const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 3 }),
  ],
});

const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
});

const podcastChapter = defineType({
  name: 'podcastChapter',
  title: 'Podcast Chapter',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Chapter Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'timestamp', title: 'Timestamp', type: 'string', description: 'e.g. "02:15"', validation: (Rule) => Rule.required() }),
  ],
});

const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'shortTitle', title: 'Short Title', type: 'string', description: 'Short label for cards (e.g. "Why Webflow works")' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime', validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string', placeholder: '5 min read' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'keywords', title: 'SEO Keywords', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' }, description: 'Keywords for meta tags and structured data' }),
    defineField({ name: 'body', title: 'Body', type: 'blockContent' }),
    defineField({ name: 'takeaways', title: 'Key Takeaways', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'ctaTitle', title: 'CTA Title', type: 'string' }),
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'text', rows: 2 }),

    /* ── Podcast / Audio ── */
    defineField({
      name: 'audioUrl',
      title: 'Audio URL',
      type: 'url',
      description: 'Cloudflare R2 or external audio URL (e.g. https://your-r2-bucket.com/episode.m4a)',
      validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
    }),
    defineField({ name: 'audioDuration', title: 'Audio Duration', type: 'string', description: 'e.g. "18:32"' }),
    defineField({
      name: 'chapters',
      title: 'Podcast Chapters',
      type: 'array',
      of: [{ type: 'podcastChapter' }],
      description: 'Chapter markers for the podcast player',
    }),
    defineField({
      name: 'podcastLinks',
      title: 'Podcast Platform Links',
      type: 'object',
      fields: [
        defineField({ name: 'spotify', title: 'Spotify URL', type: 'url' }),
        defineField({ name: 'applePodcasts', title: 'Apple Podcasts URL', type: 'url' }),
        defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', author: 'author.name', media: 'mainImage' },
    prepare(selection) {
      return { ...selection, subtitle: selection.author ? `by ${selection.author}` : '' };
    },
  },
});

/* ── Config ── */

export default defineConfig({
  name: 'webloft-studio',
  title: 'Webloft Studio',
  projectId: 'g1x6uxb8',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: [post, author, category, blockContent, podcastChapter] },
});
