import Home, { HomeTemplateProps } from 'templates/Home';
import api from 'services/api';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getServerSideProps() {
  const response = await api.get('item/index');
  const data = response.data;

  return {
    props: {
      itemsSections: data
    }
  };
}
