import Link from 'next/link';
import { posts } from '../../content/opinion/posts';

export const dynamic = 'force-static';

export default function OpinionIndex(){
  return (
    <div>
      <h1 className="text-lg font-bold mb-3">Opinion</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(p=> (
          <Link key={p.slug} href={`/opinion/${p.slug}`} className="rounded-2xl border p-4 bg-white block">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-xs opacity-70">{p.date}</p>
            <p className="text-sm opacity-90 mt-2">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
