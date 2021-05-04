import * as CartItemStyles from 'components/CartItem/styles';

import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100rem;
`;

export const ItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h1 {
    margin-bottom: 1.8rem;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  ${CartItemStyles.Wrapper} {
    margin-right: 1rem;
    margin-bottom: 4rem;
  }
`;
