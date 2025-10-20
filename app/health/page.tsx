'use client';
import { useState } from 'react';

export default function HealthPage() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'analyze'|'concise'|'bangla'>('analyze');
  const [out, setOut] = useState('');
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true); setOut('');
    try {
      const r = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ input, domain:'health', mode }) });
      const t = await r.text();
      setOut(t || '');
    } finally { setLoading(false); }
  }

  return (
    <div className="grid gap-4">
      <div className="rounded-2xl border p-4 bg-white">
        <h1 className="text-lg font-bold">Health Assistant</h1>
        <p className="text-xs opacity-70 mt-1">Educational purposes only. Not medical advice.</p>
        <div className="flex gap-2 mt-3">
          <button className={mode==='analyze'? 'font-semibold underline':''} onClick={()=>setMode('analyze')}>Analyze</button>
          <button className={mode==='concise'? 'font-semibold underline':''} onClick={()=>setMode('concise')}>Concise</button>
          <button className={mode==='bangla'? 'font-semibold underline':''} onClick={()=>setMode('bangla')}>বাংলা</button>
        </div>
        <textarea value={input} onChange={e=>setInput(e.target.value)} className="border rounded w-full mt-3 p-2" rows={6} placeholder="Describe symptoms or paste text…" />
        <button onClick={run} disabled={loading} className="border rounded px-3 py-2 mt-3">{loading? 'Thinking…':'Ask'}</button>
        <div className="mt-3 whitespace-pre-wrap">{out}</div>
      </div>
      <div className="rounded-2xl border p-4 bg-white text-red-700">
        <strong>⚠️ Urgent symptoms</strong> (e.g., severe chest pain, sudden shortness of breath, stroke signs). Call emergency services immediately (999 in the UK).
      </div>
    </div>
  );
}
