import styled from 'styled-components';

import * as StatisticsBoxStyles from 'components/StatisticsBox/styles';

export const Content = styled.div`
  display: flex;

  ${StatisticsBoxStyles.Wrapper} {
    margin-right: 6rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    ${StatisticsBoxStyles.Wrapper} {
      margin-right: 0;
      margin-bottom: 4rem;
    }
  }
`;
