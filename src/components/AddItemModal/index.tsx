import Modal from 'components/Modal';
import { useShoppingList } from 'hooks/use-shoppinglist';
import CartItem, { CartItemProps } from 'components/CartItem';
import ShoppingListItem from 'components/ShoppingListItem';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import axios from 'axios';
import api from 'services/api';
import * as S from './styles';
import Button from 'components/Button';
import { useSession } from 'next-auth/client';

export type AddItemModalProps = {
  listId: string;
  isOpen: boolean;
  onCancel: () => void;
};

const AddItemModal = ({ isOpen, listId, onCancel }: AddItemModalProps) => {
  const { items, clearList } = useShoppingList();
  const [session] = useSession();
  const router = useRouter();

  const [allListItems, setAllListItems] = useState<CartItemProps[]>([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function getItems() {
      try {
        const response = await api.get(`item/all-not-in-list/${listId}`, {
          cancelToken: source.token
        });

        setAllListItems(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return null;
        } else {
          throw error;
        }
      }
    }
    getItems();

    return () => {
      source.cancel();
    };
  }, [listId]);

  const onCancelAddItems = () => {
    clearList();
    onCancel();
  };

  const onAddNewItems = async () => {
    try {
      await api.post(
        '/shopping-list/add-new-items',
        {
          listId,
          items
        },
        {
          headers: {
            Authorization: `Bearer ${session?.jwt}`
          }
        }
      );

      const response = await api.get(`item/all-not-in-list/${listId}`);
      setAllListItems(response.data);
      onCancelAddItems();
      router.replace(router.asPath);
    } catch (err) {
      router.push('/sign-in');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancelAddItems}>
      <S.Content>
        <S.ItemsWrapper>
          <S.AllItemsWrapper>
            <h2>All items</h2>

            <S.AllItems>
              {allListItems.length > 0 ? (
                allListItems.map((item) => (
                  <CartItem key={item?.id} id={item.id} name={item.name} />
                ))
              ) : (
                <p>You already have all items </p>
              )}
            </S.AllItems>
          </S.AllItemsWrapper>

          <S.ShoppingListItemsWrapper>
            <h2>Your new items</h2>

            <S.ShoppingListItems>
              {items.map((item) => (
                <ShoppingListItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  amount={item.quantity}
                />
              ))}
            </S.ShoppingListItems>
          </S.ShoppingListItemsWrapper>
        </S.ItemsWrapper>

        <S.ButtonWrapper>
          <Button minimal onClick={() => onCancelAddItems()}>
            Cancel
          </Button>
          <Button onClick={() => onAddNewItems()}>Add</Button>
        </S.ButtonWrapper>
      </S.Content>
    </Modal>
  );
};

export default AddItemModal;
