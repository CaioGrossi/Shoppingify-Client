import Home, { HomeTemplateProps } from 'templates/Home';
import api from 'services/api';
import protectedRoutes from 'utils/protected-routes';
import { GetServerSidePropsContext } from 'next';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const response = await api.get('item/index');
  const data = response.data;

  return {
    props: {
      session,
      itemsSections: data
    }
  };
}
