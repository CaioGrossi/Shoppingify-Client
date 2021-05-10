import * as S from './styles';

export type OptionTagProps = {
  id: string;
  name: string;
  onSelect: (id: string, name: string) => void;
};

const OptionTag = ({ id, name, onSelect }: OptionTagProps) => (
  <S.Wrapper onClick={() => onSelect(id, name)}>
    <span>{name}</span>
  </S.Wrapper>
);

export default OptionTag;
