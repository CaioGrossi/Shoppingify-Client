import { Plus } from '@styled-icons/bootstrap/Plus';
import * as S from './styles';

export type CartItemProps = {
  id: number;
  name: string;
  onAdd: (id: number) => void;
};

const CartItem = ({ id, name, onAdd }: CartItemProps) => (
  <S.Wrapper>
    <p>{name}</p>
    <Plus
      role="button"
      aria-label="Adicionar item"
      size={25}
      color="#C1C1C4"
      onClick={() => onAdd(id)}
    />
  </S.Wrapper>
);

export default CartItem;
