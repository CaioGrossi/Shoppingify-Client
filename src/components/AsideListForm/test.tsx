import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import 'session.mock';

import AsideListForm from '.';

jest.mock('components/ItemForm', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ItemForm"></div>;
    }
  };
});

describe('<AsideListForm />', () => {
  it('should render ShoppingList by default', () => {
    render(<AsideListForm />);

    expect(screen.getByRole('heading', { name: /shopping list/i }));
  });

  it('should change to item form when "Add  item" button is clicked', () => {
    render(<AsideListForm />);

    const addItemButton = screen.getByRole('button', { name: 'Add item' });

    userEvent.click(addItemButton);

    expect(screen.getByTestId(/mock itemform/i)).toBeInTheDocument();
  });
});
