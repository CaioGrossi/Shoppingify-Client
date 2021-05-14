import { screen, render } from '@testing-library/react';

import { itemsSections } from './mock';

import ShoppingLists from '.';

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock Base">{children}</div>;
  }
}));

jest.mock('components/ShoppingListCard', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock ShoppingListCard">{children}</div>;
  }
}));

describe('<ShoppingLists />', () => {
  it('should render the lists', () => {
    render(<ShoppingLists listsSection={itemsSections} />);

    expect(
      screen.getByRole('heading', { name: /shopping history/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /today/i })).toBeInTheDocument();
    expect(screen.getAllByTestId(/mock shoppinglistcard/i)).toHaveLength(3);
  });

  it('should render message when 0 items is passed', () => {
    render(<ShoppingLists listsSection={[]} />);

    expect(
      screen.getByRole('heading', { name: /shopping history/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /you don`t have any lists yet/i })
    ).toBeInTheDocument();
  });
});
