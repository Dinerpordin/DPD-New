import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Dinerpordin',
  description: 'News, tools, and simple AI helpers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-6 min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
