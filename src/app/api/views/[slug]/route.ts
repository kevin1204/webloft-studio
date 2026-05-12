import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

const KEY_PREFIX = 'blog:views:';

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const count = await redis.incr(`${KEY_PREFIX}${slug}`);
  return NextResponse.json({ slug, views: count });
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const count = (await redis.get<number>(`${KEY_PREFIX}${slug}`)) ?? 0;
  return NextResponse.json({ slug, views: count });
}
