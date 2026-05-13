'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cityPages } from '@/lib/city-pages';
import { industryPages } from '@/lib/industry-pages';

/* ── Group cities by region ─────────────────────────────────── */
const regionMap: Record<string, typeof cityPages> = {};
for (const c of cityPages) {
  if (!regionMap[c.region]) regionMap[c.region] = [];
  regionMap[c.region].push(c);
}
const regions = Object.entries(regionMap);

/* ── Counter hook ────────────────────────────────────────────── */
function useCounter(end: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          setVal(Math.round(ease * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return { val, ref };
}

/* ── Reveal-on-scroll hook ──────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Stat card ───────────────────────────────────────────────── */
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: 'var(--accent)',
        }}
      >
        {val}{suffix}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase' as const,
          color: 'var(--ink-mute)',
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ── Industry icon map ──────────────────────────────────────── */
const industryIcons: Record<string, string> = {
  Contractors: '⚒',
  'Dental Practices': '🦷',
  'Law Firms': '⚖',
  'Real Estate': '🏠',
  'Fitness & Wellness': '💪',
};

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */
export default function AreasWeServe() {
  const hero = useReveal();
  const map = useReveal();
  const citySection = useReveal();
  const industrySection = useReveal();
  const cta = useReveal();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        ref={hero.ref}
        style={{
          paddingTop: 'clamp(80px, 12vw, 160px)',
          paddingBottom: 'clamp(60px, 8vw, 120px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative grid bg — base lines */}
        <div
          className="areas-grid-bg"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            opacity: 0.6,
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        {/* Running horizontal illumination lines */}
        <div className="areas-running-h-1" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '20%', left: 0, width: '100%', height: 1,
            background: 'linear-gradient(90deg, transparent 0%, var(--accent) 15%, var(--accent) 25%, transparent 40%)',
            opacity: 0.5,
            animation: 'areasRunH 4s linear infinite',
          }} />
        </div>
        <div className="areas-running-h-2" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '55%', left: 0, width: '100%', height: 1,
            background: 'linear-gradient(90deg, transparent 0%, var(--accent) 15%, var(--accent) 25%, transparent 40%)',
            opacity: 0.35,
            animation: 'areasRunH 5.5s linear infinite',
            animationDelay: '-2s',
          }} />
        </div>
        <div className="areas-running-h-3" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '80%', left: 0, width: '100%', height: 1,
            background: 'linear-gradient(90deg, transparent 0%, var(--accent) 15%, var(--accent) 25%, transparent 40%)',
            opacity: 0.25,
            animation: 'areasRunH 6.5s linear infinite',
            animationDelay: '-4s',
          }} />
        </div>

        {/* Running vertical illumination lines */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: '15%', top: 0, height: '100%', width: 1,
            background: 'linear-gradient(180deg, transparent 0%, var(--accent) 20%, var(--accent) 30%, transparent 45%)',
            opacity: 0.4,
            animation: 'areasRunV 5s linear infinite',
            animationDelay: '-1s',
          }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: '50%', top: 0, height: '100%', width: 1,
            background: 'linear-gradient(180deg, transparent 0%, var(--accent) 20%, var(--accent) 30%, transparent 45%)',
            opacity: 0.3,
            animation: 'areasRunV 4.5s linear infinite',
            animationDelay: '-3s',
          }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: '82%', top: 0, height: '100%', width: 1,
            background: 'linear-gradient(180deg, transparent 0%, var(--accent) 20%, var(--accent) 30%, transparent 45%)',
            opacity: 0.35,
            animation: 'areasRunV 6s linear infinite',
            animationDelay: '-0.5s',
          }} />
        </div>

        {/* Intersection glow dots — where running lines cross */}
        {[
          { top: '20%', left: '15%', delay: '0s' },
          { top: '20%', left: '50%', delay: '1.2s' },
          { top: '55%', left: '82%', delay: '0.6s' },
          { top: '80%', left: '50%', delay: '1.8s' },
          { top: '55%', left: '15%', delay: '2.5s' },
        ].map((dot, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: dot.top,
              left: dot.left,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 12px 4px color-mix(in oklch, var(--accent), transparent 40%)',
              animation: 'areasGlowDot 3s ease-in-out infinite',
              animationDelay: dot.delay,
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        <div className="ds-container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              textAlign: 'center',
              opacity: hero.visible ? 1 : 0,
              transform: hero.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="dot" /> Areas We Serve
            </div>
            <h1 className="h-1" style={{ marginBottom: 24 }}>
              Great design,{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                everywhere
              </span>{' '}
              you are.
            </h1>
            <p
              className="body-lg"
              style={{
                maxWidth: 620,
                margin: '0 auto',
                opacity: hero.visible ? 1 : 0,
                transform: hero.visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              We build high-performance websites for businesses across{' '}
              <strong style={{ color: 'var(--ink)' }}>all of North America</strong>. Whether
              you&rsquo;re downtown Toronto or across the continent, you get the same obsessive
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section style={{ paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="ds-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32,
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              padding: '40px 0',
            }}
            className="stats-grid"
          >
            <Stat value={16} suffix="+" label="Cities served" />
            <Stat value={5} suffix="" label="Industries" />
            <Stat value={312} suffix="%" label="Avg. lead lift" />
            <Stat value={99} suffix="/100" label="PageSpeed" />
          </div>
        </div>
      </section>

      {/* ── Map / continent visual ────────────────────────────── */}
      <section
        ref={map.ref}
        style={{
          paddingBottom: 'clamp(80px, 10vw, 140px)',
        }}
      >
        <div className="ds-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 4vw, 80px)',
              alignItems: 'center',
            }}
            className="map-grid"
          >
            {/* Left: text */}
            <div
              style={{
                opacity: map.visible ? 1 : 0,
                transform: map.visible ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot" /> Coast to Coast
              </div>
              <h2 className="h-2" style={{ marginBottom: 20 }}>
                We serve{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>all</span> of
                North America.
              </h2>
              <p className="body-lg" style={{ marginBottom: 32 }}>
                Our process is fully remote-first, built around async communication, screen shares,
                and real-time collaboration tools. You get the same premium experience whether
                we&rsquo;re in the same city or across the continent.
              </p>
              <p className="body" style={{ marginBottom: 32 }}>
                We&rsquo;ve highlighted the cities and industries where we have the deepest
                expertise below &mdash; but if you don&rsquo;t see your area,{' '}
                <strong style={{ color: 'var(--ink)' }}>we still want to hear from you</strong>.
              </p>
              <Link
                href="/contact"
                className="ds-btn ds-btn-primary"
              >
                Get in touch →
              </Link>
            </div>

            {/* Right: stylised continent outline */}
            <div
              style={{
                opacity: map.visible ? 1 : 0,
                transform: map.visible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                transition: 'all 1s 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--line)',
                  background: 'var(--bg-elev)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Grid pattern bg */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'radial-gradient(circle, var(--line-strong) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.5,
                  }}
                />

                {/* Pulsing dots representing cities */}
                {[
                  { top: '32%', left: '28%', label: 'Toronto', size: 14 },
                  { top: '28%', left: '32%', label: 'Ottawa', size: 8 },
                  { top: '35%', left: '24%', label: 'Hamilton', size: 8 },
                  { top: '30%', left: '22%', label: 'KW', size: 7 },
                  { top: '38%', left: '30%', label: 'Burlington', size: 7 },
                  { top: '68%', left: '42%', label: 'Miami', size: 10 },
                  { top: '55%', left: '25%', label: 'Dallas', size: 10 },
                  { top: '52%', left: '22%', label: 'Austin', size: 9 },
                ].map((dot) => (
                  <div
                    key={dot.label}
                    style={{
                      position: 'absolute',
                      top: dot.top,
                      left: dot.left,
                      width: dot.size,
                      height: dot.size,
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      boxShadow: '0 0 12px color-mix(in oklch, var(--accent), transparent 40%)',
                      zIndex: 2,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: -6,
                        borderRadius: '50%',
                        border: '1px solid var(--accent)',
                        opacity: 0.3,
                        animation: 'areasPulse 2.5s ease-in-out infinite',
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: dot.size + 6,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 9,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--ink-dim)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {dot.label}
                    </div>
                  </div>
                ))}

                {/* Large label */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    padding: 32,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(48px, 8vw, 80px)',
                      fontWeight: 500,
                      letterSpacing: '-0.04em',
                      lineHeight: 0.9,
                      color: 'var(--ink)',
                      opacity: 0.08,
                    }}
                  >
                    NORTH
                    <br />
                    AMERICA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── City grid ─────────────────────────────────────────── */}
      <section
        ref={citySection.ref}
        style={{
          paddingTop: 'clamp(60px, 8vw, 100px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="ds-container">
          <div
            style={{
              maxWidth: 680,
              marginBottom: 'clamp(48px, 6vw, 80px)',
              opacity: citySection.visible ? 1 : 0,
              transform: citySection.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot" /> Featured Locations
            </div>
            <h2 className="h-2" style={{ marginBottom: 16 }}>
              Local expertise,{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                proven results
              </span>
              .
            </h2>
            <p className="body-lg">
              We know the markets, the competitors, and the search patterns. Each city page is
              tailored with local SEO, neighbourhood-level targeting, and region-specific copy.
            </p>
          </div>

          {regions.map(([region, cities], ri) => (
            <div
              key={region}
              style={{
                marginBottom: ri < regions.length - 1 ? 56 : 0,
                opacity: citySection.visible ? 1 : 0,
                transform: citySection.visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.8s ${0.1 + ri * 0.15}s cubic-bezier(0.16, 1, 0.3, 1)`,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--ink-mute)',
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {region}
              </div>
              <div
                className="city-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 12,
                }}
              >
                {cities.map((city, ci) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '16px 20px',
                      borderRadius: 'var(--r-md)',
                      border: '1px solid var(--line)',
                      background: 'var(--bg-elev)',
                      textDecoration: 'none',
                      transition: 'all 0.35s var(--ease)',
                      opacity: citySection.visible ? 1 : 0,
                      transform: citySection.visible ? 'translateY(0)' : 'translateY(16px)',
                      transitionDelay: citySection.visible ? `${0.2 + ci * 0.04}s` : '0s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.background = 'var(--bg-elev-2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--line)';
                      e.currentTarget.style.background = 'var(--bg-elev)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Accent marker */}
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                        boxShadow: '0 0 8px color-mix(in oklch, var(--accent), transparent 60%)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 16,
                        fontWeight: 500,
                        color: 'var(--ink)',
                        flex: 1,
                      }}
                    >
                      {city.city}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--ink-mute)',
                      }}
                    >
                      View →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Industry grid ─────────────────────────────────────── */}
      <section
        ref={industrySection.ref}
        style={{
          paddingTop: 'clamp(60px, 8vw, 100px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          borderTop: '1px solid var(--line)',
          background: 'var(--bg-elev)',
        }}
      >
        <div className="ds-container">
          <div
            style={{
              maxWidth: 680,
              marginBottom: 'clamp(48px, 6vw, 80px)',
              opacity: industrySection.visible ? 1 : 0,
              transform: industrySection.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot" /> Industries We Specialize In
            </div>
            <h2 className="h-2" style={{ marginBottom: 16 }}>
              Built for{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                your industry
              </span>
              .
            </h2>
            <p className="body-lg">
              Every industry has unique challenges, buyer psychology, and search patterns.
              We&rsquo;ve built dedicated solutions for each.
            </p>
          </div>

          <div
            className="industry-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 16,
            }}
          >
            {industryPages.map((ind, i) => (
              <Link
                key={ind.slug}
                href={`/${ind.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  padding: 'clamp(24px, 3vw, 32px)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--line)',
                  background: 'var(--bg)',
                  textDecoration: 'none',
                  transition: 'all 0.4s var(--ease)',
                  opacity: industrySection.visible ? 1 : 0,
                  transform: industrySection.visible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: industrySection.visible ? `${0.15 + i * 0.08}s` : '0s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 32px color-mix(in oklch, var(--accent), transparent 85%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--r-md)',
                    background: 'color-mix(in oklch, var(--accent), transparent 88%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                  }}
                >
                  {industryIcons[ind.industry] || '●'}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 1.4vw, 22px)',
                      fontWeight: 500,
                      color: 'var(--ink)',
                      letterSpacing: '-0.01em',
                      marginBottom: 8,
                    }}
                  >
                    {ind.displayName}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: 'var(--ink-dim)',
                      margin: 0,
                    }}
                  >
                    {ind.heroSubtext.length > 120
                      ? ind.heroSubtext.slice(0, 120).trim() + '...'
                      : ind.heroSubtext}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--accent)',
                  }}
                >
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Don't see your city? CTA ─────────────────────────── */}
      <section
        ref={cta.ref}
        style={{
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          borderTop: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'color-mix(in oklch, var(--accent), transparent 92%)',
            filter: 'blur(120px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />

        <div className="ds-container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              maxWidth: 720,
              margin: '0 auto',
              textAlign: 'center',
              opacity: cta.visible ? 1 : 0,
              transform: cta.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h2 className="h-2" style={{ marginBottom: 20 }}>
              Don&rsquo;t see your city?{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                We&rsquo;re still here.
              </span>
            </h2>
            <p className="body-lg" style={{ marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
              We work with businesses across all of North America. Our remote-first process means
              you get the same premium experience no matter where you are.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Start your project
              </Link>
              <Link href="/free-website-audit" className="ds-btn">
                Free website audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scoped styles ─────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes areasPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.8); opacity: 0; }
        }

        /* Running illumination — horizontal */
        @keyframes areasRunH {
          0%   { transform: translateX(-40%); }
          100% { transform: translateX(100%); }
        }

        /* Running illumination — vertical */
        @keyframes areasRunV {
          0%   { transform: translateY(-45%); }
          100% { transform: translateY(100%); }
        }

        /* Intersection glow pulse */
        @keyframes areasGlowDot {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
          50%      { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); }
        }

        @media (max-width: 900px) {
          .map-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .city-grid {
            grid-template-columns: 1fr !important;
          }
          .industry-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .areas-running-h-1 div,
          .areas-running-h-2 div,
          .areas-running-h-3 div {
            animation: none !important;
            opacity: 0.15 !important;
          }
        }
      `}</style>
    </>
  );
}
