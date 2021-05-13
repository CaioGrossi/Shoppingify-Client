import AddNewItem from 'components/AddNewItem';
import Button from 'components/Button';
import ShoppingListItem from 'components/ShoppingListItem';
import TextField from 'components/TextField';
import { toast } from 'react-toastify';

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
  const { items, clearList } = useShoppingList();
  const [listName, setListName] = useState('');
  const [session] = useSession();

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

      clearList();
      notifySuccess('List saved!');
    } catch (error) {
      router.push('/sign-in');
    }
  };

  return (
    <S.Wrapper>
      <S.Content>
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
