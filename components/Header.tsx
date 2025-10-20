'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/economy', label: 'Economy' },
  { href: '/local', label: 'Local' },
  { href: '/health', label: 'Health AI' },
  { href: '/chat', label: 'AI Chat' },
  { href: '/flight', label: 'Flight' },
  { href: '/games', label: 'Games' },
  { href: '/opinion', label: 'Opinion' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-3 items-center">
        <Link href="/" className="font-bold text-lg">Dinerpordin</Link>
        <div className="flex gap-3 text-sm flex-wrap">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname===l.href? 'font-semibold underline' : 'opacity-80 hover:opacity-100'}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
