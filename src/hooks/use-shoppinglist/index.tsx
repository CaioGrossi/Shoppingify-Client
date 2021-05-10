import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from 'utils/localStorage';

const LIST_KEY = 'listItems';

export type ListItem = {
  id: string;
  name: string;
  quantity: number;
};

export type ShoppingListContextData = {
  items: ListItem[];
  onAdd: (id: string, name: string, quantity: number) => void;
  onIncrease: (id: string) => void;
  onRemove: (id: string) => void;
  onDecrease: (id: string) => void;
  isInList: (id: string) => boolean;
};

export const ShoppingListContextDefaultValues = {
  items: [],
  onAdd: () => null,
  onIncrease: () => null,
  onRemove: () => null,
  onDecrease: () => null,
  isInList: () => false
};

export const ShoppingListContext = createContext<ShoppingListContextData>(
  ShoppingListContextDefaultValues
);

export type ShoppingListProviderProps = {
  children: React.ReactNode;
};

const ShoppingListProvider = ({ children }: ShoppingListProviderProps) => {
  const [items, setItems] = useState<ListItem[]>([]);

  useEffect(() => {
    const data = getStorageItem(LIST_KEY);

    if (data) {
      setItems(data);
    }
  }, []);

  const saveItems = (listItems: ListItem[]) => {
    setItems(listItems);
    setStorageItem(LIST_KEY, listItems);
  };

  const onAdd = (id: string, name: string, quantity: number) => {
    saveItems([...items, { id, name, quantity }]);
  };

  const onRemove = (id: string) => {
    const filteredItems = items.filter((item) => item.id !== id);
    saveItems(filteredItems);
  };

  const onIncrease = (id: string) => {
    const itemsArray = [...items];

    for (let i = 0; i < itemsArray.length; i++) {
      const item = itemsArray[i];

      if (item.id == id) {
        item.quantity++;
        break;
      }
    }

    saveItems(itemsArray);
  };

  const onDecrease = (id: string) => {
    const itemsArray = [...items];

    for (let i = 0; i < itemsArray.length; i++) {
      const item = itemsArray[i];

      if (item.id == id) {
        if (item.quantity == 1) {
          onRemove(id);
          return;
        }

        item.quantity--;
        break;
      }
    }

    saveItems(itemsArray);
  };

  const isInList = (id: string) => {
    return items.some((item) => item.id === id);
  };

  return (
    <ShoppingListContext.Provider
      value={{ items, onAdd, onDecrease, onRemove, onIncrease, isInList }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

const useShoppingList = () => useContext(ShoppingListContext);

export { ShoppingListProvider, useShoppingList };
