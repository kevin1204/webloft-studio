'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import SubscribeForm from './SubscribeForm';

const STORAGE_KEY = 'wl-subscribe-toast';
const DELAY_MS = 6_000;

/* Cooldown escalation: 3 days → 30 days → 90 days */
const COOLDOWNS_MS = [
  3 * 24 * 60 * 60 * 1000,   // 1st dismiss → 3 days
  30 * 24 * 60 * 60 * 1000,  // 2nd dismiss → 30 days
  90 * 24 * 60 * 60 * 1000,  // 3rd+ dismiss → 90 days
];

function getState(): { show: boolean } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { show: true };
    const data = JSON.parse(raw);

    if (data.subscribed) return { show: false };

    if (data.dismissCount > 0 && data.ts) {
      const idx = Math.min(data.dismissCount - 1, COOLDOWNS_MS.length - 1);
      const cooldown = COOLDOWNS_MS[idx];
      const elapsed = Date.now() - data.ts;
      return { show: elapsed >= cooldown };
    }

    return { show: true };
  } catch {
    return { show: true };
  }
}

function persistDismiss(reason: 'dismissed' | 'subscribed') {
  try {
    if (reason === 'subscribed') {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ subscribed: true, ts: Date.now() }),
      );
      return;
    }

    let count = 0;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const prev = JSON.parse(raw);
        count = prev.dismissCount || 0;
      }
    } catch { /* ignore */ }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ dismissCount: count + 1, ts: Date.now() }),
    );
  } catch { /* storage full / blocked */ }
}

export default function SubscribeToast() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
  const dismissed = useRef(false);

  const show = useCallback(() => {
    if (dismissed.current) return;
    setVisible(true);
  }, []);

  const dismiss = useCallback((reason: 'dismissed' | 'subscribed') => {
    dismissed.current = true;
    persistDismiss(reason);
    setHiding(true);
    setTimeout(() => {
      setVisible(false);
      setHiding(false);
      if (reason === 'dismissed') setMinimized(true);
    }, 320);
  }, []);

  const closeClick = useCallback(() => dismiss('dismissed'), [dismiss]);

  const reopen = useCallback(() => {
    dismissed.current = false;
    setMinimized(false);
    setVisible(true);
  }, []);

  /* ── Show after 6 seconds on page ── */
  useEffect(() => {
    if (!getState().show) {
      dismissed.current = true;
      return;
    }

    let mutObs: MutationObserver | undefined;

    const timerHandle = setTimeout(() => show(), DELAY_MS);

    function watchSuccess() {
      const node = toastRef.current;
      if (!node) return;
      mutObs = new MutationObserver(() => {
        if (node.querySelector('.wl-subscribe-success')) {
          setTimeout(() => dismiss('subscribed'), 3000);
        }
      });
      mutObs.observe(node, { childList: true, subtree: true });
    }
    requestAnimationFrame(watchSuccess);

    return () => {
      clearTimeout(timerHandle);
      mutObs?.disconnect();
    };
  }, [show, dismiss]);

  /* ── Escape key ── */
  useEffect(() => {
    if (!visible || hiding) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeClick();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible, hiding, closeClick]);

  /* ── Minimized pill (desktop/tablet only, hidden via CSS on mobile) ── */
  if (minimized) {
    return (
      <button
        className="wl-subscribe-mini"
        onClick={reopen}
        aria-label="Open newsletter subscription"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        Subscribe — it&apos;s free
      </button>
    );
  }

  if (!visible) return null;

  return (
    <>
      <div
        className={`wl-subscribe-toast-overlay${hiding ? ' wl-subscribe-toast-overlay--hiding' : ''}`}
        onClick={closeClick}
        aria-hidden="true"
      />
      <div
        ref={toastRef}
        className={`wl-subscribe-toast${hiding ? ' wl-subscribe-toast--hiding' : ''}`}
        role="complementary"
        aria-label="Newsletter subscription"
        aria-live="polite"
      >
        <button
          className="wl-subscribe-toast-close"
          onClick={closeClick}
          aria-label="Dismiss newsletter prompt"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="wl-subscribe-toast-badge">100% Free</div>

        <h2 className="wl-subscribe-toast-title">
          Grow smarter online.<br />
          <em>We&apos;ll show you how.</em>
        </h2>

        <p className="wl-subscribe-toast-desc">
          Join business owners getting free insights on AI tools, SEO
          strategy, website performance, and what&apos;s actually working
          right now — delivered when it matters, not on a schedule.
        </p>

        <ul className="wl-subscribe-toast-perks">
          <li>
            <span className="wl-subscribe-toast-perk-icon" aria-hidden="true">&#10003;</span>
            AI tips to save time &amp; automate smarter
          </li>
          <li>
            <span className="wl-subscribe-toast-perk-icon" aria-hidden="true">&#10003;</span>
            SEO &amp; content tactics that drive real traffic
          </li>
          <li>
            <span className="wl-subscribe-toast-perk-icon" aria-hidden="true">&#10003;</span>
            Web performance fixes that boost conversions
          </li>
        </ul>

        <SubscribeForm variant="modal" />

        <p className="wl-subscribe-toast-trust">No spam, ever. Unsubscribe in one click.</p>
      </div>
    </>
  );
}
