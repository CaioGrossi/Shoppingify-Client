import { screen } from '@testing-library/react';
import { ShoppingListContextDefaultValues } from 'hooks/use-shoppinglist';
import { customRender } from 'utils/test/test-utils';
import { itemsMock } from './mock';

import ShoppingList from '.';

describe('<ShoppingList />', () => {
  it('should render correctly the items', () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      items: itemsMock
    };

    customRender(<ShoppingList />, { shoppinglistProviderProps });

    expect(screen.getAllByText(/cake/i)).toHaveLength(7);
    expect(screen.getAllByText(/bread/i)).toHaveLength(7);
  });
});
