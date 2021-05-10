import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

type DatalistProps = {
  isOpen: boolean;
};

const dataListModifiers = {
  open: () => css`
    display: block;
  `,
  close: () => css`
    display: none;
  `
};

export const Datalist = styled.div<DatalistProps>`
  ${({ isOpen }) => css`
    margin-top: 0.5rem;
    background-color: white;
    padding: 1rem;
    border-radius: 12px;

    height: 16rem;
    overflow-y: scroll;
    ${isOpen ? dataListModifiers.open() : dataListModifiers.close()};
  `}
`;
