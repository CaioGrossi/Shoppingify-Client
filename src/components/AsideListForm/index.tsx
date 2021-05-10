import ShoppingList from 'components/ShoppingList';
import ItemForm from 'components/ItemForm';
import { useState } from 'react';

const AsideListForm = () => {
  const [isShoppingListActive, setIsShoppingListActive] = useState(true);

  const onChangeRender = (state: boolean) => {
    setIsShoppingListActive(state);
  };

  return isShoppingListActive ? (
    <ShoppingList onCreateItem={onChangeRender} />
  ) : (
    <ItemForm onCompleted={onChangeRender} />
  );
};

export default AsideListForm;
