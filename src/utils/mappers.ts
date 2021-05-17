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
  const week_days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayWeeek = date.getDay();
  const dayMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${week_days[dayWeeek]} ${dayMonth}.${month + 1}.${year}`;
}

export { formatShoppingListSection, formatDate };
