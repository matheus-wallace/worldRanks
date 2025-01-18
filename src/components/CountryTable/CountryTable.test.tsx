import { render, screen } from '@testing-library/react';
import CountryTableDataReciver from '.';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { mockCountryData } from '@/utils/mocks/countryData';

describe('CountryTable', () => {
  it('should render the skeleton when is loading', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <CountryTableDataReciver data={mockCountryData} isLoading={true} error={'errro'} />
      </ChakraProvider>,
    );
    const skeleton = screen.getAllByTestId('skeletonLoading');
    skeleton.forEach((skeleton) => {
      expect(skeleton).toBeInTheDocument();
    });
  });

  it('should render a title colums', () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <CountryTableDataReciver data={mockCountryData} isLoading={false} error={'No error'} />
      </ChakraProvider>,
    );

    expect(screen.getByText('Flag')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Area (km²)')).toBeInTheDocument();
    expect(screen.getByText('Region')).toBeInTheDocument();
  });
});
