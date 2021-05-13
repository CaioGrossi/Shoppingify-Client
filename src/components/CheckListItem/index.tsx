import { ListItem } from 'hooks/use-shoppinglist';
import * as S from './styles';

export type CheckListItemProps = ListItem & {
  onCheck: (id: string) => void;
} & { checked: boolean };

const CheckListItem = ({
  id,
  name,
  onCheck,
  quantity,
  checked
}: CheckListItemProps) => (
  <S.Wrapper>
    <label htmlFor="checkItem">{name}</label>
    <span>{`${quantity} pcs`}</span>
    <S.CheckBox
      id="checkItem"
      type="checkbox"
      onChange={() => onCheck(id)}
      defaultChecked={checked}
    />
  </S.Wrapper>
);

export default CheckListItem;
