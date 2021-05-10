import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 8.8rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  flex-shrink: 0;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
    width: fit-content;
    height: fit-content;
  }

  a :not(:last-child) {
    margin-bottom: 7.5rem;
  }
`;
