import styled, { css } from 'styled-components';

import { TextFieldProps } from '.';

type WrapperProps = Pick<TextFieldProps, 'inputSize'>;

const wrapperModifiers = {
  small: () => css`
    width: 20rem;
  `,
  large: () => css`
    width: 28rem;
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ inputSize }) => css`
    display: flex;
    flex-direction: column;
    height: 8rem;
    justify-content: space-around;

    ${!!inputSize && wrapperModifiers[inputSize]()}
  `}
`;

export const Label = styled.label`
  font-size: 1.8rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  padding: 1rem;
  border: 2px solid #bdbdbd;
  border-radius: 1.2rem;

  &:focus-within {
    box-shadow: 0 0 0.8rem #f9a109;

    ${Label} {
      color: #f9a109;
    }
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  background-color: inherit;
  font-size: 1.8rem;

  &:focus {
    outline: none;
  }
`;
