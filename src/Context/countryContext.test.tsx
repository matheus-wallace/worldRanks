import React from 'react';
import { renderHook } from '@testing-library/react';
import { SWRConfig } from 'swr';
import { DataCountryProvider, useContextCountry } from './CountryContext';
import useSWR from 'swr';
import { mockCountryData } from '@/utils/mocks/countryData';

jest.mock('swr', () => ({
  __esModule: true,
  default: jest.fn(),
  SWRConfig: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('DataCountryProvider', () => {
  it('should handle loading state', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataCountryProvider>{children}</DataCountryProvider>
    );

    const { result } = renderHook(() => useContextCountry(), { wrapper });

    expect(result.current.data).toBeNull();
    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(true);
  });

  it('should handle error state', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      error: 'Failed to fetch',
      isLoading: false,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataCountryProvider>{children}</DataCountryProvider>
    );

    const { result } = renderHook(() => useContextCountry(), { wrapper });

    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('Failed to fetch');
  });

  it('should provide data from SWR', () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: mockCountryData,
      error: null,
      isLoading: false,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SWRConfig value={{ dedupingInterval: 0 }}>
        <DataCountryProvider>{children}</DataCountryProvider>
      </SWRConfig>
    );

    const { result } = renderHook(() => useContextCountry(), { wrapper });

    expect(result.current.data).toEqual(mockCountryData);
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });
});
