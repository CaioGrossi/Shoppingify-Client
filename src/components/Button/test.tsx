import { render, screen } from '@testing-library/react';

import Button from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>save</Button>);

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with 100% size when fullWidth is passed', () => {
    render(<Button fullWidth>save</Button>);

    expect(screen.getByRole('button', { name: /save/i })).toHaveStyleRule(
      'width',
      '100%'
    );
  });

  it('should render with none background when minimal is passed', () => {
    render(<Button minimal>save</Button>);

    expect(screen.getByRole('button', { name: /save/i })).toHaveStyleRule(
      'background',
      'none'
    );
  });
});
