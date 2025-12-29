import { getRecentlyPlayed } from '@/lib/server/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getRecentlyPlayed();
  return NextResponse.json(data);
}