import { GetServerSidePropsContext } from 'next';
import api from 'services/api';
import protectedRoutes from 'utils/protected-routes';

import Statistics, { StatisticsTemplateProps } from 'templates/Statistics';

export default function Statistic(props: StatisticsTemplateProps) {
  return <Statistics {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  const response = await api.get('users/get-statistcs', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`
    }
  });

  const topItems = response.data.topItems;
  const topCategories = response.data.topCategories;

  return {
    props: {
      topItems,
      topCategories
    }
  };
}
