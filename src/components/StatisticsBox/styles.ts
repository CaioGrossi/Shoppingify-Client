import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 32rem;

  > h1 {
    margin-bottom: 3.8rem;
    font-size: 2.4rem;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40rem;
  overflow-y: scroll;
  width: 100%;

  ${Item}:not(:last-child) {
    margin-bottom: 2.5rem;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  font-size: 1.4rem;
`;

type PercentageBarProps = {
  color: 'orange' | 'blue';
};

const percentageBarModifiers = {
  orange: () => css`
    &::-webkit-progress-value {
      background-color: #f9a109;
    }
  `,
  blue: () => css`
    &::-webkit-progress-value {
      background-color: #56ccf2;
    }
  `
};

export const PercentageBar = styled.progress<PercentageBarProps>`
  ${({ color }) => css`
    width: 100%;
    -webkit-appearance: none;

    &::-webkit-progress-value {
      border-radius: 6px;
    }

    &::-webkit-progress-bar {
      border-radius: 6px;
      background-color: #e0e0e0;
    }

    ${percentageBarModifiers[color]()}
  `}
`;
