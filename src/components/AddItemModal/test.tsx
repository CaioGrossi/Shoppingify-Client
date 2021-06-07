import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itemsMock } from 'components/ShoppingList/mock';
import { ShoppingListContextDefaultValues } from 'hooks/use-shoppinglist';
import { act } from 'react-dom/test-utils';
import { customRender } from 'utils/test/test-utils';

import AddItemModal from '.';

import 'server.mock';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
const push = jest.fn();
const replace = jest.fn();

useRouter.mockImplementation(() => ({
  push: push,
  query: '',
  asPath: '',
  route: '/',
  replace: replace
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
const session = {
  jwt: 'valid token',
  user: { email: 'lorem@ipsum.com' }
};
useSession.mockImplementation(() => [session]);

describe('<AddItemModal />', () => {
  it('should render correctly', async () => {
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      items: itemsMock.slice(0, 4)
    };

    await act(async () => {
      customRender(
        <AddItemModal isOpen={true} listId="12" onCancel={jest.fn()} />,
        { shoppinglistProviderProps }
      );
    });

    expect(
      screen.getByRole('heading', { name: /all items/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /your new items/i })
    ).toBeInTheDocument();

    // itens publicos
    expect(await screen.findByText(/banana/i)).toBeInTheDocument();
    expect(await screen.findByText(/milk/i)).toBeInTheDocument();
    expect(await screen.findByText(/meat/i)).toBeInTheDocument();

    //itens da lista
    expect(screen.getAllByText(/cake/i)).toHaveLength(2);
    expect(screen.getAllByText(/bread/i)).toHaveLength(2);

    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('should add items to the list with valid token', async () => {
    const cancelMock = jest.fn();
    const clearListMock = jest.fn();
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      clearList: clearListMock,
      items: itemsMock.slice(0, 4)
    };

    await act(async () => {
      customRender(
        <AddItemModal isOpen={true} listId="12" onCancel={cancelMock} />,
        { shoppinglistProviderProps }
      );
    });

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    waitFor(() => {
      expect(cancelMock).toHaveBeenCalled();
    });

    waitFor(() => {
      expect(clearListMock).toHaveBeenCalled();
    });

    waitFor(() => {
      expect(replace).toHaveBeenCalled();
    });
  });

  it('should cancel add new items', async () => {
    const cancelMock = jest.fn();
    const clearListMock = jest.fn();
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      clearList: clearListMock,
      items: itemsMock.slice(0, 4)
    };

    await act(async () => {
      customRender(
        <AddItemModal isOpen={true} listId="12" onCancel={cancelMock} />,
        { shoppinglistProviderProps }
      );
    });

    userEvent.click(screen.getByRole('button', { name: /cancel/i }));

    waitFor(() => {
      expect(cancelMock).toHaveBeenCalled();
    });

    waitFor(() => {
      expect(clearListMock).toHaveBeenCalled();
    });
  });

  it('should try to add items to list with invalid token', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
    const session = {
      jwt: 'invalid token',
      user: { email: 'lorem@ipsum.com' }
    };
    useSession.mockImplementation(() => [session]);

    const cancelMock = jest.fn();
    const clearListMock = jest.fn();
    const shoppinglistProviderProps = {
      ...ShoppingListContextDefaultValues,
      clearList: clearListMock,
      items: itemsMock.slice(0, 4)
    };

    await act(async () => {
      customRender(
        <AddItemModal isOpen={true} listId="12" onCancel={cancelMock} />,
        { shoppinglistProviderProps }
      );
    });

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/sign-in');
    });
  });
});
