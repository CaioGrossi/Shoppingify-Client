import { screen, render } from '@testing-library/react';
import Auth from './index';

describe('<Auth />', () => {
  it('should render correctly', () => {
    render(
      <Auth>
        <input type="text" />
      </Auth>
    );

    expect(
      screen.getByRole('heading', {
        name: /Shoppingify allows you take your shopping list wherever you go\./
      })
    ).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
