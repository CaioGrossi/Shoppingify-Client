import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  fullWidth?: boolean;
  minimal?: boolean;
  children: React.ReactNode;
  color?: 'primary' | 'red';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  fullWidth = false,
  minimal = false,
  color = 'primary',
  ...props
}: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} minimal={minimal} color={color} {...props}>
    <span>{children}</span>
  </S.Wrapper>
);

export default Button;
