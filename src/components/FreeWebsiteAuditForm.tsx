'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackLeadMagnetDownload } from '@/lib/analytics';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

const AUDIT_AREAS = [
  {
    label: 'Performance',
    desc: 'Page speed, Core Web Vitals, and mobile load times',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: 'SEO health',
    desc: 'Meta tags, heading structure, keyword gaps, and search visibility',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    label: 'UX & design',
    desc: 'Navigation flow, visual hierarchy, and content layout',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    label: 'Conversion',
    desc: 'CTAs, forms, trust signals, and lead capture opportunities',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: 'Security',
    desc: 'SSL, broken links, redirects, and technical vulnerabilities',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Action plan',
    desc: 'Prioritised recommendations with clear next steps',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Submit your site',
    desc: 'Tell us your URL and a bit about your business.',
  },
  {
    num: '02',
    title: 'We review manually',
    desc: 'Our team audits your site across 30+ criteria — not an automated tool.',
  },
  {
    num: '03',
    title: 'Get your report',
    desc: 'A prioritised action plan lands in your inbox within 24–48 hours.',
  },
];

export default function FreeWebsiteAuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    phone: '',
    _honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json().catch(() => ({ error: 'Unexpected server response' }));

      if (!res.ok) {
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
        return;
      }

      trackLeadMagnetDownload('website_audit', formData);
      setIsSubmitted(true);
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValid = formData.name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  /* ── Success screen ────────────────────────────────── */
  if (isSubmitted) {
    return (
      <>
        <section className="audit-success">
          <div className="ds-container">
            <div className="audit-success-card">
              <div className="audit-success-check">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16.5L13 23L26 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 className="h-2 audit-success-heading">
                You&apos;re all set.{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  Check your inbox.
                </span>
              </h1>
              <p className="body-lg audit-success-body">
                We&apos;ve received your audit request and will review your site manually.
                Expect your personalised report within 24–48 hours.
              </p>

              <div className="audit-success-next">
                <div className="audit-success-next-label">What happens next</div>
                <ol className="audit-success-next-list">
                  <li>
                    <span className="audit-success-next-num">1.</span>
                    <span>Our team reviews your site across 30+ criteria</span>
                  </li>
                  <li>
                    <span className="audit-success-next-num">2.</span>
                    <span>You receive a prioritised audit report via email</span>
                  </li>
                  <li>
                    <span className="audit-success-next-num">3.</span>
                    <span>Reply to discuss any findings — no obligation</span>
                  </li>
                </ol>
              </div>

              <div className="audit-success-actions">
                <Link href="/contact" className="ds-btn ds-btn-primary">
                  Start a project <ArrowIcon />
                </Link>
                <Link href="/" className="ds-btn ds-btn-ghost">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          .audit-success {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: clamp(120px, 14vw, 180px) 0 clamp(80px, 10vw, 140px);
          }

          .audit-success-card {
            max-width: 640px;
            margin: 0 auto;
            text-align: center;
          }

          .audit-success-check {
            width: 72px;
            height: 72px;
            border-radius: 999px;
            background: var(--accent);
            color: var(--accent-ink);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 32px;
          }

          .audit-success-heading {
            font-size: clamp(28px, 4vw, 44px);
            margin-bottom: 16px;
          }

          .audit-success-body {
            color: var(--ink-dim);
            max-width: 480px;
            margin: 0 auto;
          }

          .audit-success-next {
            text-align: left;
            margin: 40px auto;
            max-width: 400px;
            padding: 24px;
            border-radius: var(--r-lg);
            border: 1px solid var(--line);
            background: var(--bg-elev);
          }

          .audit-success-next-label {
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--ink-mute);
            margin-bottom: 16px;
          }

          .audit-success-next-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .audit-success-next-list li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            font-size: 14px;
            color: var(--ink-dim);
          }

          .audit-success-next-num {
            font-family: var(--font-mono);
            font-size: 11px;
            color: var(--accent);
            letter-spacing: 0.06em;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .audit-success-actions {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
          }
        `}</style>
      </>
    );
  }

  /* ── Main page ─────────────────────────────────────── */
  return (
    <>
      {/* ── Hero ───────────────────────────────── */}
      <section className="audit-hero">
        <div className="ds-container">
          <div className="audit-hero-eyebrow-row reveal">
            <div className="eyebrow">
              <span className="dot" />
              Free professional analysis
            </div>
            <div className="audit-hero-counter">
              (05) — Lead magnet
            </div>
          </div>

          <h1 className="h-display audit-hero-heading reveal">
            <span style={{ display: 'block' }}>Find what&apos;s holding</span>
            <span className="italic-serif" style={{ display: 'block', color: 'var(--accent)' }}>
              your website back.
            </span>
          </h1>

          <div className="audit-hero-sub reveal">
            <p className="body-lg">
              We review your site&apos;s performance, SEO, design, and conversion rate —
              then send you a clear, prioritised report within 24–48 hours.{' '}
              <strong style={{ color: 'var(--ink)' }}>No strings attached.</strong>
            </p>
          </div>

          {/* Trust badges */}
          <div className="audit-hero-badges reveal">
            {[
              { label: 'Delivered in', value: '24–48 hrs' },
              { label: 'Reviewed by', value: 'Our team' },
              { label: 'Cost', value: '$0 — free' },
            ].map((badge) => (
              <div className="audit-badge" key={badge.label}>
                <span className="audit-badge-label">{badge.label}</span>
                <span className="audit-badge-value">{badge.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-column: Sidebar + Form ──────────── */}
      <section className="audit-main">
        <div className="ds-container">
          <div className="audit-grid">

            {/* Left column — info sidebar */}
            <div className="audit-sidebar reveal">
              {/* What we review */}
              <div className="audit-sidebar-section">
                <div className="eyebrow" style={{ marginBottom: 24 }}>
                  <span className="dot" />
                  What we review
                </div>
                <div className="audit-areas">
                  {AUDIT_AREAS.map((area) => (
                    <div className="audit-area" key={area.label}>
                      <div className="audit-area-icon">{area.icon}</div>
                      <div>
                        <div className="audit-area-label">{area.label}</div>
                        <div className="audit-area-desc">{area.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How it works */}
              <div className="audit-sidebar-section">
                <div className="audit-sidebar-divider" />
                <div className="eyebrow" style={{ marginBottom: 20 }}>
                  <span className="dot" />
                  How it works
                </div>
                <div className="audit-steps">
                  {STEPS.map((step) => (
                    <div className="audit-step" key={step.num}>
                      <span className="audit-step-num">{step.num}</span>
                      <div>
                        <div className="audit-step-title">{step.title}</div>
                        <div className="audit-step-desc">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust quote */}
              <div className="audit-sidebar-section">
                <div className="audit-sidebar-divider" />
                <div className="audit-trust-card">
                  <div className="audit-trust-quote" aria-hidden="true">&ldquo;</div>
                  <p className="audit-trust-text">
                    The audit was thorough and actionable. We implemented the top 3 fixes
                    and saw a 40% jump in organic traffic within two months.
                  </p>
                  <div className="audit-trust-attr">
                    Sarah M. — Fitness studio owner
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — the form */}
            <div className="audit-form-wrapper reveal">
              <div className="audit-form-card">
                <h2 className="audit-form-heading">
                  Request your free audit
                </h2>
                <p className="audit-form-subtext">
                  Takes 30 seconds. We&apos;ll get back to you within 24–48 hours.
                </p>

                {errorMessage && (
                  <div className="audit-form-error">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="audit-form">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_honeypot"
                    value={formData._honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="audit-form-row">
                    <div className="audit-form-field">
                      <label htmlFor="audit-name" className="ds-input-label">Your name *</label>
                      <input
                        type="text"
                        id="audit-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Maria Voss"
                        className="ds-input"
                      />
                    </div>
                    <div className="audit-form-field">
                      <label htmlFor="audit-email" className="ds-input-label">Email *</label>
                      <input
                        type="email"
                        id="audit-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="maria@company.com"
                        className="ds-input"
                      />
                    </div>
                  </div>

                  <div className="audit-form-row">
                    <div className="audit-form-field">
                      <label htmlFor="audit-business" className="ds-input-label">Business name</label>
                      <input
                        type="text"
                        id="audit-business"
                        name="business"
                        value={formData.business}
                        onChange={handleInputChange}
                        placeholder="Northside Plumbing"
                        className="ds-input"
                      />
                    </div>
                    <div className="audit-form-field">
                      <label htmlFor="audit-phone" className="ds-input-label">Phone</label>
                      <input
                        type="tel"
                        id="audit-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 000-0000"
                        className="ds-input"
                      />
                    </div>
                  </div>

                  <div className="audit-form-field">
                    <label htmlFor="audit-website" className="ds-input-label">Website URL</label>
                    <input
                      type="url"
                      id="audit-website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      className="ds-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className="ds-btn ds-btn-primary audit-form-submit"
                    style={{
                      opacity: isSubmitting || !isValid ? 0.4 : 1,
                      cursor: isSubmitting || !isValid ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="audit-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                          <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get my free audit <ArrowIcon />
                      </>
                    )}
                  </button>
                </form>

                <p className="audit-form-privacy">
                  We respect your privacy. No spam, no selling your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social proof — case studies ─────────── */}
      <section className="audit-proof">
        <div className="ds-container">
          <div className="audit-proof-head reveal">
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot" />
              Proof it works
            </div>
            <h2 className="h-2">
              What a good website{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>does.</span>
            </h2>
          </div>

          <div className="audit-proof-grid">
            <div className="audit-proof-card reveal">
              <div className="audit-proof-eyebrow">Case Study</div>
              <h3 className="audit-proof-title">Flowga Yoga Studio</h3>
              <p className="audit-proof-desc">
                Replaced an outdated template site with a conversion-focused redesign.
                Clearer booking flow, faster load times, and local SEO improvements.
              </p>
              <div className="audit-proof-stat">+300%</div>
              <div className="audit-proof-stat-label">online bookings</div>
              <Link href="/case-studies/flowga-yoga-studio" className="audit-proof-link">
                Read the case study <ArrowIcon />
              </Link>
            </div>

            <div className="audit-proof-card reveal">
              <div className="audit-proof-eyebrow">Case Study</div>
              <h3 className="audit-proof-title">Amigo Contracting</h3>
              <p className="audit-proof-desc">
                Complete brand and web overhaul for a growing contracting business.
                Professional positioning, improved lead capture, and a site that matches their work.
              </p>
              <div className="audit-proof-stat">Full rebrand</div>
              <div className="audit-proof-stat-label">web + brand identity</div>
              <Link href="/case-studies/amigo-contracting-services" className="audit-proof-link">
                Read the case study <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────── */}
      <section className="audit-final-cta">
        <div className="ds-container">
          <div className="audit-final-inner reveal">
            <h2 className="h-2 audit-final-heading">
              Ready to see what&apos;s{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>possible?</span>
            </h2>
            <p className="body-lg audit-final-desc">
              Get your free audit or skip straight to a conversation about your next project.
            </p>
            <div className="audit-final-actions">
              <a href="#audit-form" className="ds-btn ds-btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('.audit-form-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}>
                Get my free audit <ArrowIcon />
              </a>
              <Link href="/contact" className="ds-btn ds-btn-ghost">
                Start a project <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* ── Hero ─────────────────────────────── */
        .audit-hero {
          padding-top: clamp(72px, 10vh, 120px);
          padding-bottom: calc(var(--section-y) * 0.5);
        }

        @media (max-width: 768px) {
          .audit-hero {
            padding-top: 28px;
            padding-bottom: calc(var(--section-y) * 0.35);
          }
        }

        .audit-hero-eyebrow-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 64px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .audit-hero-counter {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--ink-mute);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .audit-hero-heading {
          font-size: clamp(48px, 8vw, 132px);
          margin: 0;
          line-height: 1;
        }

        .audit-hero-sub {
          margin-top: 40px;
          max-width: 600px;
        }

        .audit-hero-sub .body-lg {
          color: var(--ink-dim);
        }

        /* Trust badges */
        .audit-hero-badges {
          display: flex;
          gap: 0;
          margin-top: 48px;
        }

        .audit-badge {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 32px;
          border-left: 1px solid var(--line);
        }

        .audit-badge:first-child {
          padding-left: 0;
          border-left: none;
        }

        .audit-badge-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .audit-badge-value {
          font-family: var(--font-display);
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }

        /* ── Main grid ────────────────────────── */
        .audit-main {
          padding-bottom: clamp(80px, 10vw, 140px);
        }

        .audit-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Sidebar ──────────────────────────── */
        .audit-sidebar {
          position: sticky;
          top: 120px;
        }

        .audit-sidebar-section {
          margin-bottom: 0;
        }

        .audit-sidebar-divider {
          height: 1px;
          background: var(--line);
          margin: 32px 0;
        }

        /* Audit areas */
        .audit-areas {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .audit-area {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid var(--line);
        }

        .audit-area:last-child {
          border-bottom: none;
        }

        .audit-area-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--r-md);
          background: color-mix(in oklch, var(--accent), transparent 90%);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .audit-area-label {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 3px;
        }

        .audit-area-desc {
          font-size: 13px;
          line-height: 1.5;
          color: var(--ink-dim);
        }

        /* How it works steps */
        .audit-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .audit-step {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .audit-step-num {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 0.06em;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .audit-step-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 2px;
        }

        .audit-step-desc {
          font-size: 13px;
          line-height: 1.5;
          color: var(--ink-dim);
        }

        /* Trust quote card */
        .audit-trust-card {
          padding: 24px;
          border-radius: var(--r-lg);
          border: 1px solid var(--line);
          background: var(--bg-elev);
        }

        .audit-trust-quote {
          font-family: var(--font-serif);
          font-size: 28px;
          line-height: 1;
          color: var(--accent);
          opacity: 0.4;
          margin-bottom: 8px;
        }

        .audit-trust-text {
          font-family: var(--font-display);
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink);
          margin: 0;
        }

        .audit-trust-attr {
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--ink-mute);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── Form card ────────────────────────── */
        .audit-form-wrapper {
          position: relative;
        }

        .audit-form-card {
          border: 1px solid var(--line);
          border-top: 2px solid var(--accent);
          border-radius: var(--r-lg);
          background: var(--bg-elev);
          padding: clamp(28px, 4vw, 48px);
        }

        .audit-form-heading {
          font-family: var(--font-display);
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0 0 8px;
        }

        .audit-form-subtext {
          font-size: 14px;
          color: var(--ink-dim);
          margin: 0 0 32px;
        }

        .audit-form-error {
          padding: 14px 20px;
          border-radius: var(--r-md);
          border-left: 3px solid var(--error);
          background: var(--bg-elev-2);
          color: var(--ink);
          font-size: 14px;
          margin-bottom: 24px;
        }

        .audit-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .audit-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .audit-form-field {
          display: flex;
          flex-direction: column;
        }

        .audit-form-submit {
          width: 100%;
          justify-content: center;
          margin-top: 8px;
        }

        .audit-form-privacy {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--ink-mute);
          letter-spacing: 0.04em;
          text-align: center;
          margin: 16px 0 0;
        }

        @keyframes audit-spin {
          to { transform: rotate(360deg); }
        }

        .audit-spinner {
          animation: audit-spin 0.8s linear infinite;
        }

        /* ── Proof section ────────────────────── */
        .audit-proof {
          background: var(--bg-elev);
          padding: clamp(76px, 9vw, 132px) 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .audit-proof-head {
          margin-bottom: clamp(40px, 5vw, 64px);
        }

        .audit-proof-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          max-width: 960px;
        }

        .audit-proof-card {
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          background: var(--bg);
          padding: clamp(28px, 4vw, 40px);
        }

        .audit-proof-eyebrow {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin-bottom: 12px;
        }

        .audit-proof-title {
          font-family: var(--font-display);
          font-size: clamp(20px, 2vw, 24px);
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0 0 12px;
        }

        .audit-proof-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--ink-dim);
          margin: 0 0 24px;
        }

        .audit-proof-stat {
          font-family: var(--font-display);
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--accent);
          margin-bottom: 4px;
        }

        .audit-proof-stat-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-mute);
          margin-bottom: 24px;
        }

        .audit-proof-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          transition: color 0.3s var(--ease);
        }

        .audit-proof-link:hover {
          color: var(--accent);
        }

        .audit-proof-link .ds-arrow {
          width: 12px;
          height: 12px;
        }

        /* ── Final CTA ────────────────────────── */
        .audit-final-cta {
          padding: clamp(76px, 9vw, 132px) 0;
        }

        .audit-final-inner {
          max-width: 680px;
          text-align: center;
          margin: 0 auto;
        }

        .audit-final-heading {
          font-size: clamp(32px, 4vw, 52px);
          margin-bottom: 16px;
        }

        .audit-final-desc {
          color: var(--ink-dim);
          margin-bottom: 40px;
        }

        .audit-final-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Responsive ───────────────────────── */
        @media (max-width: 900px) {
          .audit-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .audit-sidebar {
            position: static;
            order: 2;
          }

          .audit-form-wrapper {
            order: 1;
          }
        }

        @media (max-width: 640px) {
          .audit-hero-heading {
            font-size: clamp(36px, 10vw, 56px);
          }

          .audit-hero-badges {
            flex-direction: column;
            gap: 20px;
          }

          .audit-badge {
            padding: 0;
            border-left: none;
            padding-left: 16px;
            border-left: 2px solid var(--line);
          }

          .audit-badge:first-child {
            padding-left: 16px;
            border-left: 2px solid var(--line);
          }

          .audit-form-row {
            grid-template-columns: 1fr;
          }

          .audit-proof-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
