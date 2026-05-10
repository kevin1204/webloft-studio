import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPost, getAllPostSlugs, getAllPostCards } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import PortableTextRenderer, { extractHeadings } from '@/components/PortableTextRenderer';
import SubscribeForm from '@/components/SubscribeForm';

/* ── Static blog-posts.ts fallback (remove after full migration) ── */
import { getBlogPost, getBlogPostMetadata } from '@/lib/blog-posts';
import BlogPostPage from '@/components/BlogPostPage';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

export async function generateStaticParams() {
  try {
    const sanity = await getAllPostSlugs();
    const params = sanity.map((p) => ({ slug: p.slug }));

    // Also include static slugs during migration
    const staticSlugs = [
      'why-webflow-best-platform-small-medium-businesses',
      'real-roi-great-website-investment-not-expense',
      'seo-local-seo-secret-getting-found-online',
      '5-common-website-mistakes-costing-clients',
      'how-often-update-website-why-matters',
      'web-design-services-toronto-ontario',
    ];
    const existing = new Set(params.map((p) => p.slug));
    for (const s of staticSlugs) {
      if (!existing.has(s)) params.push({ slug: s });
    }

    return params;
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPost(slug);
    if (post) {
      const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).url() : undefined;
      return {
        title: `${post.title} | Webloft Studio Blog`,
        description: post.excerpt || '',
        keywords: post.tags || [],
        openGraph: {
          title: post.title,
          description: post.excerpt || '',
          type: 'article',
          publishedTime: post.publishedAt,
          images: imageUrl ? [{ url: imageUrl }] : [],
        },
        alternates: {
          canonical: `https://webloftstudio.com/blog/${slug}`,
        },
      };
    }
  } catch { /* fall through to static */ }

  // Fallback to static metadata
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return getBlogPostMetadata(slug as any) || {};
  } catch {
    return {};
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  /* ── Try Sanity first ── */
  let post;
  try {
    post = await getPost(slug);
  } catch { /* continue to fallback */ }

  if (post) {
    const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).url() : null;
    const headings = extractHeadings(post.body || []);

    /* Related posts from Sanity */
    let relatedCards;
    try {
      const all = await getAllPostCards();
      relatedCards = all.filter((p) => p.slug !== slug).slice(0, 3);
    } catch {
      relatedCards = [];
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://webloftstudio.com/blog/${slug}`,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      articleSection: post.categories?.[0]?.title,
      timeRequired: post.readTime,
      keywords: post.tags,
      image: imageUrl,
      author: {
        '@type': 'Person',
        name: post.author?.name || 'Webloft Studio',
        url: 'https://webloftstudio.com/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Webloft Studio',
        url: 'https://webloftstudio.com',
        logo: { '@type': 'ImageObject', url: 'https://webloftstudio.com/webloftstudio.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://webloftstudio.com/blog/${slug}` },
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://webloftstudio.com/blog' },
        ...(post.categories?.[0]
          ? [{ '@type': 'ListItem', position: 2, name: post.categories[0].title }]
          : []),
        {
          '@type': 'ListItem',
          position: post.categories?.[0] ? 3 : 2,
          name: post.title,
          item: `https://webloftstudio.com/blog/${slug}`,
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <main className="wl-blog-post-page">
          <section className="wl-blog-post-hero">
            <div className="ds-container">
              <nav className="wl-blog-breadcrumb reveal" aria-label="Breadcrumb">
                <Link href="/blog">Blog</Link>
                {post.categories?.[0] && (
                  <>
                    <span className="wl-blog-breadcrumb-sep" aria-hidden="true">/</span>
                    <span>{post.categories[0].title}</span>
                  </>
                )}
                <span className="wl-blog-breadcrumb-sep" aria-hidden="true">/</span>
                <span className="wl-blog-breadcrumb-current" aria-current="page">{post.title}</span>
              </nav>

              <div className="wl-blog-post-hero-grid">
                <div className="reveal">
                  <div className="wl-blog-post-meta">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{post.readTime || '5 min read'}</span>
                  </div>
                  <h1 className="h-display wl-blog-post-title">{post.title}</h1>
                  {post.excerpt && <p className="body-lg wl-blog-post-excerpt">{post.excerpt}</p>}
                  <div className="wl-blog-post-actions">
                    <Link href="/contact" className="ds-btn ds-btn-primary">
                      Start a project <ArrowIcon />
                    </Link>
                    <Link href="/services" className="ds-btn ds-btn-ghost">
                      View services <ArrowIcon />
                    </Link>
                  </div>
                </div>

                <aside className="wl-blog-post-visual reveal" aria-label="Article summary">
                  {imageUrl && (
                    <div className="wl-blog-image-wrap">
                      <Image
                        src={imageUrl}
                        alt={post.mainImage?.alt || `${post.title} by Webloft Studio`}
                        fill
                        sizes="(max-width: 900px) 100vw, 420px"
                        priority
                      />
                    </div>
                  )}
                  {post.takeaways && post.takeaways.length > 0 && (
                    <div className="wl-blog-takeaways">
                      <span>Key takeaways</span>
                      <ul>
                        {post.takeaways.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </aside>
              </div>
            </div>
          </section>

          <article className="wl-blog-article-section">
            <div className="ds-container wl-blog-article-layout">
              {headings.length > 0 && (
                <aside className="wl-blog-toc reveal" aria-label="Article contents">
                  <div className="wl-blog-toc-card">
                    <span>In this article</span>
                    {headings.map((h) => (
                      <a href={`#${h.id}`} key={h.id}>
                        {h.text}
                      </a>
                    ))}
                  </div>
                </aside>
              )}

              <div className="wl-blog-prose">
                <PortableTextRenderer value={post.body} />
              </div>
            </div>
          </article>

          <section className="wl-blog-post-cta-section">
            <div className="ds-container">
              <div className="wl-blog-post-cta reveal">
                <div>
                  <p className="eyebrow">Next step</p>
                  <h2>{post.ctaTitle || 'Ready to improve your website?'}</h2>
                  <p>{post.ctaText || 'Get in touch and let\u2019s talk about what your website should be doing for your business.'}</p>
                </div>
                <Link href="/contact" className="ds-btn ds-btn-primary">
                  Talk to Webloft <ArrowIcon />
                </Link>
              </div>
            </div>
          </section>

          <section className="wl-blog-subscribe-section">
            <div className="ds-container">
              <div className="wl-subscribe-inline reveal">
                <div className="wl-subscribe-inline-copy">
                  <p className="eyebrow">
                    <span className="dot" />
                    Webloft Journal
                  </p>
                  <h2 className="wl-subscribe-inline-title">Practical website ideas in your inbox.</h2>
                  <p className="wl-subscribe-inline-desc">
                    No noise. Occasional notes on design, SEO, conversion, and the website decisions that help small and medium businesses grow.
                  </p>
                </div>
                <div className="wl-subscribe-inline-form">
                  <SubscribeForm variant="inline" />
                </div>
              </div>
            </div>
          </section>

          {relatedCards.length > 0 && (
            <section className="wl-blog-related-section">
              <div className="ds-container">
                <div className="wl-blog-section-head reveal">
                  <div>
                    <div className="eyebrow">
                      <span className="dot" />
                      Related articles
                    </div>
                    <h2 className="h-2">Keep reading.</h2>
                  </div>
                  <Link href="/blog" className="ds-btn ds-btn-ghost">
                    All articles <ArrowIcon />
                  </Link>
                </div>

                <div className="wl-blog-card-grid">
                  {relatedCards.map((item) => (
                    <Link href={`/blog/${item.slug}`} className="wl-blog-card ds-card reveal" key={item.slug}>
                      <div className="wl-blog-card-image">
                        <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                      </div>
                      <div className="wl-blog-card-body">
                        <div className="wl-blog-card-meta">
                          <span>{item.category}</span>
                          <span>{item.readTime}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.excerpt}</p>
                        <div className="wl-blog-card-link">
                          Read article <ArrowIcon />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </>
    );
  }

  /* ── Fallback to static blog-posts.ts ── */
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const staticPost = getBlogPost(slug as any);
    if (staticPost) return <BlogPostPage post={staticPost} />;
  } catch { /* not found */ }

  notFound();
}
