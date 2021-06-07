import { ListItem } from 'hooks/use-shoppinglist';
import { TrashFill } from '@styled-icons/bootstrap/TrashFill';
import * as S from './styles';

export type CheckListItemProps = ListItem & {
  onCheck: (id: string) => void;
  onRemove: (id: string) => void;
  checked: boolean;
};

const CheckListItem = ({
  id,
  name,
  onCheck,
  onRemove,
  quantity,
  checked
}: CheckListItemProps) => (
  <S.Wrapper>
    <label htmlFor={name}>{name}</label>
    <span>{`${quantity} pcs`}</span>
    <S.CheckBox
      id={name}
      type="checkbox"
      onChange={() => onCheck(id)}
      defaultChecked={checked}
    />

    <S.DeleteButton onClick={() => onRemove(id)}>
      <TrashFill size={18} color="white" />
    </S.DeleteButton>
  </S.Wrapper>
);

export default CheckListItem;
