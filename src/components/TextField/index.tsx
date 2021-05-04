import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  name: string;
  label?: string;
  placeholder: string;
  inputSize?: 'small' | 'large';
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  onInputChange,
  label,
  inputSize = 'large',
  placeholder,
  name,
  ...props
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper inputSize={inputSize}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={inputValue}
          placeholder={placeholder}
          name={name}
          id={name}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextField;
