import Sidebar from 'components/Sidebar';
import AsideFormList from 'components/AsideListForm';

import * as S from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Content>{children}</S.Content>
      <AsideFormList />
    </S.Wrapper>
  );
};

export default Base;
