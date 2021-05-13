import { getStorageItem, setStorageItem, clearStorage } from '.';

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'SHOPPINGIFY_listItems',
      JSON.stringify([{ id: '1', name: 'cake', quantity: 5 }])
    );

    expect(getStorageItem('listItems')).toStrictEqual([
      { id: '1', name: 'cake', quantity: 5 }
    ]);
  });
});

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('should add the item to localStorage', () => {
    setStorageItem('listItems', [{ id: '1', name: 'cake', quantity: 5 }]);

    expect(window.localStorage.getItem('SHOPPINGIFY_listItems')).toStrictEqual(
      JSON.stringify([{ id: '1', name: 'cake', quantity: 5 }])
    );
  });
});

describe('clearStorage()', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should clear localStorage', () => {
    setStorageItem('listItems', [{ id: '1', name: 'cake', quantity: 5 }]);

    clearStorage();

    expect(window.localStorage.getItem('SHOPPINGIFY_listItems')).toStrictEqual(
      null
    );
  });
});
