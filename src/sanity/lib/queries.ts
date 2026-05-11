import { client } from './client';
import { urlFor } from './image';
import type { BlogCardData, SanityPostListItem, SanityPost } from './types';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Map a Sanity list item to the shape blog cards / BlogIndex expect */
export function toCardData(item: SanityPostListItem, index: number): BlogCardData {
  return {
    slug: item.slug.current,
    number: String(index + 1).padStart(2, '0'),
    title: item.title,
    excerpt: item.excerpt || '',
    category: item.categories?.[0]?.title || 'General',
    date: formatDate(item.publishedAt),
    isoDate: item.publishedAt.split('T')[0],
    readTime: item.readTime || '5 min read',
    image: item.mainImage ? urlFor(item.mainImage).width(800).url() : '/blog/placeholder.jpg',
    featured: item.featured ?? false,
  };
}

export async function getAllPosts(): Promise<SanityPostListItem[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      subtitle,
      slug,
      excerpt,
      publishedAt,
      readTime,
      featured,
      mainImage,
      categories[]->{ title, slug }
    }`
  );
}

export async function getAllPostCards(): Promise<BlogCardData[]> {
  const posts = await getAllPosts();
  return posts.map(toCardData);
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      subtitle,
      slug,
      excerpt,
      publishedAt,
      readTime,
      featured,
      mainImage,
      body,
      tags,
      takeaways,
      ctaTitle,
      ctaText,
      author->{ name, image, bio },
      categories[]->{ title, slug }
    }`,
    { slug }
  );
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
}
