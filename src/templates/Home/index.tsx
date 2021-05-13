import Base from 'templates/Base';
import SearchBar from 'components/SearchBar';
import ItemsList, { ItemsListProps } from 'components/ListItems';

import * as S from './styles';

export type HomeTemplateProps = ItemsListProps;

const Home = ({ itemsSections }: HomeTemplateProps) => {
  return (
    <Base>
      <S.Header>
        <h1>
          <strong>Shoppingfy</strong> allows you take your <br /> shooping list
          wherever you go.
        </h1>
        <SearchBar onChange={() => console.log('oi')} />
      </S.Header>

      <ItemsList itemsSections={itemsSections} />
    </Base>
  );
};

export default Home;
