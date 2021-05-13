import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 7.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  align-items: center;
  flex-shrink: 0;
`;

type StyledLinkProps = {
  active: boolean;
};

const styledLinkModifiers = {
  active: () => css`
    border-left: 6px solid #f9a109;
  `
};

export const StyledLink = styled.a<StyledLinkProps>`
  ${({ active }) => css`
    cursor: pointer;
    ${active && styledLinkModifiers.active()}
  `}
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;

  a {
    text-decoration: none;
    color: black;
    width: fit-content;
    height: fit-content;
    padding-left: 1rem;
  }

  a :not(:last-child) {
    margin-bottom: 7.5rem;
  }
`;

export const SignOut = styled.div`
  cursor: pointer;
  padding-left: 1.5rem;
  flex-grow: 1;
`;
