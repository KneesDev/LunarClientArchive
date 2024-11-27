import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Lunar Client Archive",
  description: "Archived installers of Lunar Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="bg-neutral-100 min-h-screen flex flex-col items-center select-none">
        <Navbar />
        <main className="flex-grow w-full max-w-[1700px] px-8 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}