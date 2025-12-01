import { NextResponse } from "next/server";

// app/api/github/route.ts  (opcional: tu propia API Route)
export async function GET() {
  const res = await fetch('https://api.github.com/users/danrriv');
  const data = await res.json();
  return NextResponse.json(data); // ← devuelves solo lo público
}