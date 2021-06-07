import { render, screen } from '@testing-library/react';

import { mock } from './mock';

import CheckListItem from '.';
import userEvent from '@testing-library/user-event';

describe('<CheckListItem />', () => {
  it('should render name, quantity and checkbox input', () => {
    render(<CheckListItem {...mock} />);

    expect(screen.getByLabelText(/avocado/i)).toBeInTheDocument();

    expect(screen.getByText(/4 pcs/i)).toBeInTheDocument();

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should call onCheck function when checkbox change', () => {
    const onCheckMock = jest.fn();
    render(<CheckListItem {...mock} onCheck={onCheckMock} />);

    userEvent.click(screen.getByRole('checkbox'));

    expect(onCheckMock).toHaveBeenCalledWith('1');
  });

  it('should call onRemove function when trash button is clicked', () => {
    const onRemoveMock = jest.fn();
    render(<CheckListItem {...mock} onRemove={onRemoveMock} />);

    userEvent.click(screen.getByRole('button'));
    expect(onRemoveMock).toHaveBeenCalledWith('1');
  });
});
