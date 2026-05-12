'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register the cleanup SW so it replaces the old caching one.
      // Once the cleanup SW activates it clears all caches and
      // unregisters itself — no more stale content.
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return null;
}
