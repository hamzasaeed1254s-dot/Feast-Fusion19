import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Analytics } from '../../../vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Feast Fusion - Discover Amazing Products',
  description: 'Explore a curated collection of products from top brands. Affiliate links to Daraz, Amazon, and more.',
  openGraph: {
    title: 'Feast Fusion',
    description: 'Discover amazing products with affiliate links.',
    url: 'https://feastfusion.com',
    siteName: 'Feast Fusion',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
