import { render, screen } from '@testing-library/react';

import FormSignup from '.';

describe('<FormSignup />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignup />);

    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/last name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /signup now/i })
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });
});
