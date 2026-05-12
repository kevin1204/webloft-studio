'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type PostView = { slug: string; views: number };

export default function AdminViewsPage() {
  const [data, setData] = useState<PostView[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/views/popular?limit=100')
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalViews = data.reduce((sum, d) => sum + d.views, 0);

  return (
    <main style={{ minHeight: '100vh', padding: '80px 0' }}>
      <div className="ds-container" style={{ maxWidth: 900 }}>
        <Link
          href="/blog"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: 'var(--ink-mute)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 32,
          }}
        >
          &larr; Back to blog
        </Link>

        <div style={{ marginBottom: 48 }}>
          <p
            className="eyebrow"
            style={{ marginBottom: 8 }}
          >
            <span className="dot" /> Admin
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 600,
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            Blog View Counter
          </h1>
        </div>

        {/* Stats cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <StatCard label="Total views" value={loading ? '...' : totalViews.toLocaleString()} />
          <StatCard label="Posts tracked" value={loading ? '...' : String(data.length)} />
          <StatCard
            label="Top post views"
            value={loading ? '...' : (data[0]?.views ?? 0).toLocaleString()}
          />
        </div>

        {/* Table */}
        <div
          style={{
            background: 'var(--bg-elev)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr 100px',
              padding: '14px 20px',
              borderBottom: '1px solid var(--line)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--ink-mute)',
            }}
          >
            <span>#</span>
            <span>Post</span>
            <span style={{ textAlign: 'right' }}>Views</span>
          </div>

          {loading ? (
            <div
              style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: 'var(--ink-dim)',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
              }}
            >
              Loading view data...
            </div>
          ) : data.length === 0 ? (
            <div
              style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: 'var(--ink-dim)',
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
              }}
            >
              No views recorded yet. Views will appear here as visitors read your blog posts.
            </div>
          ) : (
            data.map((item, i) => {
              const maxViews = data[0]?.views || 1;
              const pct = maxViews > 0 ? (item.views / maxViews) * 100 : 0;

              return (
                <div
                  key={item.slug}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr 100px',
                    padding: '14px 20px',
                    borderBottom: i < data.length - 1 ? '1px solid var(--line)' : 'none',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Bar background */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'var(--accent)',
                      opacity: 0.04,
                      width: `${pct}%`,
                      transition: 'width 0.6s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      color: 'var(--ink-mute)',
                    }}
                  >
                    {i + 1}
                  </span>

                  <Link
                    href={`/blog/${item.slug}`}
                    style={{
                      color: 'var(--ink)',
                      textDecoration: 'none',
                      fontSize: 14,
                      fontWeight: 500,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      paddingRight: 16,
                    }}
                  >
                    {formatSlug(item.slug)}
                  </Link>

                  <span
                    style={{
                      textAlign: 'right',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: i === 0 ? 'var(--accent)' : 'var(--ink)',
                    }}
                  >
                    {item.views.toLocaleString()}
                  </span>
                </div>
              );
            })
          )}
        </div>

        <p
          style={{
            marginTop: 20,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-mute)',
          }}
        >
          Views are counted once per visitor session. Data stored in Upstash Redis.
        </p>
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: 'var(--bg-elev)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r-lg)',
        padding: '20px 24px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--ink-mute)',
          margin: '0 0 8px',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          fontWeight: 600,
          color: 'var(--accent)',
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}

/** Convert a slug like "how-small-businesses-use-ai" to "How Small Businesses Use AI" */
function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
