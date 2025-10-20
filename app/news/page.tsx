import Parser from 'rss-parser';

export const revalidate = 600; // 10 minutes

async function getNews() {
  const parser = new Parser({ timeout: 8000 });
  const sources = [
    'https://feeds.bbci.co.uk/news/rss.xml',
    'https://www.prothomalo.com/feed',
  ];
  const feeds = await Promise.allSettled(sources.map(u => parser.parseURL(u)));
  const items = feeds.flatMap(r => r.status === 'fulfilled' ? (r.value.items ?? []) : []);
  return items
    .filter(i => i.link && i.title)
    .slice(0, 24)
    .map(i => ({
      title: i.title!,
      link: i.link!,
      isoDate: (i as any).isoDate || i.pubDate || '',
      source: (() => { try { return new URL(i.link!).hostname.replace('www.',''); } catch { return ''; } })(),
    }));
}

export default async function NewsPage() {
  const items = await getNews();
  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Latest News</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((n, idx) => (
          <a key={idx} href={n.link} target="_blank" className="rounded-2xl border p-4 shadow-sm hover:shadow transition bg-white block">
            <h3 className="text-base font-semibold leading-5">{n.title}</h3>
            <p className="text-xs opacity-70 mt-2">{n.source} · {n.isoDate?.slice(0,10)}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
