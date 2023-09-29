import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rawg',
  description: 'discover new games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="container py-6">
        <main>{children}</main>
      </body>
    </html>
  );
}
