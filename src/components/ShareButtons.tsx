'use client';

import { useState } from 'react';

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://webloftstudio.com/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      <div className="wl-share-bar">
        <span className="wl-share-label">Share this article</span>
        <div className="wl-share-buttons">
          <button
            onClick={copyLink}
            className="wl-share-btn"
            aria-label={copied ? 'Link copied' : 'Copy link'}
            title={copied ? 'Copied!' : 'Copy link'}
          >
            {copied ? <CheckIcon /> : <LinkIcon />}
            <span>{copied ? 'Copied' : 'Copy link'}</span>
          </button>
          <a
            href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wl-share-btn"
            aria-label="Share on X"
          >
            <XIcon />
            <span>X</span>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wl-share-btn"
            aria-label="Share on LinkedIn"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wl-share-btn"
            aria-label="Share on Facebook"
          >
            <FacebookIcon />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .wl-share-bar {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: clamp(20px, 3vw, 32px) 0;
          border-top: 1px solid var(--line);
          margin-top: clamp(40px, 5vw, 64px);
        }

        .wl-share-label {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-mute);
          white-space: nowrap;
        }

        .wl-share-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .wl-share-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: transparent;
          color: var(--ink-dim);
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .wl-share-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: color-mix(in oklch, var(--accent), transparent 94%);
        }

        @media (max-width: 620px) {
          .wl-share-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </>
  );
}
