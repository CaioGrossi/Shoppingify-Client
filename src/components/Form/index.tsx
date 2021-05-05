import * as TextFieldStyles from 'components/TextField/styles';

import styled from 'styled-components';

export const Wrapper = styled.div`
  ${TextFieldStyles.Wrapper} {
    margin-bottom: 0.5rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2.4rem;
  }
`;

export const SubmitButton = styled.button`
  background-color: #f9a109;
  border-radius: 9px;
  color: white;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: none;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  margin-top: 1rem;
`;

export const FormLoading = styled.img.attrs(() => ({
  src: '/img/dots.svg',
  alt: 'Waiting...'
}))`
  width: 4rem;
`;

export const FormError = styled.div`
  text-align: center;
  color: red;
  font-size: 1.6rem;
`;
