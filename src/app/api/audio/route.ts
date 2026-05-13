import { NextRequest } from 'next/server';

export const runtime = 'edge';

const MEDIA_BASE = 'https://media.webloftstudio.com';
const AUDIO_CONTENT_TYPE = 'audio/mp4';
const NO_STORE = 'no-store, no-cache, must-revalidate, max-age=0';

function isAllowedFile(file: string): boolean {
  return file.startsWith('podcast/') && !file.includes('..') && !file.startsWith('/');
}

/**
 * Proxies audio from R2 with the correct Content-Type header.
 * R2 serves .m4a files as "audio/x-m4a" which iOS Safari doesn't play.
 * This route streams them as "audio/mp4" with Range support.
 *
 * Usage: /api/audio?file=podcast/building-a-story-brand.m4a
 */
async function handleAudioRequest(request: NextRequest, method: 'GET' | 'HEAD') {
  const file = request.nextUrl.searchParams.get('file');
  if (!file) {
    return new Response('Missing file parameter', { status: 400 });
  }

  if (!isAllowedFile(file)) {
    return new Response('Invalid file parameter', { status: 400 });
  }

  const url = `${MEDIA_BASE}/${encodeURI(file)}`;

  // Forward Range header for seeking support (iOS requires this)
  const headers: Record<string, string> = {};
  const range = request.headers.get('range');
  if (range) {
    headers['Range'] = range;
  }

  try {
    const upstream = await fetch(url, {
      headers,
      method,
      cache: 'no-store',
    });

    if (!upstream.ok && upstream.status !== 206) {
      return new Response('Audio not found', { status: 404 });
    }

    const responseHeaders: Record<string, string> = {
      'Content-Type': AUDIO_CONTENT_TYPE,
      'Accept-Ranges': 'bytes',
      'Cache-Control': NO_STORE,
      'CDN-Cache-Control': NO_STORE,
      'Vercel-CDN-Cache-Control': NO_STORE,
      'Vary': 'Range',
    };

    // Forward content headers for Range support
    const contentLength = upstream.headers.get('content-length');
    if (contentLength) responseHeaders['Content-Length'] = contentLength;

    const contentRange = upstream.headers.get('content-range');
    if (contentRange) responseHeaders['Content-Range'] = contentRange;

    return new Response(method === 'HEAD' ? null : upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch {
    return new Response('Failed to fetch audio', { status: 502 });
  }
}

export async function GET(request: NextRequest) {
  return handleAudioRequest(request, 'GET');
}

export async function HEAD(request: NextRequest) {
  return handleAudioRequest(request, 'HEAD');
}
