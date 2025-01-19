import type { Metadata } from 'next';
import React from 'react';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/Header';
import { DataCountryProvider } from '@/Context/CountryContext';
import Head from 'next/head';
import { type_primary } from '@/utils/fonts/fonts';
import { ThemeProvider } from '@/Context/ThemeContext';

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
      <body className={`${type_primary.className} ${type_primary.variable}`}>
        <ThemeProvider>
          <DataCountryProvider>
            <Provider>
              <Header />
              {children}
            </Provider>
          </DataCountryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
