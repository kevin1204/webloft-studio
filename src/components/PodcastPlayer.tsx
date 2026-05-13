'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { PodcastChapter } from '@/lib/blog';

type PodcastPlayerProps = {
  audioUrl: string;
  title: string;
  image: string;
  duration: string;
  chapters?: PodcastChapter[];
};

const SPEEDS = [1, 1.25, 1.5, 2] as const;

function parseTimestamp(ts: string): number {
  const parts = ts.split(':').map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return parts[0] * 60 + parts[1];
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function audioTypeFor(url: string): string {
  return url.includes('.mp3') ? 'audio/mpeg' : 'audio/mp4';
}

export default function PodcastPlayer({
  audioUrl,
  title,
  image,
  duration,
  chapters,
}: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [currentTime, setCurrent] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [chaptersOpen, setChaptersOpen] = useState(false);

  const toggle = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;

    if (!el.paused) {
      el.pause();
    } else {
      // iOS: play() must be called directly in user gesture call stack.
      // Do NOT call load() before play() — it breaks the gesture chain on iOS.
      const playAttempt = el.play();
      // Show loading state while the browser buffers enough audio to start.
      setWaiting(true);
      playAttempt.catch(() => {
        setWaiting(false);
      });
    }
  }, []);

  const skip = useCallback((delta: number) => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = Math.max(0, Math.min(el.duration || 0, el.currentTime + delta));
  }, []);

  const cycleSpeed = useCallback(() => {
    const next = (speedIdx + 1) % SPEEDS.length;
    setSpeedIdx(next);
    if (audioRef.current) audioRef.current.playbackRate = SPEEDS[next];
  }, [speedIdx]);

  const seekTo = useCallback((seconds: number) => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = seconds;
    if (!playing) {
      el.play().catch(() => {});
    }
  }, [playing]);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const bar = progressRef.current;
      const el = audioRef.current;
      if (!bar || !el) return;
      const rect = bar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (el.duration && isFinite(el.duration)) {
        el.currentTime = pct * el.duration;
      }
    },
    []
  );

  // Touch support for progress bar
  const handleProgressTouch = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const bar = progressRef.current;
      const el = audioRef.current;
      if (!bar || !el) return;
      const touch = e.touches[0];
      const rect = bar.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
      if (el.duration && isFinite(el.duration)) {
        el.currentTime = pct * el.duration;
      }
    },
    []
  );

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => {
      if (el.duration && isFinite(el.duration)) {
        setTotalDuration(el.duration);
      }
    };
    const onEnd = () => { setPlaying(false); setWaiting(false); };
    const onPlay = () => { setWaiting(true); };
    const onPlaying = () => { setPlaying(true); setWaiting(false); };
    const onPause = () => { setPlaying(false); setWaiting(false); };
    const onWaiting = () => setWaiting(true);
    const onCanPlay = () => {
      setWaiting(false);
      setPlaying(!el.paused);
    };
    const onError = () => { setPlaying(false); setWaiting(false); };

    el.addEventListener('timeupdate', onTime);
    el.addEventListener('loadedmetadata', onMeta);
    el.addEventListener('durationchange', onMeta);
    el.addEventListener('ended', onEnd);
    el.addEventListener('play', onPlay);
    el.addEventListener('playing', onPlaying);
    el.addEventListener('pause', onPause);
    el.addEventListener('waiting', onWaiting);
    el.addEventListener('stalled', onWaiting);
    el.addEventListener('canplaythrough', onCanPlay);
    el.addEventListener('canplay', onCanPlay);
    el.addEventListener('error', onError);
    return () => {
      el.removeEventListener('timeupdate', onTime);
      el.removeEventListener('loadedmetadata', onMeta);
      el.removeEventListener('durationchange', onMeta);
      el.removeEventListener('ended', onEnd);
      el.removeEventListener('play', onPlay);
      el.removeEventListener('playing', onPlaying);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('waiting', onWaiting);
      el.removeEventListener('stalled', onWaiting);
      el.removeEventListener('canplaythrough', onCanPlay);
      el.removeEventListener('canplay', onCanPlay);
      el.removeEventListener('error', onError);
    };
  }, []);

  const pct = totalDuration ? (currentTime / totalDuration) * 100 : 0;

  return (
    <div className="wl-podcast-player">
      <audio ref={audioRef} preload="metadata">
        <source src={audioUrl} type={audioTypeFor(audioUrl)} />
      </audio>

      {/* Header: cover + title */}
      <div className="wl-podcast-player-header">
        <div className="wl-podcast-cover">
          <Image src={image} alt={title} fill sizes="80px" />
        </div>
        <div className="wl-podcast-info">
          <span className="wl-podcast-badge">Podcast Episode</span>
          <p className="wl-podcast-title">{title}</p>
          {duration && <span className="wl-podcast-duration">{duration}</span>}
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="wl-podcast-progress"
        ref={progressRef}
        onClick={handleProgressClick}
        onTouchStart={handleProgressTouch}
        role="slider"
        aria-label="Seek"
        aria-valuemin={0}
        aria-valuemax={totalDuration}
        aria-valuenow={currentTime}
        tabIndex={0}
      >
        <div className="wl-podcast-progress-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Time display */}
      <div className="wl-podcast-time">
        <span>{formatTime(currentTime)}</span>
        <span>{totalDuration ? formatTime(totalDuration) : duration || '--:--'}</span>
      </div>

      {/* Controls */}
      <div className="wl-podcast-controls">
        <button
          className="wl-podcast-btn wl-podcast-btn-skip"
          onClick={() => skip(-15)}
          aria-label="Rewind 15 seconds"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 4v6h6" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
          <span>15</span>
        </button>

        <button
          className="wl-podcast-btn wl-podcast-btn-play"
          onClick={toggle}
          aria-label={waiting ? 'Loading' : playing ? 'Pause' : 'Play'}
          type="button"
        >
          {waiting && !playing ? (
            <svg className="wl-podcast-spinner" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" opacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>

        <button
          className="wl-podcast-btn wl-podcast-btn-skip"
          onClick={() => skip(15)}
          aria-label="Forward 15 seconds"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 4v6h-6" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          <span>15</span>
        </button>

        <button
          className="wl-podcast-btn wl-podcast-btn-speed"
          onClick={cycleSpeed}
          aria-label={`Playback speed ${SPEEDS[speedIdx]}x`}
          type="button"
        >
          {SPEEDS[speedIdx]}x
        </button>
      </div>

      {/* Chapters */}
      {chapters && chapters.length > 0 && (
        <div className="wl-podcast-chapters">
          <button
            className="wl-podcast-chapters-toggle"
            onClick={() => setChaptersOpen(!chaptersOpen)}
            type="button"
          >
            <span>Chapters</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className={chaptersOpen ? 'wl-podcast-chevron-open' : ''}
            >
              <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {chaptersOpen && (
            <ul className="wl-podcast-chapters-list">
              {chapters.map((ch) => (
                <li key={ch.timestamp}>
                  <button
                    type="button"
                    onClick={() => seekTo(parseTimestamp(ch.timestamp))}
                    className="wl-podcast-chapter-btn"
                  >
                    <span className="wl-podcast-chapter-ts">{ch.timestamp}</span>
                    <span>{ch.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
