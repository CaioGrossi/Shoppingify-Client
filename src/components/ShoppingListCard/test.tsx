import { render, screen } from '@testing-library/react';

import { shoppingListCardMock } from './mock';

import ShoppingListCard from '.';

describe('<ShoppingListCard />', () => {
  it('should render correctly and with "open" status styles', () => {
    render(<ShoppingListCard {...shoppingListCardMock} />);

    expect(
      screen.getByRole('heading', { name: /lista de compras/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/mon 24\.8\.2020/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/my-lists/1');
    expect(screen.getByText(/open/i)).toBeInTheDocument();
    expect(screen.getByText(/open/i)).toHaveStyle({
      color: '#56ccf2',
      border: '1px solid #56ccf2'
    });
  });

  it('should render with completed styles', () => {
    render(<ShoppingListCard {...shoppingListCardMock} status="completed" />);
    expect(
      screen.getByRole('heading', { name: /lista de compras/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/mon 24\.8\.2020/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/my-lists/1');
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toHaveStyle({
      color: 'green',
      border: '1px solid green'
    });
  });
});
