async function fetchRate(base: string, symbol: string) {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  const rate = data?.rates?.[symbol];
  return typeof rate === 'number' ? rate : null;
}

export default async function EconomyPage() {
  const [usdBdt, gbpBdt, gbpUsd] = await Promise.all([
    fetchRate('USD','BDT'),
    fetchRate('GBP','BDT'),
    fetchRate('GBP','USD'),
  ]);

  const cards = [
    { title: 'USD → BDT', value: usdBdt },
    { title: 'GBP → BDT', value: gbpBdt },
    { title: 'GBP → USD', value: gbpUsd },
  ];

  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Economy Snapshot</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c,i)=> (
          <div key={i} className="rounded-2xl border p-4 bg-white">
            <div className="text-sm opacity-70">{c.title}</div>
            <div className="text-2xl font-bold mt-1">{c.value ? c.value.toFixed(2) : '—'}</div>
            <div className="text-xs opacity-70 mt-2">Updated hourly</div>
          </div>
        ))}
      </div>
    </div>
  );
}
