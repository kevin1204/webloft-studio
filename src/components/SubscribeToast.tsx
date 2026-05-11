'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import SubscribeForm from './SubscribeForm';

const STORAGE_KEY = 'wl-subscribe-toast';
const DELAY_MS = 6_000;
const EXPAND_DELAY_MS = 3_000;
const EXPAND_VISIBLE_MS = 8_000;
const COLLAPSE_MS = 500;

function isSubscribed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    return !!data.subscribed;
  } catch {
    return false;
  }
}

function shouldShowToast(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;
    const data = JSON.parse(raw);
    if (data.subscribed) return false;
    if (data.dismissCount > 0) return false;
    return true;
  } catch {
    return true;
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
  const [showPill, setShowPill] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
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
      if (reason === 'subscribed') {
        setShowPill(false);
        setSubscribed(true);
      } else {
        setShowPill(true);
      }
    }, 320);
  }, []);

  const closeClick = useCallback(() => dismiss('dismissed'), [dismiss]);

  const reopen = useCallback(() => {
    dismissed.current = false;
    setShowPill(false);
    setExpanded(false);
    setCollapsing(false);
    setVisible(true);
  }, []);

  /* ── Init: decide whether to show toast or pill ── */
  useEffect(() => {
    if (isSubscribed()) {
      setSubscribed(true);
      return;
    }

    if (shouldShowToast()) {
      const timerHandle = setTimeout(() => show(), DELAY_MS);
      return () => clearTimeout(timerHandle);
    } else {
      dismissed.current = true;
      setShowPill(true);
    }
  }, [show]);

  /* ── Watch for subscription success inside the toast ── */
  useEffect(() => {
    if (!visible) return;
    const node = toastRef.current;
    if (!node) return;

    const mutObs = new MutationObserver(() => {
      if (node.querySelector('.wl-subscribe-success')) {
        setTimeout(() => dismiss('subscribed'), 3000);
      }
    });
    mutObs.observe(node, { childList: true, subtree: true });
    return () => mutObs.disconnect();
  }, [visible, dismiss]);

  /* ── Pill expand / collapse cycle ── */
  useEffect(() => {
    if (!showPill || subscribed) return;

    const expandTimer = setTimeout(() => setExpanded(true), EXPAND_DELAY_MS);
    const collapseTimer = setTimeout(() => {
      setCollapsing(true);
      setTimeout(() => {
        setExpanded(false);
        setCollapsing(false);
      }, COLLAPSE_MS);
    }, EXPAND_DELAY_MS + EXPAND_VISIBLE_MS);

    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, [showPill, subscribed]);

  /* ── Escape key ── */
  useEffect(() => {
    if (!visible || hiding) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeClick();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible, hiding, closeClick]);

  if (subscribed) return null;

  /* ── Pill (desktop/tablet only, hidden via CSS on mobile) ── */
  if (showPill && !visible) {
    return (
      <button
        className={`wl-subscribe-mini${expanded && !collapsing ? ' expanded' : ''}${collapsing ? ' collapsing' : ''}`}
        onClick={reopen}
        aria-label="Open newsletter subscription"
      >
        <span className="wl-subscribe-mini-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          Subscribe — it&apos;s free
        </span>
        <span className="wl-subscribe-mini-teaser">
          Short reads to help your business grow and win more customers.
        </span>
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
