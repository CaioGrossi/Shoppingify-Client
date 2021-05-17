import TextField from 'components/TextField';
import OptionTag from 'components/OptionTag';

import { useEffect, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import * as S from './styles';

type Category = {
  id: string;
  name: string;
};

export type DataListFieldProps = {
  onChange: (value: string) => void;
  categories: Category[];
};

const DataListField = ({ categories, onChange }: DataListFieldProps) => {
  const [categorieName, setCategorieName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDatalistOpen, setIsDataListOpen] = useState(false);

  useEffect(() => {
    onChange(selectedCategory);
  }, [selectedCategory, onChange]);

  const ref = useOnclickOutside(() => {
    setIsDataListOpen(false);
  });

  return (
    <S.Wrapper ref={ref}>
      <TextField
        name="category"
        placeholder="Enter a category"
        label="Category"
        onInputChange={(value) => setCategorieName(value)}
        value={categorieName}
        autoComplete="off"
        onFocus={() => setIsDataListOpen(true)}
        required={true}
      />

      <S.Datalist isOpen={isDatalistOpen}>
        {categories
          .filter((categorie) =>
            categorie.name.toLowerCase().includes(categorieName.toLowerCase())
          )
          .map((categorie) => (
            <OptionTag
              id={categorie.id}
              name={categorie.name}
              key={categorie.id}
              onSelect={(id, name) => {
                setSelectedCategory(id);
                setCategorieName(name);
                setIsDataListOpen(false);
              }}
            />
          ))}
      </S.Datalist>
    </S.Wrapper>
  );
};

export default DataListField;
