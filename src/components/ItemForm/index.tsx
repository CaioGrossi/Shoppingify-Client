import TextField from 'components/TextField';
import DataListField from 'components/DataListField';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import api from 'services/api';

import * as S from './styles';
import axios from 'axios';

type ItemFormProps = {
  onCompleted: (state: boolean) => void;
};

const ItemForm = ({ onCompleted }: ItemFormProps) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function getCategories() {
      try {
        const response = await api.get('category/index', {
          cancelToken: source.token
        });
        setCategories(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled');
        } else {
          throw error;
        }
      }
    }

    getCategories();

    return () => {
      source.cancel();
    };
  }, []);

  const notifyError = (message: string) => toast.error(message);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.post('item/create', {
        itemName: name,
        categoryId: category
      });

      onCompleted(true);
    } catch (error) {
      notifyError('A item with this name already exists!');
    }
  };

  return (
    <S.Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ fontSize: '1.6rem' }}
      />
      <h1>Add new item</h1>

      <S.Form onSubmit={handleSubmit}>
        <S.Fieldset>
          <TextField
            name="Item"
            placeholder="Enter a name"
            type="text"
            label="Name"
            onInputChange={(value) => setName(value)}
            required={true}
          />

          <DataListField
            onChange={(id) => setCategory(id)}
            categories={categories}
          />
        </S.Fieldset>

        <S.Footer>
          <Button minimal onClick={() => onCompleted(true)}>
            cancel
          </Button>
          <Button type="submit">save</Button>
        </S.Footer>
      </S.Form>
    </S.Wrapper>
  );
};

export default ItemForm;
