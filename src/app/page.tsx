'use client';
import { useContextCountry } from '@/Context/DataContext';
import './global.css';
import { useEffect } from 'react';
import { LoadingRowList } from '@/components/LoadingSkeleton';
import Error from '@/components/Error';

export default function Home() {
  const { data, error, loading, fetchData } = useContextCountry();

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, [data, fetchData]);

  return (
    <main>
      {loading && (!error || !data) && <LoadingRowList />}
      {error && <Error>{error}</Error>}
      <ul>
        {data &&
          data.map((country, index) => (
            <li key={index}>
              {country.name.common} - {country.flag}
            </li>
          ))}
      </ul>
    </main>
  );
}
