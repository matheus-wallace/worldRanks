import React from 'react';
import { DataContextType } from '@/Context/CountryContext';
import { FlagSkeleton, LoadingRow } from '../LoadingSkeleton';
import { Table } from '@chakra-ui/react';
import { useTheme } from '@/Context/ThemeContext';

const CountryTableDataReciver = ({ data, isLoading }: DataContextType) => {
  const { fontSize } = useTheme();
  return (
    <Table.Root data-testid="CountryTableContainer" size="lg">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader fontSize={fontSize.regular}>Flag</Table.ColumnHeader>
          <Table.ColumnHeader fontSize={fontSize.regular}>Name</Table.ColumnHeader>
          <Table.ColumnHeader fontSize={fontSize.regular}>Population</Table.ColumnHeader>
          <Table.ColumnHeader fontSize={fontSize.regular}>Area (km²)</Table.ColumnHeader>
          <Table.ColumnHeader fontSize={fontSize.regular}>Region</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data?.map((country, index) => (
          <Table.Row key={index} padding="1rem">
            <Table.Cell fontSize={fontSize.large} paddingY="1rem">
              {isLoading ? <FlagSkeleton /> : country.flag}
            </Table.Cell>
            <Table.Cell fontSize={fontSize.regular} paddingY="1rem">
              {isLoading ? <LoadingRow /> : country.name.common}
            </Table.Cell>
            <Table.Cell fontSize={fontSize.regular} paddingY="1rem">
              {isLoading ? <LoadingRow /> : country.population}
            </Table.Cell>
            <Table.Cell fontSize={fontSize.regular} paddingY="1rem">
              {isLoading ? <LoadingRow /> : country.area}
            </Table.Cell>
            <Table.Cell fontSize={fontSize.regular} paddingY="1rem">
              {isLoading ? <LoadingRow /> : country.region}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default CountryTableDataReciver;
