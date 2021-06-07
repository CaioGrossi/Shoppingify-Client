import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 30rem;
  min-height: 5.5rem;
  font-size: 1.8rem;
  word-break: break-all;
  color: black;
`;

export const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 2.4rem;
  border: 1px solid #f9a109;
  width: 6.8rem;
  height: 3.2rem;
  cursor: pointer;
  color: #f9a109;

  &:hover {
    background-color: #f9a109;
    color: white;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  height: 4.5rem;
  width: 17.4rem;
  border-radius: 1.2rem;
`;

export const TrashIconWrapper = styled.button`
  height: 100%;
  width: 3.7rem;
  padding: 1rem;
  cursor: pointer;
  border: none;
  padding-left: 1.1rem;
  background-color: #f9a109;
  border-radius: 1.2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > svg {
    cursor: pointer;
  }
`;
