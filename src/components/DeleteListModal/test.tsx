import { render, screen } from '@testing-library/react';

import { mock } from './mock';

import DeleteListModal from '.';
import userEvent from '@testing-library/user-event';

describe('<DeleteListModal />', () => {
  it('should render correctly', () => {
    render(<DeleteListModal {...mock} />);

    expect(
      screen.getByRole('heading', {
        name: /are you shure that you want to delete this list\?/i
      })
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('should call onCancel function when cancel button is clicked', () => {
    const cancelMock = jest.fn();
    render(<DeleteListModal {...mock} onCancel={cancelMock} />);

    userEvent.click(screen.getByRole('button', { name: /cancel/i }));

    expect(cancelMock).toHaveBeenCalled();
  });

  it('should call onConfirm function when yes button is clicked', () => {
    const confirmMock = jest.fn();
    render(<DeleteListModal {...mock} onCancel={confirmMock} />);

    userEvent.click(screen.getByRole('button', { name: /yes/i }));

    expect(confirmMock).toHaveBeenCalled();
  });

  it('should have open styles when isOpen is true', () => {
    const { container } = render(<DeleteListModal {...mock} isOpen={true} />);

    const modal = container.firstChild;

    expect(modal).toHaveStyle('opacity: 1');
  });
});
