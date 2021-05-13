import { GetServerSidePropsContext } from 'next';
import api from 'services/api';

import ShoppingList, { ShoppingListProps } from 'templates/ShoppingList';
import protectedRoutes from 'utils/protected-routes';

export default function CheckList(props: ShoppingListProps) {
  return <ShoppingList {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const listId = context.params?.slug;

  const response = await api.get('shopping-list/get-by-user', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    },
    data: {
      id: listId
    }
  });

  const data = response.data;

  return {
    props: {
      id: listId,
      name: data.name,
      date: data.date,
      itemsSections: data.items
    }
  };
}
