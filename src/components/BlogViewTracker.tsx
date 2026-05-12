'use client';

import { useEffect } from 'react';

export default function BlogViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    // Avoid double-counting in dev mode (React strict mode)
    const key = `viewed:${slug}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');

    fetch(`/api/views/${slug}`, { method: 'POST' }).catch(() => {
      // Silently fail — view tracking is non-critical
    });
  }, [slug]);

  return null;
}
