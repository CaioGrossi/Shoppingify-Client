import { screen, render } from '@testing-library/react';
import Base from '.';

jest.mock('components/Sidebar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Sidebar"></div>;
    }
  };
});

jest.mock('components/AsideListForm', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock AsideListForm"></div>;
    }
  };
});

describe('<Base />', () => {
  it('should render the sidebar, shopping list and the children', () => {
    render(
      <Base>
        <h1>Conteudo</h1>
      </Base>
    );

    expect(screen.getByTestId(/mock sidebar/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock asidelistform/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /conteudo/i })
    ).toBeInTheDocument();
  });
});
