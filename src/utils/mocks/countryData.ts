import { Country } from '@/Context/CountryContext';

export const mockCountryData: Country[] = [
  {
    name: {
      common: 'Brazil',
      official: 'Federative Republic of Brazil',
      nativeName: {
        por: {
          official: 'República Federativa do Brasil',
          common: 'Brasil',
        },
      },
    },
    flag: '🇧🇷',
    flags: {
      png: 'https://example.com/brazil.png',
      svg: 'https://example.com/brazil.svg',
      alt: 'Flag of Brazil',
    },
    capital: ['Brasília'],
    region: 'Americas',
    population: 212559409,
    area: 8515767,
    currencies: {
      BRL: {
        name: 'Brazilian real',
        symbol: 'R$',
      },
    },
  },
  {
    name: {
      common: 'Germany',
      official: 'Federal Republic of Germany',
      nativeName: {
        deu: {
          official: 'Bundesrepublik Deutschland',
          common: 'Deutschland',
        },
      },
    },
    flag: '🇩🇪',
    flags: {
      png: 'https://flagcdn.com/w320/de.png',
      svg: 'https://flagcdn.com/de.svg',
      alt: 'The flag of Germany is composed of three equal horizontal bands of black, red and gold.',
    },
    capital: ['Berlin'],
    region: 'Europe',
    area: 357114.0,
    population: 83240525,
    currencies: {
      EUR: {
        name: 'Euro',
        symbol: '€',
      },
    },
  },
];
