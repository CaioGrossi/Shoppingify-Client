import { CategoryItemsSections } from 'components/ListItems';
import ListItems from 'components/ListItems';
import Base from 'templates/Base';
import DeleteListModal from 'components/DeleteListModal';
import AddItemModal from 'components/AddItemModal';

import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { Calendar4Range } from '@styled-icons/bootstrap/Calendar4Range';

import api from 'services/api';
import Link from 'next/link';
import { formatDate } from 'utils/mappers';
import { useSession } from 'next-auth/client';

import Button from 'components/Button';
import { useState } from 'react';
import * as S from './styles';
import router from 'next/dist/client/router';

export type ShoppingListProps = {
  id: string;
  name: string;
  date: string;
  itemsSections: CategoryItemsSections[];
};

const ShoppingList = ({ id, name, date, itemsSections }: ShoppingListProps) => {
  const [session] = useSession();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [ísAddItemModalOpen, setIsAddModalOpen] = useState(false);

  const onCheckItem = async (itemId: string) => {
    await api.post(
      'shooping-list-item/check-item',
      {
        itemId: itemId,
        listId: id
      },
      {
        headers: {
          Authorization: `Bearer ${session?.jwt}`
        }
      }
    );
  };

  const onRemoveItem = async (itemId: string) => {
    await api.post(
      'shooping-list-item/remove-item',
      {
        itemId: itemId,
        listId: id
      },
      {
        headers: {
          Authorization: `Bearer ${session?.jwt}`
        }
      }
    );

    router.replace(router.asPath);
  };

  return (
    <Base>
      <S.Wrapper>
        <S.Back>
          <Link href="/shopping-lists">
            <a>
              <ArrowLeft color="#F9A109" size={20} />
              <span>back</span>
            </a>
          </Link>
        </S.Back>
        <h1>{name}</h1>

        <S.Date>
          <Calendar4Range size={20} />
          <span>{formatDate(new Date(date))}</span>
        </S.Date>

        <ListItems
          checkList
          itemsSections={itemsSections}
          onCheck={onCheckItem}
          onRemove={onRemoveItem}
        />

        <S.ButtonWrapper>
          <Button color="red" onClick={() => setIsDeleteModalOpen(true)}>
            Delete
          </Button>

          <Button onClick={() => setIsAddModalOpen(true)}>Add</Button>
        </S.ButtonWrapper>

        <DeleteListModal
          listId={id}
          isOpen={isDeleteModalOpen}
          onCancel={() => setIsDeleteModalOpen(false)}
        />

        <AddItemModal
          listId={id}
          isOpen={ísAddItemModalOpen}
          onCancel={() => setIsAddModalOpen(false)}
        />
      </S.Wrapper>
    </Base>
  );
};

export default ShoppingList;
