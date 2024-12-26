import { renderHook, act } from '@testing-library/react';
import { DataCountryProvider, useContextCountry } from '@/Context/DataContext';
import React from 'react';

describe('DataContext', () => {
  it('should provide initial states correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataCountryProvider>{children}</DataCountryProvider>
    );

    const { result } = renderHook(() => useContextCountry(), { wrapper });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it('should handle fetchData correctly', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataCountryProvider>{children}</DataCountryProvider>
    );

    const { result } = renderHook(() => useContextCountry(), { wrapper });

    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([{ name: { common: 'Brasil' }, flag: '🇧🇷' }]),
    });

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toEqual([{ name: { common: 'Brasil' }, flag: '🇧🇷' }]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle errors correctly', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <DataCountryProvider>{children}</DataCountryProvider>
    );

    const { result } = renderHook(() => useContextCountry(), { wrapper });

    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('Failed to fetch data Error: Network error');
  });
});
