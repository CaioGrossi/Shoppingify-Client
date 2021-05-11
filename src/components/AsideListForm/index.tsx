import ShoppingList from 'components/ShoppingList';
import ItemForm from 'components/ItemForm';
import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as S from './styles';
import { useState } from 'react';

const AsideListForm = () => {
  const [isShoppingListActive, setIsShoppingListActive] = useState(true);
  const [isHideInMobileScreen, setIsHideInMobileScreen] = useState(false);

  const onChangeRender = (state: boolean) => {
    setIsShoppingListActive(state);
  };

  return (
    <S.Wrapper isOpen={isHideInMobileScreen}>
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

      <S.ToggleListButton
        onClick={() => setIsHideInMobileScreen((prev) => !prev)}
        aria-label="Open or Close list"
        data-testid="open/close list"
      >
        {isHideInMobileScreen ? (
          <ArrowRight size={28} />
        ) : (
          <ArrowLeft size={28} />
        )}
      </S.ToggleListButton>
      {isShoppingListActive ? (
        <ShoppingList onCreateItem={onChangeRender} />
      ) : (
        <ItemForm onCompleted={onChangeRender} />
      )}
    </S.Wrapper>
  );
};

export default AsideListForm;
