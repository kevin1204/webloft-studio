import Image from 'next/image';
import Link from 'next/link';
import { getAllPostCards } from '@/sanity/lib/queries';
import { getAllPosts } from '@/lib/blog';
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

  const featured = posts.filter((post) => post.featured);
  const latest = [...posts].sort((a, b) => Number(new Date(b.isoDate)) - Number(new Date(a.isoDate)));
  const topPost = latest[0];

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
            <Link href={`/blog/${topPost.slug}`} className="wl-blog-feature-card reveal">
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
                <div className="wl-blog-card-meta">
                  <span>{topPost.category}</span>
                  <span>{topPost.date}</span>
                  <span>{topPost.readTime}</span>
                </div>
                <h2>{topPost.title}</h2>
                <p>{topPost.excerpt}</p>
                <div className="wl-blog-card-link">
                  Read latest <ArrowIcon />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="wl-blog-list-section">
        <div className="ds-container">
          <div className="wl-blog-section-head reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                Featured
              </div>
              <h2 className="h-2">Useful, not noisy.</h2>
            </div>
            <p className="body-lg">
              Start with the strategy pieces that help most businesses make better website decisions before they spend on design, SEO, or ads.
            </p>
          </div>

          <div className="wl-blog-card-grid wl-blog-card-grid-featured">
            {featured.map((post) => (
              <Link href={`/blog/${post.slug}`} className="wl-blog-card ds-card reveal" key={post.slug}>
                <div className="wl-blog-card-image">
                  <div className="wl-blog-card-badge">
                    <span className="wl-blog-card-number">{post.number}</span>
                    <span className="wl-blog-card-cat">{post.category}</span>
                  </div>
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <div className="wl-blog-card-body">
                  <div className="wl-blog-card-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="wl-blog-card-link">
                    Read article <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlogIndex posts={posts} />

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
