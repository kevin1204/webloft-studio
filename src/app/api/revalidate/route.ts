import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-sanity-secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug = body?.slug?.current;

    revalidatePath('/blog');

    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    revalidatePath('/sitemap.xml');

    return NextResponse.json({ revalidated: true, slug });
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
