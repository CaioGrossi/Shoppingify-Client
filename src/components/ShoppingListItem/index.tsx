import { useState } from 'react';
import { useShoppingList } from 'hooks/use-shoppinglist';

import { Plus } from '@styled-icons/bootstrap/Plus';
import { Dash } from '@styled-icons/bootstrap/Dash';
import { TrashFill } from '@styled-icons/bootstrap/TrashFill';

import * as S from './styles';

export type ShoppingListItemProps = {
  id: string;
  name: string;
  amount: number;
};

const ShoppingListItem = ({ id, name, amount }: ShoppingListItemProps) => {
  const { onDecrease, onIncrease, onRemove } = useShoppingList();
  const [isControlOpen, setIsControlOpen] = useState(false);

  return (
    <S.Wrapper>
      <span>{name}</span>
      {isControlOpen ? (
        <S.ControlsWrapper>
          <S.TrashIconWrapper>
            <TrashFill
              size={15}
              data-testid="trash-icon"
              onClick={() => onRemove(id)}
            />
          </S.TrashIconWrapper>

          <S.ButtonsWrapper>
            <Dash
              role="button"
              size={25}
              data-testid="minus-icon"
              onClick={() => onDecrease(id)}
            />
            <S.Amount onClick={() => setIsControlOpen(!isControlOpen)}>
              {amount} pcs
            </S.Amount>
            <Plus
              role="button"
              size={25}
              data-testid="plus-icon"
              onClick={() => onIncrease(id)}
            />
          </S.ButtonsWrapper>
        </S.ControlsWrapper>
      ) : (
        <S.Amount onClick={() => setIsControlOpen(!isControlOpen)}>
          {`${amount} pcs`}
        </S.Amount>
      )}
    </S.Wrapper>
  );
};

export default ShoppingListItem;
