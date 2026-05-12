import { NextRequest, NextResponse } from 'next/server';
import { redis } from '@/lib/redis';
import { getAllPosts } from '@/lib/blog';

const KEY_PREFIX = 'blog:views:';

export async function GET(req: NextRequest) {
  const limit = Number(req.nextUrl.searchParams.get('limit') ?? '5');
  const exclude = req.nextUrl.searchParams.get('exclude') ?? '';

  const posts = getAllPosts();
  const slugs = posts.map((p) => p.slug);

  // Batch-fetch all view counts
  const pipeline = redis.pipeline();
  for (const slug of slugs) {
    pipeline.get(`${KEY_PREFIX}${slug}`);
  }
  const results = await pipeline.exec();

  const ranked = slugs
    .map((slug, i) => ({
      slug,
      views: (results[i] as number) ?? 0,
    }))
    .filter((item) => item.slug !== exclude)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);

  return NextResponse.json(ranked);
}
