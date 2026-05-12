'use client';

import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const HEADLINE_STATS = [
  { value: '312%', label: 'Average lead lift across all projects' },
  { value: '98/100', label: 'Average PageSpeed score' },
  { value: '21 days', label: 'Average project delivery time' },
  { value: '20+', label: 'Websites launched for service businesses' },
];

const CASE_STUDIES = [
  {
    client: 'Flowga Yoga Studio',
    category: 'Yoga & Wellness',
    href: '/case-studies/flowga-yoga-studio',
    duration: '4 weeks',
    metrics: [
      { value: '+300%', label: 'Online bookings' },
      { value: '#1', label: 'Google ranking for "yoga studio London ON"' },
      { value: '1.6s', label: 'Page load time (down from 5.2s)' },
      { value: '+220%', label: 'Organic traffic increase' },
    ],
  },
  {
    client: 'Amigo Contracting Services',
    category: 'Construction',
    href: '/case-studies/amigo-contracting-services',
    duration: '3 weeks',
    metrics: [
      { value: '+180%', label: 'Qualified leads' },
      { value: '#2', label: 'Ranking for "construction services Toronto"' },
      { value: '1.8s', label: 'Page load time (down from 6.2s)' },
      { value: '+250%', label: 'Contact form submissions' },
    ],
  },
  {
    client: 'Aeries',
    category: 'Business Services',
    href: '/case-studies/aeries',
    duration: '2 weeks',
    metrics: [
      { value: '+150%', label: 'User engagement' },
      { value: '-40%', label: 'Bounce rate reduction' },
      { value: '2.3s', label: 'Page load time (down from 5.1s)' },
      { value: '70%', label: 'Mobile traffic share' },
    ],
  },
  {
    client: 'Sportlink Events',
    category: 'Events & Management',
    href: '/case-studies/sportlink-events',
    duration: '6 weeks',
    metrics: [
      { value: '500+', label: 'Participants managed' },
      { value: '+400%', label: 'Registration efficiency' },
      { value: '100%', label: 'Payment processing success' },
      { value: '95%', label: 'User satisfaction' },
    ],
  },
  {
    client: 'Lila Hart Creative',
    category: 'Portfolio & Creative',
    href: '/case-studies/lila-hart',
    duration: '3 weeks',
    metrics: [
      { value: '+150%', label: 'Client inquiries' },
      { value: '+200%', label: 'User engagement' },
      { value: '1.9s', label: 'Page load time (down from 4.8s)' },
      { value: '+180%', label: 'Portfolio views' },
    ],
  },
];

