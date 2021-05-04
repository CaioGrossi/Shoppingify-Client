import { screen } from '@testing-library/react';
import { customRender } from 'utils/test/test-utils';
import userEvent from '@testing-library/user-event';
import mockCartItem from './mock';
import CartItem from '.';

import { ShoppingListContextDefaultValues } from 'hooks/use-shoppinglist';

describe('<CartItem />', () => {
  it('should render button to add item to list', () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      isInList: () => false,
      onAdd: jest.fn()
    };

    customRender(<CartItem {...mockCartItem} />, { shoppinglistProviderProps });
    expect(screen.getByText(/cheese/i)).toBeInTheDocument();

    const button = screen.getByLabelText(/adicionar item/i);

    userEvent.click(button);

    expect(shoppinglistProviderProps.onAdd).toHaveBeenCalledWith(
      mockCartItem.id,
      mockCartItem.name,
      1
    );
  });

  it('should render button to remove item from list', () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      isInList: () => true,
      onRemove: jest.fn()
    };

    customRender(<CartItem {...mockCartItem} />, { shoppinglistProviderProps });
    expect(screen.getByText(/cheese/i)).toBeInTheDocument();

    const button = screen.getByLabelText(/remover item/i);

    userEvent.click(button);

    expect(shoppinglistProviderProps.onRemove).toHaveBeenCalledWith(
      mockCartItem.id
    );
  });
});
