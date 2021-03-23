import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddNewItem from '.';

describe('<AddNewItem />', () => {
  it('should render correctly', () => {
    const onAdd = jest.fn();
    render(<AddNewItem onAdd={onAdd} />);

    expect(
      screen.getByText(/didn`t find what you need\?/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add item/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /wine/i })).toBeInTheDocument();
  });

  it('should call onAdd function when add new item button is clicked', () => {
    const onAdd = jest.fn();
    render(<AddNewItem onAdd={onAdd} />);

    userEvent.click(screen.getByRole('button', { name: /add item/i }));

    expect(onAdd).toBeCalled();
  });
});
