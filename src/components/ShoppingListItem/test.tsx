import { render, screen } from '@testing-library/react';
import mock from './mock';

import ShoppingListItem from '.';
import userEvent from '@testing-library/user-event';
import { customRender } from 'utils/test/test-utils';
import { ShoppingListContextDefaultValues } from 'hooks/use-shoppinglist';

describe('<ShoppingListItem />', () => {
  it('should render correctly', () => {
    render(<ShoppingListItem {...mock} />);

    expect(screen.getByText(/banana/i)).toBeInTheDocument();
    expect(screen.getByText(/3 pcs/i)).toBeInTheDocument();
  });

  it('should open controls when the amount is clicked', () => {
    render(<ShoppingListItem {...mock} />);

    userEvent.click(screen.getByText(/3 pcs/i));

    expect(screen.getByText(/3 pcs/i)).toBeInTheDocument();
    expect(screen.getByTestId(/trash-icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/minus-icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/plus-icon/i)).toBeInTheDocument();
  });

  it('should call onDelete function when trash icon is clicked', () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      onRemove: jest.fn()
    };

    customRender(<ShoppingListItem {...mock} />, { shoppinglistProviderProps });

    userEvent.click(screen.getByText(/3 pcs/i));
    userEvent.click(screen.getByTestId(/trash-icon/i));

    // 1 = id do Mock
    expect(shoppinglistProviderProps.onRemove).toHaveBeenCalledWith('1');
  });

  it('should call onIncrease function when plus icons is clicked', () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      isInList: () => false,
      onIncrease: jest.fn()
    };
    customRender(<ShoppingListItem {...mock} />, { shoppinglistProviderProps });

    userEvent.click(screen.getByText(/3 pcs/i));
    userEvent.click(screen.getByTestId(/plus-icon/i));

    // 1 = id do Mock
    expect(shoppinglistProviderProps.onIncrease).toHaveBeenCalledWith('1');
  });

  it('should call onDecrease function when minus icon is clicked', () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      isInList: () => false,
      onDecrease: jest.fn()
    };
    customRender(<ShoppingListItem {...mock} />, { shoppinglistProviderProps });

    userEvent.click(screen.getByText(/3 pcs/i));
    userEvent.click(screen.getByTestId(/minus-icon/i));

    // 1 = id do Mock
    expect(shoppinglistProviderProps.onDecrease).toHaveBeenCalledWith('1');
  });
});
