'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import useSWR from 'swr';

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  capital: string[];
  region: string;
  population: number;
  area: number;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
};

export type DataContextType = {
  data: Country[] | null;
  error: string | null;
  isLoading: boolean;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useContextCountry = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataCountry must be used within a DataCountryProvider');
  }
  return context;
};

type DataCountryProviderProps = {
  children: ReactNode;
};

export const DataCountryProvider = ({ children }: DataCountryProviderProps) => {
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Something went wrong :(');
    }
    const json = await response.json();
    return json;
  };

  const { data, error, isLoading } = useSWR(`https://restcountries.com/v3.1/all`, fetcher);

  const value = {
    data,
    error: error ? error.message : null,
    isLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
