import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockCartItem from './mock';
import CartItem from '.';

describe('<CartItem />', () => {
  it('should render correctly', () => {
    render(<CartItem {...mockCartItem} />);

    expect(screen.getByText(/cheese/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/adicionar item/i)).toBeInTheDocument();
  });

  it('should call the add function when plus icon is clicked', () => {
    const addFunction = jest.fn();
    render(<CartItem {...mockCartItem} onAdd={addFunction} />);

    userEvent.click(screen.getByLabelText(/adicionar item/i));
    expect(addFunction).toBeCalledWith(mockCartItem.id);
  });
});
