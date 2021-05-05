import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const BannerBlock = styled.div`
  position: relative;
  background-image: url('img/bg-img.jpeg');
  background-size: cover;
  background-position: center center;
  padding-left: 5rem;

  @media (max-width: 900px) {
    display: none;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 0.6;
  }
`;

export const BannerContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  align-content: center;
  z-index: 10;
  font-size: 3.5rem;
  height: 100%;

  strong {
    color: #f9a109;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: #fafafe;
`;

export const Content = styled.div`
  width: 30rem;
`;
