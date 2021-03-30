import * as S from './styles';
import { Search } from '@styled-icons/bootstrap/Search';
type SearchBarProps = {
  onChange: (search: string) => void;
};

const SearchBar = ({ onChange }: SearchBarProps) => (
  <S.Wrapper>
    <Search size={20} data-testid="svg-search" />
    <S.Input
      type="text"
      onChange={(event) => onChange(event.target.value)}
      name="Search"
      placeholder="search item"
    />
  </S.Wrapper>
);

export default SearchBar;
