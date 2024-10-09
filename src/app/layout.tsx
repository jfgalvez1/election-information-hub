'use client';
import { PropsWithChildren, ReactElement } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

import { ConvexClientProvider } from './ConvexClienProvider';
import TopBar from './components/TopBar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const RootLayout = ({
  children,
}: Required<PropsWithChildren>): ReactElement => {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          <div className={`${inter.className} flex flex-col min-h-dvh`}>
            <TopBar />
            <main className="max-w-[1440px] md:px-8 px-[16px] pt-6 pb-4 w-full mx-auto">
              {children}
            </main>
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
