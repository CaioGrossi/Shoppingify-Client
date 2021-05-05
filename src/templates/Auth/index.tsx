import React from 'react';

import * as S from './styles';

type AuthTemplateProps = {
  children: React.ReactNode;
};

const Auth = ({ children }: AuthTemplateProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <h1>
            <strong>Shoppingify</strong> allows you take your shopping list
            wherever you go.
          </h1>
        </S.BannerContent>
      </S.BannerBlock>
      <S.ContentWrapper>
        <S.Content>{children}</S.Content>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default Auth;
