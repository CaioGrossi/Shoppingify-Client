import Sidebar from 'components/Sidebar';
import ShoppingList from 'components/ShoppingList';

import * as S from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>{children}</S.Content>
      <ShoppingList />
    </S.Wrapper>
  );
};

export default Base;
