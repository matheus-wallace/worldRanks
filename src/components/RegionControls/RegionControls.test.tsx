import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import RegionControls from '.';

describe('Region controls', () => {
  beforeEach(() => {
    render(
      <ChakraProvider value={defaultSystem}>
        <RegionControls />
      </ChakraProvider>,
    );
  });

  it('shloud render the title Region', () => {
    const title = screen.getByText('Region');
    expect(title).toBeInTheDocument();
  });

  it('should render a list of filters button', () => {
    const buttons = screen.getAllByRole('button');

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
