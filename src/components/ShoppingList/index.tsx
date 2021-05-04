import AddNewItem from 'components/AddNewItem';
import ShoppingListItem from 'components/ShoppingListItem';
import TextField from 'components/TextField';
import { useShoppingList } from 'hooks/use-shoppinglist';

import * as S from './styles';

const ShoppingList = () => {
  const { items } = useShoppingList();

  return (
    <S.Wrapper>
      <S.Content>
        <AddNewItem onAdd={() => console.log('oi')} />
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
        <TextField placeholder="Enter a name" inputSize="small" name="name" />
        <S.SaveButton>Save</S.SaveButton>
      </S.Footer>
    </S.Wrapper>
  );
};

export default ShoppingList;
