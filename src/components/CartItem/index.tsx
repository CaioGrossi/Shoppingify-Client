import { Plus } from '@styled-icons/bootstrap/Plus';
import { Dash } from '@styled-icons/bootstrap/Dash';
import { useShoppingList } from 'hooks/use-shoppinglist';
import * as S from './styles';

export type CartItemProps = {
  id: string;
  name: string;
};

const CartItem = ({ id, name }: CartItemProps) => {
  const { isInList, onAdd, onRemove } = useShoppingList();

  return (
    <S.Wrapper>
      <p>{name}</p>

      {isInList(id) ? (
        <S.Button>
          <Dash
            aria-label="Remover item"
            size={25}
            color="#C1C1C4"
            onClick={() => onRemove(id)}
          />
        </S.Button>
      ) : (
        <S.Button>
          <Plus
            aria-label="Adicionar item"
            size={25}
            color="#C1C1C4"
            onClick={() => onAdd(id, name, 1)}
          />
        </S.Button>
      )}
    </S.Wrapper>
  );
};

export default CartItem;
