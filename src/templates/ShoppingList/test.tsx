import { screen, render } from '@testing-library/react';
import ShoppingList from 'templates/ShoppingList';
import { mockShoppingLits } from './mock';
import 'session.mock';
import userEvent from '@testing-library/user-event';

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock Base">{children}</div>;
  }
}));

jest.mock('components/ListItems', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock ListItems">{children}</div>;
  }
}));

describe('<ShoppingList />', () => {
  it('should render correctly', () => {
    render(<ShoppingList {...mockShoppingLits} />);

    expect(screen.getByText(/back/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: mockShoppingLits.name })
    ).toBeInTheDocument();

    expect(screen.getByText(/thu 13\.5\.2021/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock listitems/i)).toBeInTheDocument();
  });

  it('should show modal when delete button is clicked', () => {
    render(<ShoppingList {...mockShoppingLits} />);

    userEvent.click(screen.getByRole('button', { name: /delete/i }));

    expect(
      screen.getByText(/are you shure that you want to delete this list\?/i)
    ).toBeInTheDocument();
  });
});
