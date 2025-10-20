const GAMES = [
  { slug: '2048', title: '2048', src: '/games/2048/index.html' },
  { slug: 'snake', title: 'Snake', src: '/games/snake/index.html' },
];

export default function GamesPage(){
  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Classic Games</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map(g => (
          <div key={g.slug} className="rounded-2xl border bg-white overflow-hidden">
            <div className="p-3 font-semibold">{g.title}</div>
            <iframe src={g.src} title={g.title} width="100%" height="420" />
          </div>
        ))}
      </div>
      <p className="text-sm opacity-70 mt-3">Place your game folders under <code>/public/games/&lt;name&gt;/index.html</code> and add entries to <code>GAMES</code> above.</p>
    </div>
  );
}
