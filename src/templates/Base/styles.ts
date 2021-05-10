import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

export const Content = styled.main`
  flex: 1 1 auto;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top: 3rem;
  background-color: #fafafe;

  @media (max-width: 900px) {
    padding-left: 2rem;
    padding-top: 1rem;
    padding-right: 0;
  }
`;

export const ListOrFormWrapper = styled.div`
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
`;
