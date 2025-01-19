import { render, screen, waitFor } from '@testing-library/react';
import { useContextCountry } from '@/Context/CountryContext';
import Home from '@/app/page';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { mockCountryData } from '@/utils/mocks/countryData';

jest.mock('../Context/CountryContext', () => ({
  useContextCountry: jest.fn(),
}));

describe('Home Component', () => {
  it('should render countries when data is available', async () => {
    (useContextCountry as jest.Mock).mockReturnValue({
      data: mockCountryData,
      error: null,
      loading: false,
    });

    render(
      <ChakraProvider value={defaultSystem}>
        <Home />
      </ChakraProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Brazil')).toBeInTheDocument();
      expect(screen.getByText('212559409')).toBeInTheDocument();
      expect(screen.getByText('8515767')).toBeInTheDocument();
    });
  });

  it('should render error component when there is an error', () => {
    (useContextCountry as jest.Mock).mockReturnValue({
      data: null,
      error: 'Network error',
      loading: false,
      fetchData: jest.fn(),
    });

    render(
      <ChakraProvider value={defaultSystem}>
        <Home />
      </ChakraProvider>,
    );

    expect(screen.getByText('Network error')).toBeInTheDocument();
  });

  it('Render the strctured components', async () => {
    (useContextCountry as jest.Mock).mockReturnValue({
      data: mockCountryData,
      error: null,
      loading: false,
      fetchData: jest.fn(),
    });

    render(
      <ChakraProvider value={defaultSystem}>
        <Home />
      </ChakraProvider>,
    );

    await waitFor(() => {
      const articles = screen.getAllByRole('article');

      articles.forEach((article) => {
        expect(article).toBeInTheDocument();
      });
    });
  });
});
