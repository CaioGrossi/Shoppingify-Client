import { render, screen, waitFor } from '@testing-library/react';
import 'session.mock';
import 'server.mock';
import { mock } from './mock';

import DeleteListModal from '.';
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push: push,
  query: '',
  asPath: '',
  route: '/'
}));

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

  it('should have open styles when isOpen is true', () => {
    const { container } = render(<DeleteListModal {...mock} isOpen={true} />);

    const modal = container.firstChild;

    expect(modal).toHaveStyle('opacity: 1');
  });

  it('should redirect to shoppinglists page when delete list with valid token', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
    const session = {
      jwt: 'valid token',
      user: { email: 'lorem@ipsum.com' }
    };
    useSession.mockImplementation(() => [session]);

    const cancelMock = jest.fn();
    render(<DeleteListModal {...mock} onCancel={cancelMock} />);

    userEvent.click(screen.getByRole('button', { name: /yes/i }));

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/shopping-lists');
    });
  });

  it('should redirect to sign-in page when delete list with invalid token', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
    const session = {
      jwt: 'invalid token',
      user: { email: 'lorem@ipsum.com' }
    };
    useSession.mockImplementation(() => [session]);

    const cancelMock = jest.fn();
    render(<DeleteListModal {...mock} onCancel={cancelMock} />);

    userEvent.click(screen.getByRole('button', { name: /yes/i }));

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/sign-in');
    });
  });
});
