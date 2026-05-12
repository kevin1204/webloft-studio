'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const ITEMS = [
  {
    result: '+300%',
    metric: 'online bookings',
    client: 'Flowga Yoga Studio',
    category: 'Yoga & Wellness',
    href: '/case-studies/flowga-yoga-studio',
  },
  {
    result: 'Full rebrand',
    metric: 'web + brand identity',
    client: 'Amigo Contracting Services',
    category: 'Construction & Contracting',
    href: '/case-studies/amigo-contracting-services',
  },
  {
    result: '+150%',
    metric: 'user engagement',
    client: 'Aeries',
    category: 'Business Services',
    href: '/case-studies/aeries',
  },
  {
    result: '500+',
    metric: 'participants managed',
    client: 'Sportlink Events',
    category: 'Sports & Events',
    href: '/case-studies/sportlink-events',
  },
  {
    result: '+150%',
    metric: 'client inquiries',
    client: 'Lila Hart Creative',
    category: 'Creative Portfolio',
    href: '/case-studies/lila-hart',
  },
];

const QUOTES = [
  {
    quote: 'We went from maybe one or two online bookings a week to having our schedule almost full. The new site just made it so much easier for people to find us and actually book.',
    name: 'Mia Chen',
    role: 'Owner',
    company: 'Flowga Yoga Studio',
  },
  {
    quote: 'Kevin and the team completely nailed the rebrand. Our old site looked like every other contractor out there. Now clients tell us we look like the most professional option before we even show up to the job.',
    name: 'Carlos Rivera',
    role: 'Founder',
    company: 'Amigo Contracting Services',
  },
  {
    quote: 'Honestly, I was sceptical about spending money on a new website. But within the first month we could already see the difference in how long people stayed on the site and how many were reaching out.',
    name: 'Daniel Okoro',
    role: 'Co-Founder',
    company: 'Aeries',
  },
  {
    quote: 'We needed a registration system that could handle hundreds of athletes signing up at once. Webloft built something that worked smoothly from day one — no crashes, no confusion.',
    name: 'James Park',
    role: 'Director',
    company: 'Sportlink Events',
  },
  {
    quote: 'Before the redesign I was getting maybe a couple inquiries a month through my site. Now it actually works for me — people reach out saying they loved the portfolio and want to work together.',
    name: 'Lila Hart',
    role: 'Creative Director',
    company: 'Lila Hart Creative',
  },
];

function ResultCard({ item }: { item: (typeof ITEMS)[0] }) {
  return (
    <Link
      href={item.href}
      style={{ textDecoration: 'none' }}
    >
      <div
        className="ds-card"
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 380,
          minHeight: 200,
          padding: 32,
          marginRight: 24,
          whiteSpace: 'normal',
          borderRadius: 'var(--r-lg)',
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'border-color 0.2s var(--ease)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 40,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--accent)',
              marginBottom: 4,
            }}
          >
            {item.result}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            {item.metric}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>
            {item.client}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--ink-mute)',
              letterSpacing: '0.06em',
            }}
          >
            {item.category}
          </div>
        </div>
      </div>
    </Link>
  );
}

function QuoteCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const q = QUOTES[active];

  return (
    <div className="ds-container">
      <div
        className="reveal"
        style={{
          padding: 'clamp(40px, 5vw, 72px) 0',
        }}
      >
        <style>{`
          .testimonial-quote-wrap {
            display: grid;
            grid-template-columns: 1fr 280px;
            gap: 48px;
            align-items: center;
          }
          @media (max-width: 768px) {
            .testimonial-quote-wrap {
              grid-template-columns: 1fr;
              gap: 24px;
            }
          }
        `}</style>
        <div className="testimonial-quote-wrap">
          {/* Quote */}
          <div style={{ position: 'relative', minHeight: 120 }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3vw, 42px)',
                lineHeight: 1.1,
                color: 'var(--accent)',
                position: 'absolute',
                top: -8,
                left: -4,
                opacity: 0.3,
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <p
              key={active}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(17px, 1.6vw, 21px)',
                lineHeight: 1.6,
                letterSpacing: '-0.01em',
                color: 'var(--ink)',
                maxWidth: 680,
                paddingLeft: 20,
                animation: 'quoteIn 0.5s var(--ease) both',
              }}
            >
              {q.quote}
            </p>
          </div>

          {/* Attribution + dots */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              key={`attr-${active}`}
              style={{ animation: 'quoteIn 0.5s var(--ease) 0.1s both' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 15,
                  fontWeight: 600,
                  color: 'var(--ink)',
                  marginBottom: 2,
                }}
              >
                {q.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-mute)',
                  letterSpacing: '0.06em',
                }}
              >
                {q.role}, {q.company}
              </div>
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8 }}>
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    borderRadius: 99,
                    border: 'none',
                    background: i === active ? 'var(--accent)' : 'var(--line-strong)',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease)',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes quoteIn {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const doubled = [...ITEMS, ...ITEMS];
  const reversed = [...ITEMS].reverse();
  const doubledReversed = [...reversed, ...reversed];

  return (
    <section style={{ paddingTop: 'var(--section-y)', paddingBottom: 'var(--section-y)' }}>
      <div className="ds-container">
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 56,
          }}
        >
          <div className="eyebrow">
            <span className="dot" />
            Real results
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--ink-mute)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            (08) — Client Work
          </div>
        </div>

        <div className="reveal" style={{ marginBottom: 80 }}>
          <h2 className="h-1" style={{ maxWidth: 1100 }}>
            Built to{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              perform
            </span>
            .
          </h2>
        </div>
      </div>

      {/* Row 1 — forward */}
      <div className="marquee-wrap-full" style={{ paddingBottom: 24 }}>
        <div className="marquee-track marquee-track-slow">
          {doubled.map((item, i) => (
            <ResultCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Client quotes */}
      <QuoteCarousel />

      {/* Row 2 — reverse */}
      <div className="marquee-wrap-full" style={{ paddingTop: 24 }}>
        <div className="marquee-track marquee-track-slower marquee-track-reverse">
          {doubledReversed.map((item, i) => (
            <ResultCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
