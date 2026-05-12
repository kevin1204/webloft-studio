import { MetadataRoute } from 'next'
import { servicePageSlugs } from '@/lib/service-pages'
import { getAllPostSlugs } from '@/sanity/lib/queries'
import { getAllSlugs as getStaticBlogSlugs } from '@/lib/blog'
import { getAllCitySlugs } from '@/lib/city-pages'
import { getAllIndustrySlugs } from '@/lib/industry-pages'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://webloftstudio.com'

  /* ── Blog slugs: static posts + any additional Sanity posts ── */
  const blogSlugs = new Set(getStaticBlogSlugs())
  try {
    const sanity = await getAllPostSlugs()
    for (const p of sanity) blogSlugs.add(p.slug)
  } catch { /* Sanity unreachable — static slugs still covered */ }

  return [
    // ── Core pages ──────────────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/results`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-website-audit`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web-design-pricing-guide`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/high-converting-websites`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/template-based-websites`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // ── Legal ────────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // ── Blog (dynamic from Sanity) ──────────────────────────────────────────
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...[...blogSlugs].map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // ── Service pages ─────────────────────────────────────────────────────────
    ...servicePageSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // ── Local SEO pages (city landing pages) ─────────────────────────────────
    ...getAllCitySlugs().map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // ── Industry landing pages ─────────────────────────────────────────────
    ...getAllIndustrySlugs().map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // ── Lead magnets ──────────────────────────────────────────────────────
    {
      url: `${baseUrl}/free-ebook/service-business-website-blueprint`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-ebook/website-launch-checklist`,
      lastModified: new Date('2025-05-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/web-design-toronto/webflow-development`,
      lastModified: new Date('2025-02-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ── Case studies ──────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/case-studies/aeries`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/amigo-contracting-services`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/flowga-yoga-studio`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/lila-hart`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies/sportlink-events`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
