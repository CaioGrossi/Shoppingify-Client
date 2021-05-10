import * as ShoppingListItemStyles from 'components/ShoppingListItem/styles';

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
      right: -34rem;
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

export const Content = styled.div`
  padding: 4.3rem 3.1rem 0 4.3rem;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 440px);
  overflow-y: scroll;
  min-width: 5.5rem;
  justify-content: flex-start;

  ${ShoppingListItemStyles.Wrapper} {
    margin-bottom: 2rem;
  }
`;

export const Footer = styled.footer`
  background-color: white;
  height: 13rem;
  width: 100%;
  padding: 3.486rem 3.956rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SaveButton = styled.button`
  background-color: #f9a109;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  border: none;
  width: 8.7rem;
  height: 6.1rem;
  font-size: 1.6rem;
`;

export const ToggleListButton = styled.button`
  border: 0;
  position: absolute;
  margin-left: -4rem;
  display: none;

  > svg {
    background: #fff0de;
  }

  @media (max-width: 900px) {
    display: block;
  }
`;
