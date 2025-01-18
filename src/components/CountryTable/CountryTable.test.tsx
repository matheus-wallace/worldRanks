import { render, screen } from '@testing-library/react';
import CountryTableDataReciver from '.';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { mockCountryData } from '@/utils/mocks/countryData';

describe('CountryTable', () => {
  it('should render the skeleton in all table cells when is loading', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <CountryTableDataReciver data={mockCountryData} isLoading={true} error={null} />
      </ChakraProvider>,
    );

    const skeleton = screen.getAllByTestId('skeletonLoading');

    expect(skeleton).toHaveLength(10);
  });

  it('should render a title colums', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <CountryTableDataReciver data={mockCountryData} isLoading={false} error={null} />
      </ChakraProvider>,
    );

    expect(screen.getByText('Flag')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Area (km²)')).toBeInTheDocument();
    expect(screen.getByText('Region')).toBeInTheDocument();
  });

  it('should render a the country when data is avalabe', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <CountryTableDataReciver data={mockCountryData} isLoading={false} error={null} />
      </ChakraProvider>,
    );

    expect(screen.getByText('Brazil')).toBeInTheDocument();
    expect(screen.getByText('212559409')).toBeInTheDocument();
    expect(screen.getByText('8515767')).toBeInTheDocument();
    expect(screen.getByText('Americas')).toBeInTheDocument();
  });
});
