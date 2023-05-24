import { Metadata } from 'next';
import Header from './_components/header';
import FileTree from './_components/tree';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Play App Router',
  description: 'Next.js の App Router の動作サンプル',
  twitter: {
    title: 'Next.js Play App Router',
    card: 'summary_large_image',
    creator: '@d151005',
    description: 'Next.js の App Router の動作サンプル',
  },
};

export default function RootLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full bg-black text-white">
      <body className="h-full container">
        <Header />
        <div className="flex mt-10 pb-14 gap-10">
          <FileTree />
          <main className="flex-1 border-2 border-indigo-500 p-6 relative">
            {children}
            <span className="absolute bottom-full left-0 mb-2 text-indigo-600">
              @children
            </span>
          </main>
          <div className="relative border-2 border-pink-500 p-6 w-80">
            {sidebar}
            <span className="absolute bottom-full left-0 mb-2 text-pink-600">
              @sidebar
            </span>
          </div>
        </div>
        {modal}
      </body>
    </html>
  );
}
