import { ListItem } from 'hooks/use-shoppinglist';
import CartItem from 'components/CartItem';

import * as S from './styles';

type Item = Omit<ListItem, 'quantity'>;

type CategoryItems = {
  category: string;
  items: Item[];
};

export type ItemsListProps = {
  itemsSections: CategoryItems[];
};

const ItemsList = ({ itemsSections }: ItemsListProps) => (
  <S.Wrapper>
    {itemsSections.map((itemSection) => (
      <S.ItemsSection key={itemSection.category}>
        <h1>{itemSection.category}</h1>
        <S.ItemsWrapper>
          {itemSection.items.map((item) => (
            <CartItem name={item.name} id={item.id} key={item.id} />
          ))}
        </S.ItemsWrapper>
      </S.ItemsSection>
    ))}
  </S.Wrapper>
);

export default ItemsList;
