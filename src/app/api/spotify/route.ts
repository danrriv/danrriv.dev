import { NextRequest, NextResponse } from 'next/server';

// GET /api/hello
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') ?? 'mundo';

  return NextResponse.json({ msg: `Hola ${name}` });
}