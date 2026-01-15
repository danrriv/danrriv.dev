import { getRecentlyPlayed } from '@/lib/server/spotify';
import { NextResponse } from 'next/server';
/**
 * Sin uso, pero usan el lib de Spotify que definimos
 */
export async function GET() {
  const data = await getRecentlyPlayed();
  return NextResponse.json(data);
}