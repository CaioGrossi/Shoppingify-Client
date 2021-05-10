import ShoppingListCard, {
  ShoppingListCardProps
} from 'components/ShoppingListCard';
import Base from 'templates/Base';

import * as S from './styles';

export type ShoppingListTemplateProps = {
  lists: ShoppingListCardProps[];
};

const ShoppingLists = ({ lists }: ShoppingListTemplateProps) => {
  return (
    <Base>
      <S.Content>
        {lists.map((list) => (
          <ShoppingListCard
            key={list.id}
            name={list.name}
            id={list.id}
            status={list.status}
            date={list.date}
          />
        ))}
      </S.Content>
    </Base>
  );
};

export default ShoppingLists;
