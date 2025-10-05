import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const faviconPath = path.join(process.cwd(), 'public', 'wflogo.svg');
    const faviconData = fs.readFileSync(faviconPath);
    
    return new NextResponse(faviconData, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new NextResponse('Favicon not found', { status: 404 });
  }
}
