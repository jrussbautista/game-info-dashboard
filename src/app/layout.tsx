import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Games Info Dashboard',
  description: 'discover new games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Nav />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  );
}
