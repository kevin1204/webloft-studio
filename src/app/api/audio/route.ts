import { NextRequest } from 'next/server';

export const runtime = 'edge';

const MEDIA_BASE = 'https://media.webloftstudio.com';

/**
 * Proxies audio from R2 with the correct Content-Type header.
 * R2 serves .m4a files as "audio/x-m4a" which iOS Safari doesn't play.
 * This route streams them as "audio/mp4" with full Range request support.
 *
 * Usage: /api/audio?file=podcast/building-a-story-brand.m4a
 */
export async function GET(request: NextRequest) {
  const file = request.nextUrl.searchParams.get('file');
  if (!file) {
    return new Response('Missing file parameter', { status: 400 });
  }

  const url = `${MEDIA_BASE}/${file}`;

  // Forward Range header for seeking support (iOS requires this)
  const headers: Record<string, string> = {};
  const range = request.headers.get('range');
  if (range) {
    headers['Range'] = range;
  }

  try {
    const upstream = await fetch(url, { headers });

    if (!upstream.ok && upstream.status !== 206) {
      return new Response('Audio not found', { status: 404 });
    }

    const responseHeaders: Record<string, string> = {
      'Content-Type': 'audio/mp4',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    };

    // Forward content headers for Range support
    const contentLength = upstream.headers.get('content-length');
    if (contentLength) responseHeaders['Content-Length'] = contentLength;

    const contentRange = upstream.headers.get('content-range');
    if (contentRange) responseHeaders['Content-Range'] = contentRange;

    return new Response(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch {
    return new Response('Failed to fetch audio', { status: 502 });
  }
}
