import { render, screen, waitFor } from '@testing-library/react';
import { useContextCountry } from '@/Context/DataContext';
import Home from '@/app/page';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

// Mock do contexto
jest.mock('../Context/DataContext', () => ({
  useContextCountry: jest.fn(),
}));

describe('Home Component', () => {
  it('should render the loading state initially', () => {
    (useContextCountry as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      loading: true,
      fetchData: jest.fn(),
    });

    render(
      <ChakraProvider value={defaultSystem}>
        <Home />
      </ChakraProvider>,
    );

    expect(screen.getByTestId('skeletonLoading')).toBeInTheDocument();
  });

  it('should render countries when data is available', async () => {
    (useContextCountry as jest.Mock).mockReturnValue({
      data: [
        { name: { common: 'Brasil' }, flag: '🇧🇷' },
        { name: { common: 'Canada' }, flag: '🇨🇦' },
      ],
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
      expect(screen.getByText('Brasil - 🇧🇷')).toBeInTheDocument();
      expect(screen.getByText('Canada - 🇨🇦')).toBeInTheDocument();
    });
  });

  it('should handle fetchData call if no data is available', () => {
    const fetchDataMock = jest.fn();

    (useContextCountry as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      loading: false,
      fetchData: fetchDataMock,
    });

    render(
      <ChakraProvider value={defaultSystem}>
        <Home />
      </ChakraProvider>,
    );
    expect(fetchDataMock).toHaveBeenCalledTimes(1);
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
});
