/* eslint-disable @typescript-eslint/no-explicit-any */

/** Minimal shape used by blog card grids and index pages */
export type BlogCardData = {
  slug: string;
  number: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  image: string;
  featured: boolean;
};

/** Full post shape returned by Sanity for single-post pages */
export type SanityPost = {
  _id: string;
  _updatedAt?: string;
  title: string;
  subtitle?: string;
  shortTitle?: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  readTime?: string;
  featured?: boolean;
  mainImage?: any;
  body?: any;
  tags?: string[];
  keywords?: string[];
  takeaways?: string[];
  ctaTitle?: string;
  ctaText?: string;
  author?: { name: string; image?: any; bio?: string };
  categories?: { title: string; slug: { current: string } }[];

  /* Podcast / Audio */
  audioUrl?: string;
  audioDuration?: string;
  chapters?: { title: string; timestamp: string }[];
  podcastLinks?: {
    spotify?: string;
    applePodcasts?: string;
    youtube?: string;
  };
};

/** Raw list item shape from Sanity query */
export type SanityPostListItem = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  readTime?: string;
  featured?: boolean;
  mainImage?: any;
  categories?: { title: string; slug: { current: string } }[];
};
