import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShoppingListContextDefaultValues } from 'hooks/use-shoppinglist';
import { customRender } from 'utils/test/test-utils';
import { itemsMock } from './mock';
import 'session.mock';

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

  it('should open and close shopping list in small screeens', () => {
    const { container } = render(
      <div style={{ width: '850px' }}>
        <ShoppingList />
      </div>
    );

    // component shoppingList
    const shoppingList = container.firstChild?.firstChild;

    expect(shoppingList).toHaveStyleRule('right', '-34rem', {
      media: '(max-width: 900px)'
    });

    const toggleButton = screen.getByTestId('open/close list');

    userEvent.click(toggleButton);

    expect(shoppingList).toHaveStyleRule('right', '-2.2rem', {
      media: '(max-width: 900px)'
    });
  });
});
