'use client';
import { useContextCountry } from '@/context/DataContext';
import './global.css';
import { useEffect } from 'react';

export default function Home() {
  const { data, error, loading, fetchData } = useContextCountry();

  useEffect(() => {
    if (!data) {
      fetchData();
    }

    if (data && !error && !loading) {
      console.log(data);
    }
  }, [data, error, loading, fetchData]);

  return (
    <main>
      {loading && <p>Loading...</p>}
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
