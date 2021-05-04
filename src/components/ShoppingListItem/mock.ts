const ShoppingListItemMock = {
  id: '1',
  name: 'Banana',
  amount: 3,
  onDelete: () => {
    console.log('delete');
  },
  onIncrease: () => {
    console.log('increase');
  },
  onDecrease: () => {
    console.log('descrease');
  }
};
export default ShoppingListItemMock;
