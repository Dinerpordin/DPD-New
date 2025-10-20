'use client';
import { useState } from 'react';

export default function ChatPage(){
  const [q,setQ] = useState('');
  const [a,setA] = useState('');
  const [loading,setLoading] = useState(false);
  async function send(){
    setLoading(true); setA('');
    const r = await fetch('/api/chat',{ method:'POST', body: JSON.stringify({ input:q })});
    const t = await r.text(); setA(t); setLoading(false);
  }
  return (
    <div className="grid gap-3">
      <textarea className="border rounded w-full p-2" rows={6} value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask anything…"/>
      <button onClick={send} disabled={loading} className="border rounded px-3 py-2">{loading? 'Thinking…':'Send'}</button>
      <pre className="rounded-2xl border p-4 bg-white whitespace-pre-wrap">{a}</pre>
    </div>
  );
}
