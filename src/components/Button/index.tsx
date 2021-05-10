import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  fullWidth?: boolean;
  minimal?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  fullWidth = false,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} minimal={minimal} {...props}>
    <span>{children}</span>
  </S.Wrapper>
);

export default Button;
