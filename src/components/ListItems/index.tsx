/* eslint-disable @typescript-eslint/no-non-null-assertion */

import CartItem from 'components/CartItem';
import CheckListItem from 'components/CheckListItem';

import { ListItem } from 'hooks/use-shoppinglist';

import * as S from './styles';

type Items = Omit<ListItem, 'quantity'> & {
  quantity?: number;
  checked?: boolean;
};

export type CategoryItemsSections = {
  category: string;
  items: Items[];
};

export type ItemsListProps = {
  itemsSections: CategoryItemsSections[];
  checkList?: boolean;
  onCheck?: (id: string) => void;
};

const ItemsList = ({
  itemsSections,
  checkList = false,
  onCheck
}: ItemsListProps) => (
  <S.Wrapper>
    {itemsSections.map((itemSection) => (
      <S.ItemsSection key={itemSection.category}>
        <h1>{itemSection.category}</h1>
        <S.ItemsWrapper>
          {itemSection.items.map((item) =>
            checkList ? (
              <CheckListItem
                id={item.id}
                key={item.id}
                name={item.name}
                checked={item.checked!}
                quantity={item.quantity!}
                onCheck={onCheck!}
              />
            ) : (
              <CartItem name={item.name} id={item.id} key={item.id} />
            )
          )}
        </S.ItemsWrapper>
      </S.ItemsSection>
    ))}
  </S.Wrapper>
);

export default ItemsList;
