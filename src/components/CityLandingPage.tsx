'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import TestimonialStructuredData from '@/components/TestimonialStructuredData';
import type { CityPageData } from '@/lib/city-pages';

/* ── Helpers ────────────────────────────────────────────────────── */

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function useCounter(target: number, { duration = 1600, when = true } = {}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!when) return;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, when]);
  return val;
}

function StatCell({ val, suffix, label, note, seen, index, last }: {
  val: number; suffix: string; label: string; note: string;
  seen: boolean; index: number; last: boolean;
}) {
  const n = useCounter(val, { when: seen, duration: 1800 + index * 150 });
  const pretty = val < 10 ? n.toFixed(1) : Math.round(n);
  return (
    <div className="city-stat-cell" style={{
      padding: '48px 28px',
      borderRight: last ? 'none' : '1px solid var(--line)',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 16,
      }}>
        0{index + 1} / 0{4}
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 500,
        fontSize: 'clamp(48px, 5vw, 88px)', letterSpacing: '-0.03em',
        lineHeight: 1, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums',
      }}>
        {pretty}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </div>
      <div style={{
        marginTop: 18, fontFamily: 'var(--font-display)',
        fontSize: 18, letterSpacing: '-0.01em', color: 'var(--ink)',
      }}>
        {label}
      </div>
      <div className="body-sm" style={{ marginTop: 6 }}>{note}</div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────── */

