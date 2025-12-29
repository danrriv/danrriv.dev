import { getTopTracks } from '@/lib/server/spotify';
import { mapToTopTracks } from '@/lib/spotify-mapper';
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await getTopTracks();   
    if (!data) return NextResponse.json([]);

    const trimmed = mapToTopTracks(data.items); 
    return NextResponse.json(trimmed);
}