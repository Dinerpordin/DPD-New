import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city') || 'London';
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`, { next: { revalidate: 86400 } });
  if (!res.ok) return NextResponse.json({});
  const data = await res.json();
  const r = data?.results?.[0];
  if (!r) return NextResponse.json({});
  return NextResponse.json({ lat: r.latitude, lon: r.longitude, country: r.country });
}
