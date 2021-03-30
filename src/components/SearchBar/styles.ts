import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  border-radius: 1.2rem;
  background-color: white;
  width: 27.5rem;
`;

export const Input = styled.input`
  border: none;
  margin-left: 1rem;
  height: 2rem;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
