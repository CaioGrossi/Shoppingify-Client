import { render, screen } from '@testing-library/react';

import Sidebar from '.';

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    render(<Sidebar />);

    expect(screen.getByTestId(/list icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/reset icon/i)).toBeInTheDocument();
    expect(screen.getByTestId(/graph icon/i)).toBeInTheDocument();
  });
});
