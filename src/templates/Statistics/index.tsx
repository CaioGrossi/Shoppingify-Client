import StatisticsBox, { Item } from 'components/StatisticsBox';
import Base from 'templates/Base';

import * as S from './styles';

export type StatisticsTemplateProps = {
  topItems: Item[];
  topCategories: Item[];
};

const Statistics = ({ topItems, topCategories }: StatisticsTemplateProps) => {
  return (
    <Base>
      <S.Content>
        <StatisticsBox name="Top Items" items={topItems} />
        <StatisticsBox name="Top Categories" items={topCategories} />
      </S.Content>
    </Base>
  );
};

export default Statistics;
