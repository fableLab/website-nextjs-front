'use client'
import { Figtree, Playfair } from 'next/font/google';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Banner from "./components/ui/Banner";
import "./globals.css";
import { useTitleStore } from '@/app/stores/titleStore'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
});

const playFair = Playfair({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = useTitleStore(state => state.title)

  return (
    <html lang="fr">
      <head>
        <title>{title || 'fable-Lab'}</title>
      </head>
      <body
        className={`${figtree.variable} ${playFair.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <aside className="grid grid-cols-12 flex-grow">
          <div className="md:col-span-4 col-span-0 bg-lavender-200">
            <div id="summary"></div>
          </div>
          <div className="md:col-span-8 col-span-12">
            <Banner title={title} />
            <div className="pt-6 pb-12 px-6 bg-white flex flex-col gap-9" id="content">
              {children}
            </div>
          </div>
        </aside>
        <Footer />
      </body>
    </html>
  );
}
