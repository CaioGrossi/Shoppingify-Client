import {
  useShoppingList,
  ShoppingListProvider,
  ShoppingListProviderProps
} from '.';

import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

describe('useShoppinglist', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should add one item to the list', () => {
    const wrapper = ({ children }: ShoppingListProviderProps) => (
      <ShoppingListProvider>{children}</ShoppingListProvider>
    );

    const { result } = renderHook(() => useShoppingList(), {
      wrapper
    });

    expect(result.current.items).toStrictEqual([]);

    act(() => {
      result.current.onAdd('1', 'cake', 5);
    });

    expect(result.current.items).toStrictEqual([
      { id: '1', name: 'cake', quantity: 5 }
    ]);
  });

  it('should remove item from list', () => {
    const wrapper = ({ children }: ShoppingListProviderProps) => (
      <ShoppingListProvider>{children}</ShoppingListProvider>
    );

    const { result } = renderHook(() => useShoppingList(), {
      wrapper
    });

    act(() => {
      result.current.onAdd('1', 'cake', 5);
    });

    act(() => {
      result.current.onRemove('1');
    });

    expect(result.current.items).toStrictEqual([]);
  });

  it('should increase quantity in item', () => {
    const wrapper = ({ children }: ShoppingListProviderProps) => (
      <ShoppingListProvider>{children}</ShoppingListProvider>
    );

    const { result } = renderHook(() => useShoppingList(), {
      wrapper
    });

    act(() => {
      result.current.onAdd('1', 'cake', 5);
    });

    act(() => {
      result.current.onIncrease('1');
    });

    expect(result.current.items).toStrictEqual([
      { id: '1', name: 'cake', quantity: 6 }
    ]);
  });

  it('should decrease quantity in item', () => {
    const wrapper = ({ children }: ShoppingListProviderProps) => (
      <ShoppingListProvider>{children}</ShoppingListProvider>
    );

    const { result } = renderHook(() => useShoppingList(), {
      wrapper
    });

    act(() => {
      result.current.onAdd('1', 'cake', 5);
    });

    act(() => {
      result.current.onDecrease('1');
    });

    expect(result.current.items).toStrictEqual([
      { id: '1', name: 'cake', quantity: 4 }
    ]);
  });
});
