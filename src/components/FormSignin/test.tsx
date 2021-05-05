import { render, screen } from '@testing-library/react';

import FormSignin from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}));

describe('<FormSignin />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignin />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /signin now/i })
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });
});
