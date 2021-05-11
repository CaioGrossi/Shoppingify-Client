import { ListSections } from 'templates/ShoppingLists';

function formatShoppingListSection(data: ListSections[]) {
  const formatedData = data.map((listSection) => ({
    ...listSection,
    lists: listSection.lists.map((list) => ({
      ...list,
      createdAt: formatDate(new Date(list.createdAt))
    }))
  }));

  return formatedData;
}

function formatDate(date: Date) {
  const week_days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${week_days[day]} ${day}.${month + 1}.${year}`;
}

export { formatShoppingListSection };
