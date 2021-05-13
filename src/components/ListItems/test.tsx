import { render, screen } from '@testing-library/react';
import { cartItemMock, checkListMock } from './mock';
import ItemsList from '.';

jest.mock('components/CartItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock CartItem">{children}</div>;
  }
}));

jest.mock('components/CheckListItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock CheckListItem">{children}</div>;
  }
}));

describe('<ItemsList />', () => {
  it('should list correct the itemsSections with cartItems', () => {
    render(<ItemsList itemsSections={cartItemMock} />);

    // headings
    expect(screen.getByRole('heading', { name: /derivados vaca/i }));
    expect(screen.getByRole('heading', { name: /limpeza/i }));

    // items
    expect(screen.getAllByTestId(/mock cartitem/i)).toHaveLength(6);
  });

  it('should list correct itemsSections with checkListItems', () => {
    render(<ItemsList itemsSections={checkListMock} checkList />);

    expect(screen.getByRole('heading', { name: /derivados vaca/i }));
    expect(screen.getByRole('heading', { name: /limpeza/i }));

    expect(screen.getAllByTestId(/mock checklistitem/i)).toHaveLength(6);
  });
});
