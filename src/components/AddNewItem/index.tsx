import * as S from './styles';

export type AddNewItemProps = {
  onAdd: () => void;
};

const AddNewItem = ({ onAdd }: AddNewItemProps) => (
  <S.Wrapper>
    <S.ImageWrapper alt="Wine" src="/img/wine.svg" />
    <S.Content>
      <p>Didn`t find what you need?</p>
      <S.AddItemButton onClick={() => onAdd()}>Add item</S.AddItemButton>
    </S.Content>
  </S.Wrapper>
);

export default AddNewItem;
