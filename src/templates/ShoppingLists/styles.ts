import styled from 'styled-components';
import * as ShoppingListCardStyles from 'components/ShoppingListCard/styles';

export const Content = styled.div`
  h1 {
    font-size: 2.6rem;
    margin-bottom: 4rem;
  }
`;

export const ListSection = styled.div`
  ${ShoppingListCardStyles.Wrapper} {
    margin-bottom: 2.8rem;
  }

  > h2 {
    font-size: 2rem;
    margin-bottom: 2.8rem;
  }
`;
