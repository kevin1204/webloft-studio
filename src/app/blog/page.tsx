import Image from 'next/image';
import Link from 'next/link';
import { getAllPostCards } from '@/sanity/lib/queries';
import { getAllPosts } from '@/lib/blog';
import { redis } from '@/lib/redis';
import type { BlogCardData } from '@/sanity/lib/types';
import BlogIndex from '@/components/BlogIndex';
import SubscribeModal from '@/components/SubscribeModal';
import SubscribeForm from '@/components/SubscribeForm';
import CTASection from '@/components/home/CTASection';

export const metadata = {
  title: 'Web Design Blog | SEO, Conversion & Website Growth | Webloft Studio',
  description:
    'Practical notes on web design, SEO, and conversion for service businesses. Learn what makes websites earn more leads — and how to fix yours. Read free guides.',
  keywords: [
    'web design blog',
    'website strategy',
    'SEO insights',
    'conversion focused web design',
    'Webflow tips',
    'business website tips',
  ],
  alternates: {
    canonical: 'https://webloftstudio.com/blog',
  },
  openGraph: {
    title: 'Web Design Blog | SEO, Conversion & Website Growth | Webloft Studio',
    description: 'Practical notes on web design, SEO, and conversion for service businesses. Learn what makes websites earn more leads — and how to fix yours.',
    url: 'https://webloftstudio.com/blog',
    siteName: 'Webloft Studio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Blog | Webloft Studio',
    description: 'Practical notes on web design, SEO, and conversion for service businesses.',
  },
};

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

/** Convert static posts to BlogCardData shape */
function staticToCards(): BlogCardData[] {
  return getAllPosts().map((p) => ({
    slug: p.slug,
    number: p.number,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    isoDate: p.isoDate,
    readTime: p.readTime,
    image: p.image,
    featured: p.featured,
  }));
}

/** Fetch all view counts from Redis in one batch */
async function getViewCounts(slugs: string[]): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  try {
    const pipeline = redis.pipeline();
    for (const slug of slugs) {
      pipeline.get(`blog:views:${slug}`);
    }
    const results = await pipeline.exec();
    slugs.forEach((slug, i) => {
      counts[slug] = (results[i] as number) ?? 0;
    });
  } catch {
    // Redis unreachable — return zeros
    slugs.forEach((slug) => { counts[slug] = 0; });
  }
  return counts;
}

export default async function Blog() {
  /* Always show static posts + any new Sanity posts, deduped by slug */
  const staticPosts = staticToCards();
  let sanityPosts: BlogCardData[] = [];

  try {
    sanityPosts = await getAllPostCards();
  } catch { /* Sanity unreachable — static posts still show */ }

  const staticSlugs = new Set(staticPosts.map((p) => p.slug));
  const newSanityPosts = sanityPosts.filter((p) => !staticSlugs.has(p.slug));
  const posts = [...staticPosts, ...newSanityPosts];

  const latest = [...posts].sort((a, b) => Number(new Date(b.isoDate)) - Number(new Date(a.isoDate)));
  const topPost = latest[0];

  /* Fetch view counts (used only for "Popular" badge logic, not displayed) */
  const viewCounts = await getViewCounts(posts.map((p) => p.slug));

  /* Determine popular posts (top 3 by views, min 5 views to qualify) */
  const popularSlugs = new Set(
    Object.entries(viewCounts)
      .filter(([, v]) => v >= 5)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([slug]) => slug)
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://webloftstudio.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://webloftstudio.com/blog' },
    ],
  };

  return (
    <main className="wl-blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="wl-blog-hero">
        <div className="ds-container">
          <div className="wl-blog-meta-row reveal">
            <div className="eyebrow">
              <span className="dot" />
              Webloft Journal
            </div>
            <div className="wl-blog-kicker">({String(posts.length).padStart(2, '0')}) - Articles</div>
          </div>

          <div className="wl-blog-hero-grid">
            <div className="reveal">
              <h1 className="h-display wl-blog-title">
                Website thinking for businesses that want{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  better leads.
                </span>
              </h1>
            </div>
            <div className="wl-blog-hero-copy reveal">
              <p className="body-lg">
                Practical notes on web design, SEO, conversion, Webflow, maintenance, analytics, and the decisions that make a website easier to trust and easier to act on.
              </p>
              <div className="wl-blog-hero-actions">
                <Link href="/contact" className="ds-btn ds-btn-primary">
                  Talk to us <ArrowIcon />
                </Link>
                <SubscribeModal />
              </div>
            </div>
          </div>
        </div>
      </section>

      {topPost && (
        <section className="wl-blog-featured-section">
          <div className="ds-container">
            <Link href={`/blog/${topPost.slug}`} className="wl-blog-feature-card wl-blog-feature-editorial reveal">
              <div className="wl-blog-feature-image">
                <Image
                  src={topPost.image}
                  alt={topPost.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  priority
                />
              </div>
              <div className="wl-blog-feature-copy">
                <div className="wl-blog-feature-label">
                  <span className="wl-blog-feature-latest-tag">Latest</span>
                  <span className="wl-blog-card-cat">{topPost.category}</span>
                </div>
                <div className="wl-blog-card-meta">
                  <span>{topPost.date}</span>
                  <span>{topPost.readTime}</span>
                </div>
                <h2>{topPost.title}</h2>
                <p>{topPost.excerpt}</p>
                <div className="wl-blog-feature-footer">
                  <div className="wl-blog-author">
                    <Image src="/kevin4.png" alt="Kevin Ortega" width={32} height={32} className="wl-blog-author-avatar" />
                    <span className="wl-blog-author-name">Kevin Ortega</span>
                  </div>
                  <div className="wl-blog-card-link">
                    Read latest <ArrowIcon />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <BlogIndex posts={posts} popularSlugs={Array.from(popularSlugs)} />

      <section className="wl-blog-newsletter-section">
        <div className="ds-container">
          <div className="wl-blog-newsletter reveal">
            <div>
              <p className="eyebrow">Website growth notes</p>
              <h2>Get practical website ideas without the noise.</h2>
              <p>
                Occasional notes on better service pages, stronger conversion paths, SEO foundations, and launch decisions.
              </p>
            </div>
            <SubscribeForm variant="footer" />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
