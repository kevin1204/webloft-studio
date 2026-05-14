import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | Webloft Studio',
  description: "The page you're looking for doesn't exist or has been moved. Browse our services or get in touch.",
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 20%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'color-mix(in oklch, var(--accent), transparent 93%)',
          filter: 'blur(100px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="ds-container"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '80px 0',
        }}
      >
        {/* Large 404 */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(120px, 20vw, 240px)',
            fontWeight: 500,
            letterSpacing: '-0.05em',
            lineHeight: 0.85,
            color: 'var(--ink)',
            opacity: 0.07,
            userSelect: 'none',
            marginBottom: -20,
          }}
        >
          404
        </div>

        <div className="eyebrow" style={{ marginBottom: 20 }}>
          <span className="dot" /> Page Not Found
        </div>

        <h1
          className="h-2"
          style={{ marginBottom: 16, maxWidth: 600, margin: '0 auto 16px' }}
        >
          This page doesn&rsquo;t{' '}
          <span className="italic-serif" style={{ color: 'var(--accent)' }}>
            exist
          </span>
          .
        </h1>

        <p
          className="body-lg"
          style={{ maxWidth: 480, margin: '0 auto 40px' }}
        >
          The page you&rsquo;re looking for may have been moved or no longer exists.
          Let&rsquo;s get you back on track.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 56,
          }}
        >
          <Link href="/" className="ds-btn ds-btn-primary">
            Back to home
          </Link>
          <Link href="/contact" className="ds-btn">
            Get in touch
          </Link>
        </div>

        {/* Quick links */}
        <div
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: 32,
            maxWidth: 560,
            margin: '0 auto',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
              marginBottom: 16,
            }}
          >
            Popular pages
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              justifyContent: 'center',
            }}
          >
            {[
              ['Services', '/services'],
              ['Projects', '/projects'],
              ['Pricing', '/pricing'],
              ['Blog', '/blog'],
              ['Areas We Serve', '/areas-we-serve'],
              ['Free Audit', '/free-website-audit'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid var(--line)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.04em',
                  color: 'var(--ink-dim)',
                  textDecoration: 'none',
                  transition: 'all 0.3s var(--ease)',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
