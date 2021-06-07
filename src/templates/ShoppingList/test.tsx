import { screen, render } from '@testing-library/react';
import ShoppingList from 'templates/ShoppingList';
import { mockShoppingLits } from './mock';
import 'session.mock';

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

jest.mock('components/DeleteListModal', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock deleteListModal">{children}</div>;
  }
}));

jest.mock('components/AddItemModal', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock addItemModal">{children}</div>;
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

    expect(screen.getByTestId(/mock deletelistmodal/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock addItemModal/i)).toBeInTheDocument();
  });
});