export default function CityLandingPage({ data }: { data: CityPageData }) {
  const [ready, setReady] = useState(false);
  const [statRef, statSeen] = useInView(0.3);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <>
      <TestimonialStructuredData testimonials={data.testimonials} />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Webloft Studio',
            description: `Professional web design services in ${data.displayName}. Custom websites, responsive design, SEO optimization.`,
            url: `https://webloftstudio.com/${data.slug}`,
            telephone: '+1-226-376-6326',
            address: {
              '@type': 'PostalAddress',
              streetAddress: data.schema.streetAddress,
              addressLocality: data.schema.addressLocality,
              addressRegion: 'Ontario',
              postalCode: data.schema.postalCode,
              addressCountry: 'CA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: data.schema.latitude,
              longitude: data.schema.longitude,
            },
            areaServed: data.schema.areaServed,
            serviceType: 'Web Design Services',
            priceRange: '$$',
            openingHours: ['Mo-Fr 09:00-17:00', 'Sa 10:00-15:00'],
            paymentAccepted: ['Cash', 'Credit Card', 'Debit Card', 'Bank Transfer', 'PayPal'],
            currenciesAccepted: 'CAD',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Web Design Services',
              itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Website Design', description: `Professional custom website design for ${data.city} businesses` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Webflow Development', description: 'Professional Webflow website development and customization' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization', description: 'Search engine optimization services for better Google rankings' } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Maintenance', description: 'Ongoing website maintenance and support services' } },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: data.schema.ratingValue,
              reviewCount: data.schema.reviewCount,
              bestRating: '5',
              worstRating: '1',
            },
            sameAs: ['https://linkedin.com/company/webloftstudio', 'https://instagram.com/webloftstudio'],
          }),
        }}
      />

      {/* ════════════════════════════════════════════════════════════════
          HERO — 2-column: text left, browser mockup right
          ════════════════════════════════════════════════════════════════ */}
      <section
        className="city-hero-section"
        style={{
          paddingTop: 'clamp(72px, 10vh, 120px)',
          paddingBottom: 'calc(var(--section-y, 100px) * 0.7)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="ds-container">
          {/* Meta row */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 56, flexWrap: 'wrap', gap: 24,
            opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(8px)',
            transition: `opacity 0.8s ${ease}, transform 0.8s ${ease}`,
          }}>
            <div className="eyebrow">
              <span className="dot" />
              {data.eyebrow}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--ink-mute)', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              {data.servingLabel}
            </div>
          </div>

          {/* 2-col grid */}
          <div className="city-hero-grid" style={{
            display: 'grid', gridTemplateColumns: '1.1fr 1fr',
            gap: 64, alignItems: 'center',
          }}>
            {/* Left: headline + sub */}
            <div>
              <h1 className="h-display" style={{
                position: 'relative', margin: 0, fontSize: 'clamp(44px, 5.2vw, 84px)',
              }}>
                <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em', marginBottom: '-0.06em' }}>
                  <span style={{
                    display: 'block',
                    transform: ready ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 1s ${ease}`, transitionDelay: '0.05s',
                  }}>
                    {data.heroHeadline1}
                  </span>
                </span>
                <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em', marginBottom: '-0.06em' }}>
                  <span style={{
                    display: 'block',
                    transform: ready ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 1s ${ease}`, transitionDelay: '0.17s',
                  }}>
                    <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                      {data.heroAccent}
                    </span>
                  </span>
                </span>
                <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em', marginBottom: '-0.06em' }}>
                  <span style={{
                    display: 'block',
                    transform: ready ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 1s ${ease}`, transitionDelay: '0.29s',
                  }}>
                    {data.heroHeadline3}
                  </span>
                </span>
              </h1>

              {/* Sub row */}
              <div className="city-hero-sub" style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1fr',
                gap: 40, marginTop: 56, alignItems: 'end',
                opacity: ready ? 1 : 0, transform: ready ? 'none' : 'translateY(12px)',
                transition: `opacity 0.8s ${ease} 0.42s, transform 0.8s ${ease} 0.42s`,
              }}>
                <p className="body-lg" style={{ maxWidth: 560, margin: 0, color: 'var(--ink-dim)' }}>
                  {data.heroSubtext}
                </p>
                <div className="city-hero-ctas" style={{ display: 'flex', gap: 12, justifySelf: 'end', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="ds-btn ds-btn-primary">
                    {data.ctaButtonText} <ArrowIcon />
                  </Link>
                  <Link href="/projects" className="ds-btn ds-btn-ghost">
                    See our work <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: browser mockup */}
            <div className="city-hero-mockup" style={{
              position: 'relative', perspective: '1000px',
            }}>
              <div style={{
                position: 'relative', transformStyle: 'preserve-3d',
                transform: 'rotateX(0deg) rotateY(-4deg)',
              }}>
                {/* Glow */}
                <div aria-hidden="true" style={{
                  position: 'absolute', top: '10%', left: '-5%', width: '110%', height: '80%',
                  background: 'radial-gradient(ellipse at 50% 50%, color-mix(in oklch, var(--accent), transparent 80%) 0%, transparent 68%)',
                  filter: 'blur(48px)', pointerEvents: 'none',
                  opacity: ready ? 0.7 : 0, transition: `opacity 2s ${ease} 0.9s`,
                }} />

                {/* Back card */}
                <div style={{
                  position: 'absolute', bottom: -24, right: -24, width: '85%',
                  borderRadius: 10, overflow: 'hidden',
                  border: '1px solid var(--line)',
                  boxShadow: '0 12px 48px color-mix(in oklch, var(--bg), transparent 50%)',
                  transform: ready ? 'rotate(4deg)' : 'rotate(4deg) translateY(32px)',
                  opacity: ready ? 0.5 : 0,
                  transition: `transform 1.2s ${ease} 0.5s, opacity 0.9s ${ease} 0.5s`,
                }}>
                  <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                    <Image src={data.heroImages[1]} alt={`${data.city} web design project`}
                      fill style={{ objectFit: 'cover', objectPosition: 'top center' }} />
                  </div>
                </div>

                {/* Front card */}
                <div style={{
                  position: 'relative', zIndex: 1, borderRadius: 12, overflow: 'hidden',
                  border: '1px solid var(--line-strong)',
                  boxShadow: '0 32px 80px color-mix(in oklch, var(--bg), transparent 35%), 0 0 0 1px var(--glass-border)',
                  transform: ready ? 'rotate(-2deg)' : 'rotate(-2deg) translateY(40px)',
                  opacity: ready ? 1 : 0,
                  transition: `transform 1.2s ${ease} 0.3s, opacity 0.9s ${ease} 0.3s`,
                }}>
                  {/* Browser chrome */}
                  <div style={{
                    background: 'var(--bg-elev-2)',
                    borderBottom: '1px solid var(--line)',
                    padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 7,
                  }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28ca41', flexShrink: 0 }} />
                    <div style={{
                      flex: 1, margin: '0 8px', background: 'var(--bg)', borderRadius: 5,
                      padding: '3px 10px', fontFamily: 'var(--font-mono)', fontSize: 10,
                      color: 'var(--ink-mute)', letterSpacing: '0.04em',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                      webloftstudio.com
                    </div>
                  </div>
                  <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                    <Image src={data.heroImages[0]} alt={`Web design for ${data.city} business`}
                      fill style={{ objectFit: 'cover', objectPosition: 'top center' }}
                      sizes="(max-width: 960px) 100vw, 45vw" priority />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: 'absolute', left: 'var(--gutter, 20px)', bottom: 24,
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-mute)',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 10,
          opacity: ready ? 1 : 0, transition: `opacity 0.8s ${ease} 0.9s`,
        }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--ink-mute)' }} />
          Scroll
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          STATS — bordered 4-column grid with counter animations
          ════════════════════════════════════════════════════════════════ */}
      <section ref={statRef} style={{
        paddingTop: 'calc(var(--section-y, 100px) * 0.72)',
        paddingBottom: 'clamp(16px, 2vw, 28px)',
      }}>
        <div className="ds-container">
          <div className="reveal" style={{
            display: 'flex', justifyContent: 'space-between', marginBottom: 48,
          }}>
            <div className="eyebrow">
              <span className="dot" />
              The numbers
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--ink-mute)', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              (02) — Results
            </div>
          </div>

          <div className="city-stats-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
          }}>
            {data.stats.map((s, i) => (
              <StatCell key={s.label} val={s.value} suffix={s.suffix}
                label={s.label} note={s.note} seen={statSeen}
                index={i} last={i === data.stats.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WHY LOCAL — manifesto-style: headline + 3-column pillars
          ════════════════════════════════════════════════════════════════ */}
      <section style={{
        paddingTop: 'clamp(16px, 2vw, 28px)',
        paddingBottom: 'calc(var(--section-y, 100px) * 0.72)',
      }}>
        <div className="ds-container">
          <div className="reveal" style={{
            display: 'flex', justifyContent: 'space-between', marginBottom: 56,
          }}>
            <div className="eyebrow">
              <span className="dot" />
              Why local matters
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--ink-mute)', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              (03) — {data.city}
            </div>
          </div>

          <div className="city-manifesto-row" style={{
            display: 'grid', gridTemplateColumns: '1fr 2fr',
            gap: '64px', alignItems: 'start',
          }}>
            <div className="reveal">
              <div className="h-3" style={{ marginBottom: 12 }}>
                {data.localKnowledge.title}
              </div>
              <p className="body" style={{ maxWidth: 320 }}>
                {data.localKnowledge.description}
              </p>
            </div>

            <h2 className="h-1 reveal" style={{ fontWeight: 400, margin: 0 }}>
              {data.whyLocalLines.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>
                  {line.before}
                  {line.accent && (
                    <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                      {line.accent}
                    </span>
                  )}
                  {line.after}
                </span>
              ))}
            </h2>
          </div>

          {/* Pillars */}
          <div style={{ marginTop: 96 }}>
            <div className="hairline" style={{ marginBottom: 40 }} />
            <div className="city-pillars-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
            }}>
              {data.pillars.map((p, i) => (
                <div key={p.title} className="reveal" style={{
                  padding: '0 24px',
                  borderRight: i === data.pillars.length - 1 ? 'none' : '1px solid var(--line)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    color: 'var(--ink-mute)', letterSpacing: '0.16em', marginBottom: 18,
                  }}>
                    0{i + 1}
                  </div>
                  <div className="h-3" style={{ marginBottom: 12 }}>{p.title}</div>
                  <p className="body-sm">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SERVICES — bordered rows
          ════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--bg-elev)',
        paddingTop: 'var(--section-y, 100px)',
        paddingBottom: 'var(--section-y, 100px)',
      }}>
        <div className="ds-container">
          <div className="reveal" style={{
            display: 'flex', justifyContent: 'space-between', marginBottom: 56,
          }}>
            <div className="eyebrow">
              <span className="dot" />
              What we do
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--ink-mute)', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              (04) — Services
            </div>
          </div>

          <div className="city-services-head" style={{
            marginBottom: 64, display: 'grid',
            gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end',
          }}>
            <h2 className="h-1 reveal">
              Web design for<br />
              {data.city}{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                businesses
              </span>.
            </h2>
            <p className="body-lg reveal" style={{ maxWidth: 480 }}>
              Every site we build is conversion-engineered — designed to turn your {data.city} visitors into paying customers.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--line)' }}>
            {data.services.map((service, i) => (
              <div key={service.title} className="reveal" style={{
                display: 'grid', gridTemplateColumns: '60px 1fr 2fr',
                gap: 32, padding: '28px 0',
                borderBottom: '1px solid var(--line)',
                alignItems: 'start',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--accent)', letterSpacing: '0.16em',
                }}>
                  0{i + 1}
                </div>
                <div className="h-3" style={{
                  fontSize: 'clamp(22px, 2.2vw, 32px)', letterSpacing: '-0.02em',
                }}>
                  {service.title}
                </div>
                <div>
                  <p className="body" style={{ color: 'var(--ink-dim)', marginBottom: 12 }}>
                    {service.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {service.features.map((f) => (
                      <span key={f} style={{
                        fontFamily: 'var(--font-mono)', fontSize: 11,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '6px 12px', borderRadius: 99,
                        border: '1px solid var(--line)', color: 'var(--ink-mute)',
                      }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CASE STUDY — featured project card with image
          ════════════════════════════════════════════════════════════════ */}
      <section style={{
        paddingTop: 'var(--section-y, 100px)',
        paddingBottom: 'var(--section-y, 100px)',
      }}>
        <div className="ds-container">
          <div className="reveal" style={{
            display: 'flex', justifyContent: 'space-between', marginBottom: 56,
          }}>
            <div className="eyebrow">
              <span className="dot" />
              Recent work
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--ink-mute)', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              (05) — Proof
            </div>
          </div>

          <Link
            href={data.caseStudy.href}
            className="ds-card reveal city-case-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1.2fr',
              overflow: 'hidden', borderRadius: 'var(--r-lg)',
              background: 'var(--bg-elev-2)', textDecoration: 'none',
            }}
          >
            {/* Image */}
            <div className="city-case-visual" style={{
              minHeight: 360, position: 'relative', overflow: 'hidden',
            }}>
              <Image
                src={data.caseStudy.image}
                alt={`${data.caseStudy.title} website screenshot`}
                fill
                style={{
                  objectFit: 'cover', objectPosition: 'top center',
                  transform: hover ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.7s var(--ease)',
                }}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <div aria-hidden="true" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, color-mix(in oklch, var(--bg), transparent 50%) 100%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', top: 16, left: 16,
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'color-mix(in oklch, var(--ink), transparent 30%)',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                background: 'var(--glass-bg)', padding: '4px 10px',
                borderRadius: 99, backdropFilter: 'blur(6px)',
              }}>
                01 / Case
              </div>
            </div>

            {/* Details */}
            <div style={{
              padding: '40px 40px', display: 'flex',
              flexDirection: 'column', justifyContent: 'space-between', gap: 32,
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--ink-mute)', letterSpacing: '0.14em',
                  textTransform: 'uppercase', marginBottom: 18,
                }}>
                  {data.caseStudy.tag}
                </div>
                <div className="h-2" style={{ fontSize: 'clamp(28px, 3.6vw, 52px)' }}>
                  {data.caseStudy.title}
                </div>
                <p className="body" style={{ marginTop: 18, maxWidth: 520 }}>
                  {data.caseStudy.blurb}
                </p>
              </div>

              <div>
                <div className="hairline" style={{ marginBottom: 20 }} />
                <div style={{
                  display: 'flex', flexWrap: 'wrap', gap: '20px 36px',
                  alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
                    {data.caseStudy.kpis.map((k) => (
                      <div key={k.label}>
                        <div style={{
                          fontFamily: 'var(--font-display)', fontSize: 22,
                          letterSpacing: '-0.02em', color: 'var(--accent)',
                        }}>
                          {k.value}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-mono)', fontSize: 11,
                          color: 'var(--ink-mute)', letterSpacing: '0.1em',
                          textTransform: 'uppercase', marginTop: 4,
                        }}>
                          {k.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '12px 20px', borderRadius: 99,
                    border: '1px solid var(--line-strong)',
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    background: hover ? 'var(--accent)' : 'transparent',
                    color: hover ? 'var(--accent-ink)' : 'var(--ink)',
                    borderColor: hover ? 'var(--accent)' : 'var(--line-strong)',
                    transition: 'all 0.4s var(--ease)',
                  }}>
                    Read case <ArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA — full-width accent background
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 0, paddingBottom: 'var(--section-y, 100px)' }}>
        <div className="ds-container">
          <div className="reveal" style={{
            background: 'var(--accent)', color: 'var(--accent-ink)',
            borderRadius: 'var(--r-lg)',
            padding: 'clamp(56px, 8vw, 120px) clamp(40px, 6vw, 96px)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              marginBottom: 32, opacity: 0.7,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{
                display: 'inline-block', width: 6, height: 6,
                borderRadius: 99, background: 'currentColor',
              }} />
              Booking now — limited slots
            </div>

            <h2 className="h-display" style={{
              color: 'var(--accent-ink)',
              fontSize: 'clamp(40px, 7vw, 120px)',
            }}>
              Ready to build<br />
              something{' '}
              <span style={{
                fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontWeight: 400,
              }}>
                real
              </span>
              {' '}in<br />
              {data.city}?
            </h2>

            <div style={{ display: 'flex', gap: 16, marginTop: 56, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '20px 28px', borderRadius: 99,
                background: 'var(--accent-ink)', color: 'var(--accent)',
                fontFamily: 'var(--font-mono)', fontSize: 13,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'opacity 0.3s var(--ease)',
              }}>
                {data.ctaConsultationText} <ArrowIcon />
              </Link>
              <a href="https://calendly.com/webloftstudio-info/30min"
                target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '20px 28px', borderRadius: 99,
                background: 'transparent', color: 'var(--accent-ink)',
                border: '1px solid color-mix(in oklch, var(--accent-ink), transparent 70%)',
                fontFamily: 'var(--font-mono)', fontSize: 13,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                textDecoration: 'none', transition: 'border-color 0.3s var(--ease)',
              }}>
                Book a free call <ArrowIcon />
              </a>
            </div>

            {/* Decorative asterisk */}
            <div aria-hidden="true" style={{
              position: 'absolute', right: -40, bottom: -40,
              fontSize: 320, opacity: 0.08, lineHeight: 1,
              fontFamily: 'var(--font-serif)', fontStyle: 'italic',
              pointerEvents: 'none', userSelect: 'none',
            }}>
              ✳
            </div>
          </div>
        </div>
      </section>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 960px) {
          .city-hero-grid { grid-template-columns: 1fr !important; }
          .city-hero-mockup { display: none !important; }
          .city-services-head { grid-template-columns: 1fr !important; }
          .city-case-card { grid-template-columns: 1fr !important; }
          .city-manifesto-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1100px) {
          .city-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .city-stat-cell:nth-child(2) { border-right: none !important; }
          .city-pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .city-hero-section {
            min-height: calc(100svh - 72px) !important;
            padding-top: 24px !important;
            padding-bottom: 32px !important;
          }
          .city-hero-sub { grid-template-columns: 1fr !important; margin-top: 32px !important; }
          .city-hero-ctas { flex-direction: column !important; width: 100% !important; }
          .city-hero-ctas > * { width: 100% !important; justify-content: center !important; }
          .city-stats-grid { grid-template-columns: 1fr !important; }
          .city-stat-cell { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
          .city-stat-cell:last-child { border-bottom: none !important; }
          .city-pillars-grid { grid-template-columns: 1fr !important; }
          .city-case-visual { min-height: 240px !important; }
        }
        @media (max-width: 900px) {
          .city-case-card > div:last-child { padding: 24px !important; }
          .reveal[style*="grid-template-columns: 60px"] {
            grid-template-columns: 40px 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