const TESTIMONIALS = [
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

export default function ResultsPage() {
  return (
    <main className="wl-results">
      {/* Hero */}
      <section className="wl-results-hero">
        <div className="ds-container">
          <div className="wl-results-meta reveal">
            <div className="eyebrow">
              <span className="dot" />
              Client results
            </div>
            <div className="wl-results-kicker">(05) — Case studies</div>
          </div>
          <h1 className="h-display wl-results-title reveal">
            Real numbers from{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              real projects.
            </span>
          </h1>
          <p className="body-lg wl-results-subtitle reveal">
            Every metric below comes from a live project for a real service business. No mock-ups, no hypotheticals — just measurable outcomes.
          </p>
        </div>
      </section>

      {/* Headline stats */}
      <section className="wl-results-section">
        <div className="ds-container">
          <div className="wl-results-stats-grid">
            {HEADLINE_STATS.map((stat) => (
              <div className="wl-results-stat reveal" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study breakdowns */}
      <section className="wl-results-section wl-results-cases-section">
        <div className="ds-container">
          <div className="wl-results-section-head reveal">
            <div className="eyebrow">
              <span className="dot" />
              Project breakdowns
            </div>
            <h2 className="h-2">
              The metrics behind every{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                build.
              </span>
            </h2>
          </div>

          <div className="wl-results-cases">
            {CASE_STUDIES.map((cs, index) => (
              <div className="wl-results-case reveal" key={cs.client}>
                <div className="wl-results-case-header">
                  <div>
                    <span className="wl-results-case-number">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="wl-results-case-name">{cs.client}</h3>
                    <div className="wl-results-case-meta">
                      <span>{cs.category}</span>
                      <span>{cs.duration}</span>
                    </div>
                  </div>
                  <Link href={cs.href} className="ds-btn ds-btn-ghost wl-results-case-link">
                    Full case study <ArrowIcon />
                  </Link>
                </div>
                <div className="wl-results-metrics-grid">
                  {cs.metrics.map((m) => (
                    <div className="wl-results-metric" key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="wl-results-section wl-results-quotes-section">
        <div className="ds-container">
          <div className="wl-results-section-head reveal">
            <div className="eyebrow">
              <span className="dot" />
              In their words
            </div>
            <h2 className="h-2">
              What clients say after{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                launch.
              </span>
            </h2>
          </div>

          <div className="wl-results-quotes-grid">
            {TESTIMONIALS.map((t) => (
              <blockquote className="wl-results-quote ds-card reveal" key={t.name}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}, {t.company}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wl-results-cta-section">
        <div className="ds-container">
          <div className="wl-results-cta reveal">
            <p className="eyebrow">Your turn</p>
            <h2 className="h-2">Ready to see what your website could do?</h2>
            <div className="wl-results-cta-actions">
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Start a project <ArrowIcon />
              </Link>
              <Link href="/free-website-audit" className="ds-btn ds-btn-ghost">
                Get a free audit <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .wl-results {
          background: var(--bg);
          color: var(--ink);
        }

        .wl-results-hero {
          padding: clamp(112px, 12vw, 180px) 0 clamp(72px, 9vw, 128px);
          border-bottom: 1px solid var(--line);
          background:
            linear-gradient(180deg, color-mix(in oklch, var(--accent), transparent 96%), transparent 48%),
            var(--bg);
        }

        .wl-results-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: clamp(56px, 7vw, 96px);
        }

        .wl-results-kicker {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .wl-results-title {
          max-width: 900px;
          font-size: clamp(48px, 8vw, 120px);
        }

        .wl-results-subtitle {
          max-width: 620px;
          margin: clamp(24px, 3vw, 40px) 0 0;
        }

        .wl-results-section {
          padding: clamp(76px, 9vw, 132px) 0;
          border-bottom: 1px solid var(--line);
        }

        .wl-results-cases-section {
          background: var(--bg-elev);
        }

        .wl-results-quotes-section {
          background: var(--bg);
        }

        .wl-results-section-head {
          margin-bottom: clamp(40px, 5vw, 72px);
        }

        .wl-results-section-head .h-2 {
          margin-top: 22px;
          max-width: 780px;
        }

        /* Headline stats */
        .wl-results-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .wl-results-stat {
          text-align: center;
          padding: clamp(28px, 4vw, 48px) 20px;
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          background: var(--bg-elev);
        }

        .wl-results-stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--accent);
        }

        .wl-results-stat span {
          display: block;
          margin-top: 12px;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-mute);
          line-height: 1.4;
        }

        /* Case study breakdowns */
        .wl-results-cases {
          display: grid;
          gap: 24px;
        }

        .wl-results-case {
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          background: var(--bg);
          padding: clamp(24px, 4vw, 40px);
        }

        .wl-results-case-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
          margin-bottom: clamp(24px, 3vw, 36px);
        }

        .wl-results-case-number {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--ink-mute);
        }

        .wl-results-case-name {
          font-family: var(--font-display);
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: var(--ink);
          margin: 8px 0 0;
        }

        .wl-results-case-meta {
          display: flex;
          gap: 16px;
          margin-top: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .wl-results-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          border-top: 1px solid var(--line);
          padding-top: clamp(24px, 3vw, 36px);
        }

        .wl-results-metric {
          padding: 16px;
          border: 1px solid var(--line);
          border-radius: var(--r-md, 12px);
        }

        .wl-results-metric strong {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1;
          color: var(--accent);
        }

        .wl-results-metric span {
          display: block;
          margin-top: 8px;
          font-size: 14px;
          color: var(--ink-dim);
          line-height: 1.4;
        }

        /* Testimonials */
        .wl-results-quotes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .wl-results-quote {
          padding: clamp(24px, 3vw, 36px);
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .wl-results-quote p {
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.6;
          color: var(--ink-dim);
          margin: 0;
          flex: 1;
        }

        .wl-results-quote footer {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .wl-results-quote footer strong {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 500;
          color: var(--ink);
        }

        .wl-results-quote footer span {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        /* CTA */
        .wl-results-cta-section {
          padding: clamp(76px, 9vw, 132px) 0;
          background: var(--bg);
        }

        .wl-results-cta {
          background: var(--accent);
          border-radius: var(--r-lg);
          color: var(--accent-ink);
          padding: clamp(32px, 5vw, 64px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .wl-results-cta .eyebrow,
        .wl-results-cta .h-2 {
          color: var(--accent-ink);
        }

        .wl-results-cta .eyebrow {
          opacity: 0.76;
        }

        .wl-results-cta .h-2 {
          max-width: 680px;
        }

        .wl-results-cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .wl-results-cta .ds-btn-primary {
          background: var(--accent-ink);
          border-color: var(--accent-ink);
          color: var(--accent);
        }

        .wl-results-cta .ds-btn-primary:hover {
          background: transparent;
          color: var(--accent-ink);
        }

        .wl-results-cta .ds-btn-ghost {
          border-color: var(--accent-ink);
          color: var(--accent-ink);
        }

        .wl-results-cta .ds-btn-ghost:hover {
          background: var(--accent-ink);
          color: var(--accent);
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .wl-results-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .wl-results-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 820px) {
          .wl-results-case-header {
            flex-direction: column;
          }

          .wl-results-quotes-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .wl-results-hero {
            padding-top: 96px;
          }

          .wl-results-title {
            font-size: clamp(44px, 14vw, 68px);
            line-height: 0.95;
          }

          .wl-results-stats-grid,
          .wl-results-metrics-grid {
            grid-template-columns: 1fr;
          }

          .wl-results-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .wl-results-cta-actions {
            flex-direction: column;
            width: 100%;
          }

          .wl-results-cta-actions .ds-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
