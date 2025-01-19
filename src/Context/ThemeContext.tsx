'use client';
import React, { createContext, useContext } from 'react';
import { type_primary } from '@/utils/fonts/fonts';

export interface Theme {
  fonts: {
    type_primary: string;
  };
  fontSize: {
    small: string;
    smallxl: string;
    regular: string;
    large: string;
  };

  fontWeights: {
    medium: string;
    bold: string;
  };

  breakPoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };

  colors: {
    darkGray: string;
    darkSoftGray: string;
    blue: string;
    lightGray: string;
    withe: string;
  };
}

export interface ThemeContextProps {
  children: React.ReactNode;
}

export const theme: Theme = {
  fonts: {
    type_primary: type_primary.className,
  },

  fontSize: {
    small: '0.75rem',
    smallxl: '0.875rem',
    regular: '1rem',
    large: '25rem',
  },

  fontWeights: {
    medium: '600',
    bold: '700',
  },

  breakPoints: {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1280px',
  },

  colors: {
    darkGray: '#1B1D1F',
    darkSoftGray: '#282B30',
    blue: '#4E80EE',
    lightGray: '#6C727F',
    withe: '#D2D5DA',
  },
};

const ThemeContext = createContext<Theme>(theme);

export const useTheme = (): Theme => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
