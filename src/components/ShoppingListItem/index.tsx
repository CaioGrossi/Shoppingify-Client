import { Plus } from '@styled-icons/bootstrap/Plus';
import { Dash } from '@styled-icons/bootstrap/Dash';
import { TrashFill } from '@styled-icons/bootstrap/TrashFill';

import * as S from './styles';
import { useState } from 'react';

export type ShoppingListItemProps = {
  id: number;
  name: string;
  amount: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onDelete: (id: number) => void;
};

const ShoppingListItem = ({
  id,
  name,
  amount,
  onIncrease,
  onDecrease,
  onDelete
}: ShoppingListItemProps) => {
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
              onClick={() => onDelete(id)}
            />
          </S.TrashIconWrapper>

          <S.ButtonsWrapper>
            <Dash
              size={25}
              data-testid="minus-icon"
              onClick={() => onDecrease(id)}
            />
            <S.Amount onClick={() => setIsControlOpen(!isControlOpen)}>
              {amount} pcs
            </S.Amount>
            <Plus
              size={25}
              data-testid="plus-icon"
              onClick={() => onIncrease(id)}
            />
          </S.ButtonsWrapper>
        </S.ControlsWrapper>
      ) : (
        <S.Amount onClick={() => setIsControlOpen(!isControlOpen)}>
          {amount} pcs
        </S.Amount>
      )}
    </S.Wrapper>
  );
};

export default ShoppingListItem;
