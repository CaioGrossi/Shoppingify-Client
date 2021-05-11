import styled, { css } from 'styled-components';

type WrapperProps = {
  isOpen: boolean;
};

const wrapperModifiers = {
  open: () => css`
    @media (max-width: 900px) {
      position: absolute;
      right: -2.2rem;
    }
  `,

  close: () => css`
    @media (max-width: 900px) {
      position: absolute;
      right: -35.8rem;
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    height: 100vh;
    width: 38.9rem;
    display: flex;
    flex-direction: column;
    background-color: #fff0de;
    justify-content: space-between;
    transition: 0.8s;
    z-index: 80;

    h1 {
      margin: 4rem 0;
    }

    ${isOpen ? wrapperModifiers.open() : wrapperModifiers.close()}
  `}
`;

export const ToggleListButton = styled.button`
  border: 0;
  position: absolute;
  display: none;
  margin-top: 2rem;

  > svg {
    background: #fff0de;
  }

  @media (max-width: 900px) {
    display: block;
  }
`;
