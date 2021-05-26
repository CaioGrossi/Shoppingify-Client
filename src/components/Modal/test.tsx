import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './';

describe('<Modal />', () => {
  it('should render correctly', () => {
    const onCloseMock = jest.fn();

    render(
      <Modal onClose={onCloseMock} isOpen={false}>
        <h1>test</h1>
      </Modal>
    );

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();
  });

  it('should call onClose function when "X" is clicked', () => {
    const onCloseMock = jest.fn();

    const { container } = render(
      <Modal onClose={onCloseMock} isOpen={false}>
        <h1>test</h1>
      </Modal>
    );

    userEvent.click(screen.getByRole('button', { name: 'close modal' }));

    expect(onCloseMock).toHaveBeenCalled();

    const modal = container.firstChild;

    expect(modal).toHaveStyle('opacity: 0');
  });
});
