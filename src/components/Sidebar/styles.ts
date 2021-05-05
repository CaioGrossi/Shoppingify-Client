import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 9.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
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
