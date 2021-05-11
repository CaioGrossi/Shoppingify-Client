import * as ShoppingListItemStyles from 'components/ShoppingListItem/styles';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
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
