import { render, screen } from '@testing-library/react';

import Sidebar from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}));

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    render(<Sidebar />);

    expect(screen.getByTestId(/list icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/reset icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/graph icon/i)).toBeInTheDocument();
  });
});
