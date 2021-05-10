import styled, { css } from 'styled-components';
import { ShoppingListCardProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 2rem;
  justify-content: space-between;
  font-size: 1.6rem;
  border-radius: 12px;
  background-color: white;
  align-items: center;
`;

export const Info = styled.div`
  width: 24rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
  color: #c1c1c4;
`;

type StatusProps = Pick<ShoppingListCardProps, 'status'>;

const statusModifiers = {
  open: () => css`
    color: #56ccf2;
    border: 1px solid #56ccf2;
  `,
  completed: () => css`
    color: green;
    border: 1px solid green;
  `
};

export const Status = styled.div<StatusProps>`
  ${({ status }) => css`
    width: 7.5rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    ${statusModifiers[status]()}
  `}
`;
