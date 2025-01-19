'use client';
import { useContextCountry } from '@/Context/CountryContext';
import './global.css';
import Error from '@/components/Error';
import { CountrysFilterContainer, CountrysTableContainer, ListContainer } from './styles';
import { Center } from '@chakra-ui/react';
import CountryTableDataReciver from '@/components/CountryTable';
import FilterControls from '@/components/FilterControls';

export default function Home() {
  const { data, error, isLoading } = useContextCountry();
  return (
    <main>
      <Center>
        {error && <Error>{error}</Error>}
        {(data || isLoading) && (
          <ListContainer>
            <CountrysFilterContainer>
              <FilterControls />
            </CountrysFilterContainer>

            <CountrysTableContainer>
              <CountryTableDataReciver data={data} isLoading={isLoading} error={error} />
            </CountrysTableContainer>
          </ListContainer>
        )}
      </Center>
    </main>
  );
}
