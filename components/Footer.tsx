import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm grid gap-2 sm:grid-cols-3">
        <div>
          <div className="font-semibold">Dinerpordin</div>
          <p className="opacity-70">Simple, fast, helpful.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div className="opacity-70">© {new Date().getFullYear()} Dinerpordin</div>
      </div>
    </footer>
  );
}
