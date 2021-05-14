import { screen, render } from '@testing-library/react';

import { cartItemMock } from 'components/ListItems/mock';

import Home from './index';

const props = {
  itemsSections: cartItemMock
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock Base">{children}</div>;
  }
}));

jest.mock('components/ListItems', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock ListItems"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should render searchBar, base and itemsList', () => {
    render(<Home {...props} />);

    expect(
      screen.getByRole('heading', {
        name: /Shoppingfy allows you take your shooping list wherever you go\./
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId('mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('mock ListItems')).toBeInTheDocument();
  });
});
