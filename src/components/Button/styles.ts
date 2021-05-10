import styled, { css } from 'styled-components';

import { ButtonProps } from '.';

const wrapperModifiers = {
  minimal: () => css`
    background: none;
    color: black;
  `,
  fullWidth: () => css`
    width: 100%;
  `
};

type WrapperProps = Pick<ButtonProps, 'minimal' | 'fullWidth'>;

export const Wrapper = styled.button<WrapperProps>`
  ${({ minimal, fullWidth }) => css`
    cursor: pointer;
    font-weight: 600;
    background-color: #f9a109;
    color: white;
    font-size: 2rem;
    border: none;
    border-radius: 12px;
    width: 8.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;

    ${minimal && wrapperModifiers.minimal()}
    ${fullWidth && wrapperModifiers.fullWidth()};
  `}
`;
