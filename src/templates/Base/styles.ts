import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

export const Content = styled.main`
  flex: 1 1 auto;
  padding-left: 6rem;
  padding-right: 6rem;
  padding-top: 3rem;
  background-color: #fafafe;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 900px) {
    padding-left: 2rem;
    padding-top: 1rem;
    padding-right: 0;
  }
`;
