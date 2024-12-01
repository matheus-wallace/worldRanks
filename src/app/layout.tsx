import type { Metadata } from 'next';
import React from 'react';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'World Ranks',
  description: 'Rank the countries around the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
