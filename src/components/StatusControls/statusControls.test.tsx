import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import StatusControl from '.';

describe('Status Controls', () => {
  beforeEach(() => {
    render(
      <ChakraProvider value={defaultSystem}>
        <StatusControl />
      </ChakraProvider>,
    );
  });

  it('should render the title correctly', () => {
    const title = screen.getByText('Status');

    expect(title).toBeInTheDocument();
  });

  it('should render two checkbox', () => {
    const checkboxs = screen.getAllByRole('checkbox');

    checkboxs.forEach((checkbox) => {
      expect(checkbox).toBeInTheDocument();
      expect(checkboxs).toHaveLength(2);
    });
  });
});
