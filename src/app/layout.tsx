import type { Metadata } from 'next';
import React from 'react';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/Header';
import { DataProvider } from '@/context/DataContext';

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
        <DataProvider>
          <Provider>
            <Header />
            {children}
          </Provider>
        </DataProvider>
      </body>
    </html>
  );
}
