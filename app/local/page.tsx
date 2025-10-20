'use client';
import { useEffect, useState } from 'react';

type Weather = { temp: number; desc: string } | null;

enum Stage { Idle, Loading, Ready }

export default function LocalPage() {
  const [city, setCity] = useState('London');
  const [stage, setStage] = useState(Stage.Idle);
  const [weather, setWeather] = useState<Weather>(null);
  const [prayer, setPrayer] = useState<any>(null);

  async function loadAll(targetCity: string) {
    setStage(Stage.Loading);
    try {
      const g = await fetch(`/api/geo?city=${encodeURIComponent(targetCity)}`).then(r=>r.json());
      if (!g?.lat) throw new Error('No geocode');
      const w = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${g.lat}&longitude=${g.lon}&current=temperature_2m,weather_code`).then(r=>r.json());
      const temp = w?.current?.temperature_2m;
      const desc = `Code ${w?.current?.weather_code}`;
      setWeather(typeof temp==='number' ? { temp, desc } : null);
      const pr = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(targetCity)}&country=${encodeURIComponent(g.country||'')}`).then(r=>r.json());
      setPrayer(pr?.data?.timings || null);
      setStage(Stage.Ready);
    } catch(e) {
      setStage(Stage.Idle);
    }
  }

  useEffect(()=>{ loadAll(city); },[]);

  return (
    <div className="grid gap-4">
      <div className="rounded-2xl border p-4 bg-white flex gap-2">
        <input value={city} onChange={e=>setCity(e.target.value)} placeholder="Enter city (e.g., London)" className="border rounded px-3 py-2 w-full" />
        <button onClick={()=>loadAll(city)} className="border rounded px-3 py-2">Update</button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-semibold">Weather</h3>
          {stage===Stage.Loading? <p>Loading…</p> : weather? (
            <p className="mt-2"><span className="text-2xl font-bold">{weather.temp}°C</span> <span className="opacity-70">{weather.desc}</span></p>
          ) : <p className="opacity-70">Enter a city and click Update</p>}
          <p className="text-xs opacity-70 mt-2">Source: Open-Meteo</p>
        </div>
        <div className="rounded-2xl border p-4 bg-white">
          <h3 className="font-semibold">Prayer Times (Today)</h3>
          {prayer ? (
            <ul className="mt-2 text-sm grid grid-cols-2 gap-1">
              {Object.entries(prayer).map(([k,v]: any)=> (
                <li key={k} className="flex justify-between border-b py-1"><span>{k}</span><span>{v as string}</span></li>
              ))}
            </ul>
          ) : <p className="opacity-70">Enter a city and click Update</p>}
          <p className="text-xs opacity-70 mt-2">Source: Aladhan API</p>
        </div>
      </div>
    </div>
  );
}
