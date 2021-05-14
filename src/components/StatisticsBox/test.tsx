import { render, screen } from '@testing-library/react';

import StatisticsBox from '.';

import { statisticsMock } from './mock';

describe('<StatisticsBox />', () => {
  it('should render the heading and progress bar with orange color by default', () => {
    render(<StatisticsBox {...statisticsMock} />);

    expect(
      screen.getByRole('heading', { name: /top items/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole('progressbar')[0]).toHaveStyleRule(
      'background-color',
      '#f9a109',
      {
        modifier: '::-webkit-progress-value'
      }
    );
  });

  it('should render the heading and progress bar whith blue color', () => {
    render(<StatisticsBox {...statisticsMock} color="blue" />);

    expect(
      screen.getByRole('heading', { name: /top items/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole('progressbar')[0]).toHaveStyleRule(
      'background-color',
      '#56ccf2',
      {
        modifier: '::-webkit-progress-value'
      }
    );
  });

  it('should show message when 0 items is passed', () => {
    render(<StatisticsBox {...statisticsMock} items={[]} />);

    expect(
      screen.getByRole('heading', { name: /top items/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /you don`t have any statistics yet/i
      })
    ).toBeInTheDocument();
  });
});
