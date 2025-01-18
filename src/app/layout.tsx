import type { Metadata } from 'next';
import React from 'react';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/Header';
import { DataCountryProvider } from '@/Context/CountryContext';
import Head from 'next/head';

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
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <DataCountryProvider>
          <Provider>
            <Header />
            {children}
          </Provider>
        </DataCountryProvider>
      </body>
    </html>
  );
}
