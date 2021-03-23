import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 30.8rem;
  height: 13rem;
  background-color: #80485b;
  border-radius: 2.4rem;
  padding: 1.74rem 2.75rem 2.5rem 1.5rem;
  justify-content: space-between;
`;

export const ImageWrapper = styled.img`
  margin-top: -3rem;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 3rem;
  flex-direction: column;
  font-weight: 700;

  > p {
    color: white;
    font-size: 1.6rem;
  }
`;

export const AddItemButton = styled.button`
  width: 12rem;
  height: 4rem;
  background-color: white;
  color: #34333a;
  padding: 1.1rem 2.95rem;
  border-radius: 1.2rem;
  font-size: 1.4rem;
  border: none;
  cursor: pointer;
  font-weight: 700;
`;
