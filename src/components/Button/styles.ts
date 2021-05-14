import styled, { css } from 'styled-components';

import { ButtonProps } from '.';

const wrapperModifiers = {
  minimal: () => css`
    background: none;
    color: black;
  `,
  fullWidth: () => css`
    width: 100%;
  `,

  red: () => css`
    background-color: #eb5757;
  `,
  primary: () => css`
    background-color: #f9a109;
  `
};

type WrapperProps = Pick<ButtonProps, 'minimal' | 'fullWidth' | 'color'>;

export const Wrapper = styled.button<WrapperProps>`
  ${({ minimal, fullWidth, color }) => css`
    cursor: pointer;
    font-weight: 600;
    color: white;
    font-size: 2rem;
    border: none;
    border-radius: 12px;
    width: 8.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;

    ${color && wrapperModifiers[color]()}

    ${minimal && wrapperModifiers.minimal()}
    ${fullWidth && wrapperModifiers.fullWidth()};
  `}
`;
