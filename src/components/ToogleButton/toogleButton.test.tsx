import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { fireEvent, render, screen } from '@testing-library/react';
import ToogleButton from '.';
import { rgbToHex } from '@/utils/functions/rgbToExa';

describe('Toogle Button', () => {
  beforeEach(() => {
    render(
      <ChakraProvider value={defaultSystem}>
        <ToogleButton text="Americas" />
      </ChakraProvider>,
    );
  });

  it('sholud render a toogle button', () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should change the color when click', () => {
    const button = screen.getByRole('button');

    fireEvent.click(button);
    const updatedColor = rgbToHex(window.getComputedStyle(button).backgroundColor);

    expect(updatedColor).toBe('#D2D5DA');
  });
});
