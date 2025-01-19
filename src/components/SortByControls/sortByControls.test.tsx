import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FilterControls from '.';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

describe('Filter Controls', () => {
  it('Should render correctly a select value to sort values from table', async () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <FilterControls />
      </ChakraProvider>,
    );

    await waitFor(() => {
      const sort = screen.getByText('Sort By');
      expect(sort).toBeInTheDocument();

      const selectTrigger = screen.getByTestId('filterTableList');
      expect(selectTrigger).toBeInTheDocument();

      fireEvent.mouseDown(selectTrigger);

      const options = screen.getAllByTestId('selectItem');

      options.forEach((option) => {
        expect(option).toBeInTheDocument();
        fireEvent.click(option);
        const { textContent } = option;
        const selectedValue = screen.getByTestId('selectValue');
        expect(selectedValue).toHaveTextContent(textContent || '');
      });
    });
  });
});
