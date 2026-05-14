'use client';

import Link from 'next/link';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
        <div className="eyebrow" style={{ marginBottom: 20 }}>
          <span className="dot" /> Something went wrong
        </div>

        <h1
          className="h-2"
          style={{ marginBottom: 16, maxWidth: 600, margin: '0 auto 16px' }}
        >
          An unexpected{' '}
          <span className="italic-serif" style={{ color: 'var(--accent)' }}>
            error
          </span>{' '}
          occurred.
        </h1>

        <p
          className="body-lg"
          style={{ maxWidth: 480, margin: '0 auto 40px' }}
        >
          We&rsquo;re sorry about that. Try refreshing the page or head back to the homepage.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button onClick={reset} className="ds-btn ds-btn-primary">
            Try again
          </button>
          <Link href="/" className="ds-btn">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
