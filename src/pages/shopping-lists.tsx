import { GetServerSidePropsContext } from 'next';
import api from 'services/api';
import ShoppingLists, {
  ShoppingListTemplateProps
} from 'templates/ShoppingLists';
import protectedRoutes from 'utils/protected-routes';

export default function Lists(props: ShoppingListTemplateProps) {
  return <ShoppingLists {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  const response = await api.get('shopping-list/get-by-user', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  });

  const data = response.data;

  return {
    props: {
      session,
      lists: data
    }
  };
}
