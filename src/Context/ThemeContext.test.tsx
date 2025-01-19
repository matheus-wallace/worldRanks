import { renderHook } from '@testing-library/react';
import React from 'react';
import { theme, ThemeProvider, useTheme } from './ThemeContext';

describe('ThemeContext', () => {
  it('Should return a object with the theme', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <ThemeProvider>{children}</ThemeProvider>;

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current).toEqual(theme);
  });
});
