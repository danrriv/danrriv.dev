import { getNowPlaying } from '@/lib/server/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getNowPlaying();
  return NextResponse.json(data);
}