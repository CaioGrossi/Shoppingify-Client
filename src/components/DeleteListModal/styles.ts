import styled, { css } from 'styled-components';

type WrapperProps = {
  isOpen: boolean;
};

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;

    ${isOpen && wrapperModifiers.open()}
    ${!isOpen && wrapperModifiers.close()}
  `}
`;

export const Content = styled.div`
  padding: 3rem;
  background-color: white;
  border-radius: 12px;
  width: 50rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
`;
