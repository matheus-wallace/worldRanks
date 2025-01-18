import React from 'react';
import { DataContextType } from '@/Context/CountryContext';
import { LoadingRowList } from '../LoadingSkeleton';
import { Table } from '@chakra-ui/react';

const CountryTableDataReciver = ({ data, isLoading }: DataContextType) => {
  return (
    <Table.Root data-testid="CountryTableContainer">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Flag</Table.ColumnHeader>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Population</Table.ColumnHeader>
          <Table.ColumnHeader>Area (km²)</Table.ColumnHeader>
          <Table.ColumnHeader>Region</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data?.map((country, index) => (
          <Table.Row key={index}>
            <Table.Cell>{isLoading ? <LoadingRowList /> : country.flag}</Table.Cell>
            <Table.Cell>{isLoading ? <LoadingRowList /> : country.name.common}</Table.Cell>
            <Table.Cell>{isLoading ? <LoadingRowList /> : country.population}</Table.Cell>
            <Table.Cell>{isLoading ? <LoadingRowList /> : country.area}</Table.Cell>
            <Table.Cell>{isLoading ? <LoadingRowList /> : country.region}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default CountryTableDataReciver;
