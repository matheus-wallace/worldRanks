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

global.fetch = jest.fn();

describe('DataCountryProvider', () => {
  it('should loading when is fetching', () => {
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

  it('should handle error when useSWR returns an error', () => {
    (useSWR as jest.Mock).mockReturnValueOnce({
      data: null,
      error: new Error('Something went wrong :('),
      isLoading: false,
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataCountryProvider>{children}</DataCountryProvider>
    );

    const { result } = renderHook(() => useContextCountry(), { wrapper });

    expect(result.current.error).toEqual('Something went wrong :(');
    expect(result.current.data).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });
});
