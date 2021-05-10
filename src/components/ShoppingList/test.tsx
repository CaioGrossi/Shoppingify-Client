import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShoppingListContextDefaultValues } from 'hooks/use-shoppinglist';
import { customRender } from 'utils/test/test-utils';
import { itemsMock } from './mock';
import { ToastContainer } from 'react-toastify';
import 'session.mock';
import 'server.mock';

import ShoppingList from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();

useRouter.mockImplementation(() => ({
  push: push,
  query: '',
  asPath: '',
  route: '/'
}));

describe('<ShoppingList />', () => {
  it('should render correctly the items', () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      items: itemsMock
    };

    customRender(<ShoppingList />, { shoppinglistProviderProps });

    expect(screen.getAllByText(/cake/i)).toHaveLength(7);
    expect(screen.getAllByText(/bread/i)).toHaveLength(7);
  });

  it('should open and close shopping list in small screeens', () => {
    const { container } = render(
      <div style={{ width: '850px' }}>
        <ShoppingList />
      </div>
    );

    // component shoppingList
    const shoppingList = container.firstChild?.firstChild;

    expect(shoppingList).toHaveStyleRule('right', '-34rem', {
      media: '(max-width: 900px)'
    });
    expect(shoppingList).toHaveStyleRule('position', 'absolute', {
      media: '(max-width: 900px)'
    });

    const toggleButton = screen.getByTestId('open/close list');

    userEvent.click(toggleButton);

    expect(shoppingList).toHaveStyleRule('right', '-2.2rem', {
      media: '(max-width: 900px)'
    });
    expect(shoppingList).toHaveStyleRule('position', 'absolute', {
      media: '(max-width: 900px)'
    });
  });

  it('should notify if tries create list with 0 items', async () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues
    };

    customRender(
      <div>
        <ToastContainer />
        <ShoppingList />
      </div>,
      { shoppinglistProviderProps }
    );

    const saveListButton = screen.getByRole('button', { name: /save/i });

    userEvent.click(saveListButton);

    expect(
      await screen.findByText(/put some items in your list!/i)
    ).toBeInTheDocument();
  });

  it('should notify if tries create list wiht items but no name', async () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      items: itemsMock
    };

    customRender(
      <div>
        <ToastContainer />
        <ShoppingList />
      </div>,
      { shoppinglistProviderProps }
    );

    const saveListButton = screen.getByRole('button', { name: /save/i });

    userEvent.click(saveListButton);

    expect(
      await screen.findByText(/give a name to your list!/i)
    ).toBeInTheDocument();
  });

  it('should notify when create the list with valid token', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
    const session = {
      jwt: 'valid token',
      user: { email: 'lorem@ipsum.com' }
    };
    useSession.mockImplementation(() => [session]);

    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      items: itemsMock
    };

    customRender(
      <div>
        <ToastContainer />
        <ShoppingList />
      </div>,
      { shoppinglistProviderProps }
    );

    const saveListButton = screen.getByRole('button', { name: /save/i });
    const nameListInput = screen.getByPlaceholderText('Enter a name');

    userEvent.type(nameListInput, 'List name');

    userEvent.click(saveListButton);

    expect(await screen.findByText(/list saved!/i)).toBeInTheDocument();
  });

  it('should redirect user to sign-in page when tries to create list with invalid token', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
    const session = {
      jwt: 'invalid token',
      user: { email: 'lorem@ipsum.com' }
    };
    useSession.mockImplementation(() => [session]);

    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      items: itemsMock
    };

    customRender(
      <div>
        <ToastContainer />
        <ShoppingList />
      </div>,
      { shoppinglistProviderProps }
    );

    const saveListButton = screen.getByRole('button', { name: /save/i });
    const nameListInput = screen.getByPlaceholderText('Enter a name');

    userEvent.type(nameListInput, 'List name');

    userEvent.click(saveListButton);

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/sign-in');
    });
  });
});
