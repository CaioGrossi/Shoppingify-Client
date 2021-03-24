import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  onInputChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  placeholder,
  name,
  onInputChange
}: TextFieldProps) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={inputValue}
          placeholder={placeholder}
          name={name}
          id={name}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextField;
