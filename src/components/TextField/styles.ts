import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  height: 9rem;
  justify-content: space-around;
`;

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 6.1rem;
  padding: 1.5rem;
  border: 2px solid #bdbdbd;
  border-radius: 1.2rem;

  &:focus-within {
    box-shadow: 0 0 0.8rem #f9a109;

    ${Label} {
      color: #f9a109;
    }
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;
