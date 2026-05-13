'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg className="ds-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" />
    </svg>
  );
}

const SUPPRESSED_PATHS = ['/contact', '/free-website-audit'];
const SESSION_KEY = 'wl-exit-popup-seen';
const DELAY_MS = 5000; // Don't trigger in the first 5 seconds

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const pathname = usePathname();

  const dismiss = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
  }, []);

  useEffect(() => {
    // Don't show on suppressed paths
    if (SUPPRESSED_PATHS.some((p) => pathname.startsWith(p))) return;

    // Don't show if already dismissed this session
    try { if (sessionStorage.getItem(SESSION_KEY)) return; } catch {}

    let armed = false;
    const armTimer = setTimeout(() => { armed = true; }, DELAY_MS);

    function handleMouseLeave(e: MouseEvent) {
      if (!armed) return;
      // Only trigger when cursor moves toward the top of the viewport (browser chrome)
      if (e.clientY > 5) return;
      setVisible(true);
      document.removeEventListener('mouseout', handleMouseLeave);
    }

    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <>
      <div
        className={`wl-exit-overlay ${closing ? 'wl-exit-closing' : ''}`}
        onClick={dismiss}
        aria-hidden="true"
      />
      <div
        className={`wl-exit-popup ${closing ? 'wl-exit-closing' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Free website audit offer"
      >
        <button className="wl-exit-close" onClick={dismiss} aria-label="Close">
          <CloseIcon />
        </button>

        <div className="wl-exit-content">
          <div className="eyebrow" style={{ color: 'var(--accent)' }}>
            <span className="dot" />
            Before you go
          </div>
          <h2 className="wl-exit-title">
            Get a free website audit
          </h2>
          <p className="wl-exit-desc">
            We&apos;ll review your site&apos;s design, speed, SEO, and conversion paths — and send you a clear report within 48 hours. No cost, no commitment.
          </p>
          <div className="wl-exit-actions">
            <Link href="/free-website-audit" className="ds-btn ds-btn-primary" onClick={dismiss}>
              Request free audit <ArrowIcon />
            </Link>
            <button className="ds-btn ds-btn-ghost" onClick={dismiss}>
              No thanks
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .wl-exit-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9998;
          animation: wlExitFadeIn 0.3s ease;
          cursor: auto;
        }

        .wl-exit-popup,
        .wl-exit-popup * {
          cursor: auto;
        }

        .wl-exit-popup button,
        .wl-exit-popup a,
        .wl-exit-popup [role="button"] {
          cursor: pointer;
        }

        .wl-exit-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          width: min(520px, calc(100vw - 32px));
          background: var(--bg-elev);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: clamp(32px, 5vw, 48px);
          animation: wlExitSlideIn 0.3s ease;
        }

        .wl-exit-overlay.wl-exit-closing {
          animation: wlExitFadeOut 0.3s ease forwards;
        }

        .wl-exit-popup.wl-exit-closing {
          animation: wlExitSlideOut 0.3s ease forwards;
        }

        .wl-exit-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: var(--ink-mute);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: color 0.2s ease;
        }

        .wl-exit-close:hover {
          color: var(--ink);
        }

        .wl-exit-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .wl-exit-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 36px);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: var(--ink);
          margin: 0;
        }

        .wl-exit-desc {
          color: var(--ink-dim);
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
          max-width: 420px;
        }

        .wl-exit-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        @keyframes wlExitFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes wlExitFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes wlExitSlideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -46%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes wlExitSlideOut {
          from {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -46%);
          }
        }

        @media (max-width: 520px) {
          .wl-exit-actions {
            flex-direction: column;
          }

          .wl-exit-actions .ds-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
