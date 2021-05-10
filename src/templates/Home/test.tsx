import { screen, render } from '@testing-library/react';

import { itemsSectionMock } from 'components/ItemsList/mock';

import Home from './index';

const props = {
  itemsSections: itemsSectionMock
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock Base">{children}</div>;
  }
}));

jest.mock('components/ItemsList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock ItemsList"></div>;
    }
  };
});

jest.mock('components/SearchBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock searchBar"></div>;
    }
  };
});

describe('<Home />', () => {
  it('should searchBar, base and itemsList', () => {
    render(<Home {...props} />);

    expect(
      screen.getByRole('heading', {
        name: /Shoppingfy allows you take your shooping list wherever you go\./
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId('mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('mock ItemsList')).toBeInTheDocument();
    expect(screen.getByTestId('mock searchBar')).toBeInTheDocument();
  });
});
