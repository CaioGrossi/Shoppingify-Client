import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const AllItemsWrapper = styled.div`
  flex-direction: column;
  margin-right: 5rem;
  @media (max-width: 900px) {
    margin-right: 0;
  }
`;

export const AllItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 35rem;
  overflow-y: scroll;
  align-items: center;

  @media (max-width: 900px) {
    max-height: 20rem;
  }
`;

export const ShoppingListItemsWrapper = styled.div`
  flex-direction: column;

  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;

export const ShoppingListItems = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 35rem;
  overflow-y: scroll;

  @media (max-width: 900px) {
    max-height: 20rem;
    margin-top: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;
  > * {
    &:first-child {
      margin-right: 2rem;
    }
  }
`;
