import styled from 'styled-components';

export const Wrapper = styled.div`
  h1 {
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    font-size: 2.6rem;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Back = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.4rem;

  span {
    margin-left: 1rem;
    color: #f9a109;
  }

  a {
    text-decoration: none;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: #c1c1c4;

  span {
    margin-left: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  > * {
    &:first-child {
      margin-right: 2rem;
    }
  }
`;
