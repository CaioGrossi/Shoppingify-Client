import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sidebar from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
  pathname: '/'
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const signOut = jest.spyOn(require('next-auth/client'), 'signOut');
const signOutMock = jest.fn();
signOut.mockImplementation(() => [signOutMock]);

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    render(<Sidebar />);

    expect(screen.getByTestId(/list icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/reset icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/graph icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/signout icon/i)).toBeInTheDocument();
  });

  it('should signOut function when signOut icon is clicked', () => {
    render(<Sidebar />);
    userEvent.click(screen.getByTestId(/signout icon/i));

    waitFor(() => {
      expect(signOutMock).toHaveBeenCalled();
    });
  });
});
