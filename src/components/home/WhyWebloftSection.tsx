'use client';

import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const COLUMNS = [
  { label: 'Webloft Studio', sub: 'Focused studio', highlight: true },
  { label: 'Templates', sub: 'Wix, Squarespace', highlight: false },
  { label: 'Freelancers', sub: 'Fiverr, Upwork', highlight: false },
  { label: 'Big Agencies', sub: '$10K–$50K+ budgets', highlight: false },
] as const;

const ROWS = [
  {
    label: 'Design',
    values: [
      'Custom, brand-led',
      'Cookie-cutter',
      'Hit or miss',
      'Premium but overpriced',
    ],
  },
  {
    label: 'Strategy',
    values: [
      'Conversion-first',
      'None',
      'Rare',
      'Buried in meetings',
    ],
  },
  {
    label: 'Pricing',
    values: [
      'Fixed-fee, transparent',
      '$15–30/mo + your time',
      'Hourly, scope creep',
      '$10K–50K+, hourly add-ons',
    ],
  },
  {
    label: 'Timeline',
    values: [
      '21 days avg',
      'DIY, weeks',
      'Unpredictable',
      '2–6 months',
    ],
  },
  {
    label: 'After launch',
    values: [
      'You own it all',
      'Platform lock-in',
      'They disappear',
      'Retainer fees',
    ],
  },
  {
    label: 'SEO & leads',
    values: [
      'Built in from day one',
      'Basic at best',
      'Usually extra',
      'Separate team, separate bill',
    ],
  },
] as const;

export default function WhyWebloftSection() {
  return (
    <section className="wl-compare">
      <div className="ds-container">
        <div className="wl-compare-head reveal">
          <div className="eyebrow">
            <span className="dot" />
            Choose your path
          </div>
          <h2 className="h-2">
            Not another template shop, freelancer, or bloated{' '}
            <span className="italic-serif" style={{ color: 'var(--accent)' }}>
              agency.
            </span>
          </h2>
        </div>

        {/* Desktop table */}
        <div className="wl-compare-table reveal" role="table" aria-label="Comparison of web design options">
          {/* Header row */}
          <div className="wl-compare-row wl-compare-header" role="row">
            <div className="wl-compare-label" role="columnheader" />
            {COLUMNS.map((col) => (
              <div
                className={`wl-compare-cell wl-compare-col-head${col.highlight ? ' wl-compare-hl' : ''}`}
                role="columnheader"
                key={col.label}
              >
                <strong>{col.label}</strong>
                <span>{col.sub}</span>
              </div>
            ))}
          </div>

          {/* Data rows */}
          {ROWS.map((row) => (
            <div className="wl-compare-row" role="row" key={row.label}>
              <div className="wl-compare-label" role="rowheader">{row.label}</div>
              {row.values.map((val, i) => (
                <div
                  className={`wl-compare-cell${COLUMNS[i].highlight ? ' wl-compare-hl' : ''}`}
                  role="cell"
                  key={`${row.label}-${i}`}
                >
                  {/* Mobile-only column label */}
                  <span className="wl-compare-cell-label">{COLUMNS[i].label}</span>
                  <span className="wl-compare-cell-value">{val}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="wl-compare-cta reveal">
          <Link href="/contact" className="ds-btn ds-btn-primary">
            Start a project <ArrowIcon />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .wl-compare {
          background: var(--bg-elev);
          padding: clamp(76px, 9vw, 132px) 0;
          border-bottom: 1px solid var(--line);
        }

        .wl-compare-head {
          margin-bottom: clamp(48px, 6vw, 72px);
        }

        .wl-compare-head .h-2 {
          margin-top: 22px;
          max-width: 820px;
        }

        /* ── Table ───────────────────────────── */
        .wl-compare-table {
          width: 100%;
        }

        .wl-compare-row {
          display: grid;
          grid-template-columns: 140px repeat(4, 1fr);
          border-bottom: 1px solid var(--line);
        }

        .wl-compare-header {
          border-bottom: 1px solid var(--line-strong);
        }

        /* Row label (left column) */
        .wl-compare-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-mute);
          padding: 20px 16px 20px 0;
          display: flex;
          align-items: flex-start;
        }

        /* Column header cells */
        .wl-compare-col-head {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 20px 16px 16px;
        }

        .wl-compare-col-head strong {
          font-family: var(--font-display);
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink);
        }

        .wl-compare-col-head span {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        /* Data cells */
        .wl-compare-cell {
          padding: 18px 16px;
          font-size: 14px;
          line-height: 1.5;
          color: var(--ink-dim);
        }

        .wl-compare-cell-label {
          display: none;
        }

        /* ── Highlighted Webloft column ──────── */
        .wl-compare-hl {
          background: color-mix(in oklch, var(--accent), transparent 94%);
          color: var(--ink);
        }

        .wl-compare-header .wl-compare-hl {
          border-top: 2px solid var(--accent);
        }

        .wl-compare-hl.wl-compare-col-head strong {
          color: var(--accent);
        }

        .wl-compare-hl.wl-compare-col-head span {
          color: var(--accent-deep);
        }

        /* ── CTA ─────────────────────────────── */
        .wl-compare-cta {
          margin-top: clamp(40px, 5vw, 64px);
          text-align: center;
        }

        /* ── Mobile < 820px ──────────────────── */
        @media (max-width: 820px) {
          .wl-compare-header {
            display: none;
          }

          .wl-compare-row {
            display: flex;
            flex-direction: column;
            padding: 24px 0;
            gap: 0;
          }

          .wl-compare-label {
            padding: 0 0 16px;
            font-size: 12px;
            letter-spacing: 0.12em;
          }

          .wl-compare-cell {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 12px;
            padding: 10px 0;
            border-bottom: none;
          }

          .wl-compare-cell-label {
            display: block;
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--ink-mute);
            flex-shrink: 0;
            min-width: 100px;
          }

          .wl-compare-cell-value {
            text-align: right;
          }

          .wl-compare-hl {
            background: color-mix(in oklch, var(--accent), transparent 94%);
            border-radius: var(--r-sm);
            padding: 10px 12px;
          }
        }
      `}</style>
    </section>
  );
}
