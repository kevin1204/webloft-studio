import { NextRequest } from 'next/server';

const MEDIA_BASE = 'https://media.webloftstudio.com';
const NO_STORE = 'no-store, no-cache, must-revalidate, max-age=0';

function isAllowedFile(file: string): boolean {
  return file.startsWith('podcast/') && !file.includes('..') && !file.startsWith('/');
}

function contentTypeFor(file: string): string {
  return file.endsWith('.mp3') ? 'audio/mpeg' : 'audio/mp4';
}

async function handleAudioRequest(request: NextRequest, method: 'GET' | 'HEAD') {
  const file = request.nextUrl.searchParams.get('file');
  if (!file) {
    return new Response('Missing file parameter', { status: 400 });
  }

  if (!isAllowedFile(file)) {
    return new Response('Invalid file parameter', { status: 400 });
  }

  const range = request.headers.get('range');
  const upstream = await fetch(`${MEDIA_BASE}/${encodeURI(file)}`, {
    method,
    headers: range ? { Range: range } : undefined,
    cache: 'no-store',
  });

  if (!upstream.ok && upstream.status !== 206) {
    return new Response('Audio not found', { status: 404 });
  }

  const responseHeaders = new Headers({
    'Accept-Ranges': 'bytes',
    'Cache-Control': NO_STORE,
    'CDN-Cache-Control': NO_STORE,
    'Content-Type': contentTypeFor(file),
    'Vary': 'Range',
    'Vercel-CDN-Cache-Control': NO_STORE,
  });

  const contentLength = upstream.headers.get('content-length');
  if (contentLength) responseHeaders.set('Content-Length', contentLength);

  const contentRange = upstream.headers.get('content-range');
  if (contentRange) responseHeaders.set('Content-Range', contentRange);

  return new Response(method === 'HEAD' ? null : upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export async function GET(request: NextRequest) {
  return handleAudioRequest(request, 'GET');
}

export async function HEAD(request: NextRequest) {
  return handleAudioRequest(request, 'HEAD');
}
