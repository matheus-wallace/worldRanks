'use client';
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import useSWR from 'swr';

type Country = {
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
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
};

type DataContextType = {
  data: Country[] | null;
  error: string | null;
  loading: boolean;
  fetchData: () => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useContextCountry = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data: fetchedData, error: swrError } = useSWR(data ? `https://restcountries.com/v3.1/all` : null, fetcher);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetch(`https://restcountries.com/v3.1/all`);
      const resultData = await result.json();
      setData(resultData);
    } catch (err) {
      setError(`Failed to fetch data ${err}`);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    data: fetchedData || data,
    error: swrError?.message || error,
    loading,
    fetchData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
