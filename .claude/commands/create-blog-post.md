# Create a New Blog Post

You are creating a new blog post for Webloft Studio, a web design agency based in Ontario, Canada.

## User Input

The user will provide: $ARGUMENTS

This could be a topic, title, key points, or a reference page/document to base the post on. If the input is vague, ask clarifying questions before writing.

## Step 1: Determine the next post number

Read `/src/lib/blog.ts` to find the current number of posts in the `ALL_POSTS` array. The new post number is the next sequential number (e.g., if there are 7 posts, the new one is `08`).

## Step 2: Generate the slug

Create an SEO-friendly slug from the title. Rules:
- All lowercase, words separated by hyphens
- No stop words (the, a, an, is, for, of, etc.) unless they improve readability
- Keep it under 8 words
- Must be unique — check existing slugs in `src/lib/blog.ts`

## Step 3: Create the blog post file

Create the file at: `src/content/blog/{slug}.ts`

The file must export a default `BlogPost` object matching this exact TypeScript type:

```typescript
import type { BlogPost } from '@/lib/blog';

const post: BlogPost = {
  slug: string,           // URL slug (same as filename)
  number: string,         // Zero-padded (e.g., '08')
  title: string,          // Full SEO title
  shortTitle: string,     // 1-3 word label for cards
  excerpt: string,        // 1-3 sentences, ~150-200 chars, for meta description
  category: string,       // One of: 'Web Design', 'Technology', 'Conversion', 'Strategy', 'SEO', 'Website Strategy'
  date: string,           // Human-readable: 'May 12, 2026'
  isoDate: string,        // ISO format: '2026-05-12'
  readTime: string,       // e.g., '5 min read', '8 min read'
  featured: boolean,      // true for important posts
  image: string,          // Path: '/blog/blog-{number}.png'
  keywords: string[],     // 5-10 SEO keywords
  takeaways: string[],    // 3 key takeaways shown in sidebar
  sections: BlogSection[],// Article body sections (see below)
  ctaTitle: string,       // CTA heading at end of article
  ctaText: string,        // CTA paragraph at end of article
  related: string[],      // 3 slugs of related existing posts
};

export default post;
```

Each section in the `sections` array:

```typescript
type BlogSection = {
  id: string,          // kebab-case anchor ID
  heading: string,     // Section heading (h2)
  intro?: string,      // Optional italic intro line
  paragraphs: string[],// Body paragraphs
  bullets?: string[],  // Optional bullet points
};
```

## Step 4: Register the post

Edit `src/lib/blog.ts`:
1. Add an import: `import post{NUMBER} from '@/content/blog/{slug}';`
2. Add `post{NUMBER}` to the `ALL_POSTS` array

## Step 5: Verify

Run `npx tsc --noEmit` to check for TypeScript errors.

## Copywriting Rules

**Voice & Tone:**
- Write like a real studio talking to real business owners — practical, direct, no fluff
- Use "you" and "your" — speak to the reader
- Avoid buzzwords: "leverage", "synergy", "cutting-edge", "innovative", "revolutionary"
- Avoid generic AI filler: "In today's digital landscape", "In the ever-evolving world of"
- Short paragraphs (2-4 sentences max). Break up walls of text.
- Use concrete examples, specific numbers, and real scenarios
- Reference Ontario/Canadian context where relevant (Google Business Profile, local SEO, etc.)

**Structure:**
- 8-12 sections per post
- First section is always an intro (id: 'intro') that hooks the reader
- Last section is always a wrap-up (id: 'final-thoughts' or similar)
- Mix sections WITH bullets and WITHOUT bullets for variety
- Each section should be self-contained and scannable
- Bullets should be specific, not generic platitudes

**SEO:**
- Title should include the primary keyword naturally
- Excerpt must work as a meta description (compelling, ~150-200 chars)
- Keywords array should include long-tail variations
- Use the primary keyword in the intro section naturally
- Section headings should be conversational, not keyword-stuffed

**CTA at the end:**
- ctaTitle: Ask a question related to the post topic
- ctaText: 2-3 sentences connecting the topic to Webloft Studio's services. End with a clear action.

**Related posts — choose 3 from existing posts:**

Do NOT use a hardcoded list. Instead:
1. Read `src/lib/blog.ts` to get all current post imports and their slugs
2. Read the slug files if needed to understand each post's topic and category
3. Pick the 3 most topically relevant posts based on category, keywords, and subject matter overlap
4. Never include the current post's own slug in the related list
5. Prefer a mix: at least one post from the same category, and others that complement the topic

## Blog Image

The image field should be set to `/blog/blog-{number}.png`. Remind the user that they need to add the actual image file to `public/blog/` directory.

## Example Output Structure

For a post about "Why Webflow is better than WordPress":

```
src/content/blog/webflow-vs-wordpress-which-better-for-business.ts
```

Then registered in `src/lib/blog.ts` as:
```typescript
import post08 from '@/content/blog/webflow-vs-wordpress-which-better-for-business';
// ...
const ALL_POSTS: BlogPost[] = [
  // ... existing posts
  post08,
];
```
