'use client';
import { useContextCountry } from '@/Context/CountryContext';
import './global.css';
import Error from '@/components/Error';
import { CountrysFilterContainer, CountrysTableContainer, ListContainer } from './styles';
import { Center } from '@chakra-ui/react';
import CountryTableDataReciver from '@/components/CountryTable';

export default function Home() {
  const { data, error, isLoading } = useContextCountry();

  return (
    <main>
      <Center>
        {error && <Error>{error}</Error>}
        {(data || isLoading) && (
          <ListContainer>
            <CountrysFilterContainer>
              <p>Test filters</p>
              <p>Test filters</p>
              <p>Test filters</p>
              <p>Test filters</p>
              <p>Test filters</p>
              <p>Test filters</p>
            </CountrysFilterContainer>

            <CountrysTableContainer>
              <CountryTableDataReciver data={data} loading={isLoading} />
            </CountrysTableContainer>
          </ListContainer>
        )}
      </Center>
    </main>
  );
}
