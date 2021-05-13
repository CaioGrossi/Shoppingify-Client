import { CategoryItemsSections } from 'components/ListItems';
import ListItems from 'components/ListItems';
import Base from 'templates/Base';

import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { Calendar4Range } from '@styled-icons/bootstrap/Calendar4Range';

import api from 'services/api';
import Link from 'next/link';
import { formatDate } from 'utils/mappers';
import { useSession } from 'next-auth/client';
import * as S from './styles';

export type ShoppingListProps = {
  id: string;
  name: string;
  date: string;
  itemsSections: CategoryItemsSections[];
};

const ShoppingList = ({ id, name, date, itemsSections }: ShoppingListProps) => {
  const [session] = useSession();

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
        />
      </S.Wrapper>
    </Base>
  );
};

export default ShoppingList;
