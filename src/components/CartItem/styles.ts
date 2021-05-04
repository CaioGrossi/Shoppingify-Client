import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 1.5rem 1.6rem;
  justify-content: space-between;
  min-width: 17rem;
  max-width: 18.2rem;
  font-size: 1.6rem;
  align-items: center;
  border-radius: 1.2rem;

  > svg {
    cursor: pointer;
  }

  > p {
    word-break: break-all;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
`;
