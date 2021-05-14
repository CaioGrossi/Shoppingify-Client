import ShoppingListCard, {
  ShoppingListCardProps
} from 'components/ShoppingListCard';
import Base from 'templates/Base';

import * as S from './styles';

export type ListSections = {
  date: string;
  lists: ShoppingListCardProps[];
};

export type ShoppingListTemplateProps = {
  listsSection: ListSections[];
};

const ShoppingLists = ({ listsSection }: ShoppingListTemplateProps) => {
  return (
    <Base>
      <S.Content>
        <h1>Shopping history</h1>

        {listsSection.length > 0 ? (
          listsSection.map((listSection) => (
            <S.ListSection key={listSection.lists[0].id}>
              <h2>{listSection.date}</h2>

              {listSection.lists.map((list) => (
                <ShoppingListCard
                  key={list.id}
                  name={list.name}
                  id={list.id}
                  status={list.status}
                  createdAt={list.createdAt}
                />
              ))}
            </S.ListSection>
          ))
        ) : (
          <h1>You don`t have any lists yet</h1>
        )}
      </S.Content>
    </Base>
  );
};

export default ShoppingLists;
