import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 38.9rem;
  display: flex;
  flex-direction: column;
  background-color: #fff0de;
  align-items: center;
  padding: 3.4rem 2rem 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Fieldset = styled.fieldset`
  border: none;

  > div:first-child {
    margin-bottom: 3rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;
