import AddNewItem from 'components/AddNewItem';
import Button from 'components/Button';
import ShoppingListItem from 'components/ShoppingListItem';
import TextField from 'components/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';

import api from 'services/api';
import { useShoppingList } from 'hooks/use-shoppinglist';
import { useState } from 'react';
import { useSession } from 'next-auth/client';

import * as S from './styles';
import { useRouter } from 'next/dist/client/router';

type ShoppingListProps = {
  onCreateItem: (state: boolean) => void;
};

const ShoppingList = ({ onCreateItem }: ShoppingListProps) => {
  const { items } = useShoppingList();
  const [listName, setListName] = useState('');
  const [session] = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const notifyError = (message: string) => toast.error(message);

  const notifySuccess = (message: string) => toast.success(message);

  const handleListSubmit = async () => {
    if (items.length <= 0) {
      notifyError('Put some items in your list!');
      return;
    }

    if (listName == '') {
      notifyError('Give a name to your list!');
      return;
    }

    try {
      await api.post(
        'shopping-list/create',
        {
          listName,
          items
        },
        {
          headers: {
            Authorization: `Bearer ${session?.jwt}`
          }
        }
      );

      notifySuccess('List saved!');
    } catch (error) {
      router.push('/sign-in');
    }
  };

  return (
    <S.Wrapper isOpen={isOpen}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: '1.6rem' }}
      />

      <S.Content>
        <S.ToggleListButton
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Open or Close list"
          data-testid="open/close list"
        >
          {isOpen ? <ArrowRight size={28} /> : <ArrowLeft size={28} />}
        </S.ToggleListButton>

        <AddNewItem onAdd={onCreateItem} />

        <h1>Shopping list</h1>
        <S.ItemsWrapper>
          {items.map((item) => (
            <ShoppingListItem
              key={item.id}
              id={item.id}
              amount={item.quantity}
              name={item.name}
            />
          ))}
        </S.ItemsWrapper>
      </S.Content>

      <S.Footer>
        <TextField
          placeholder="Enter a name"
          inputSize="small"
          name="list name"
          onInputChange={(value) => setListName(value)}
        />

        <Button onClick={handleListSubmit}>Save</Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default ShoppingList;
