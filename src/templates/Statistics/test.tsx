import { screen, render } from '@testing-library/react';

import Statistics from '.';

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock Base">{children}</div>;
  }
}));

jest.mock('components/StatisticsBox', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock StatisticsBox">{children}</div>;
  }
}));

describe('<Statistics />', () => {
  it('should render correctly', () => {
    render(<Statistics topCategories={[]} topItems={[]} />);

    expect(screen.getByTestId(/mock base/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/mock statisticsbox/i)).toHaveLength(2);
  });
});
