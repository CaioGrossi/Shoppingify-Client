import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.3rem 1.6rem;
  display: flex;
  width: 20rem;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-radius: 1.2rem;
  word-break: break-word;

  > span {
    color: #f9a10a;
    font-size: 1.2rem;
  }
  > label {
    font-size: 1.4rem;
    max-width: 10rem;
  }
`;

export const CheckBox = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.6rem;
  height: 1.6rem;
  border: 0.2rem solid gray;
  border-radius: 0.2rem;
  transition: background border 0.5s;
  position: relative;
  outline: none;

  &:before {
    content: '';
    width: 0.6rem;
    height: 0.9rem;
    border: 0.2rem solid white;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: absolute;
    bottom: 0.2rem;
    opacity: 0;
    transition: 0.5s;
  }
  &:focus {
    box-shadow: 0 0 0.5rem #f9a10a;
  }

  &:checked {
    border-color: #f9a10a;
    background: #f9a10a;

    &:before {
      opacity: 1;
    }
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: #eb5757;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;
