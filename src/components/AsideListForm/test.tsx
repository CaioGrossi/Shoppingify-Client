import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import 'session.mock';

import AsideListForm from '.';

jest.mock('components/ItemForm', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ItemForm"></div>;
    }
  };
});

describe('<AsideListForm />', () => {
  it('should render ShoppingList by default', () => {
    render(<AsideListForm />);

    expect(screen.getByRole('heading', { name: /shopping list/i }));
  });

  it('should change to item form when "Add  item" button is clicked', () => {
    render(<AsideListForm />);

    const addItemButton = screen.getByRole('button', { name: 'Add item' });

    userEvent.click(addItemButton);

    expect(screen.getByTestId(/mock itemform/i)).toBeInTheDocument();
  });

  it('should open and close shopping list in small screeens', () => {
    const { container } = render(
      <div style={{ width: '850px' }}>
        <AsideListForm />
      </div>
    );

    // component AsideListForm
    const asideListForm = container.firstChild?.firstChild;

    expect(asideListForm).toHaveStyleRule('right', '-35.8rem', {
      media: '(max-width: 900px)'
    });
    expect(asideListForm).toHaveStyleRule('position', 'absolute', {
      media: '(max-width: 900px)'
    });

    const toggleButton = screen.getByTestId('open/close list');

    userEvent.click(toggleButton);

    expect(asideListForm).toHaveStyleRule('right', '-2.2rem', {
      media: '(max-width: 900px)'
    });
    expect(asideListForm).toHaveStyleRule('position', 'absolute', {
      media: '(max-width: 900px)'
    });
  });
});
