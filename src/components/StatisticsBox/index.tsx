import * as S from './styles';

type Items = {
  name: string;
  percentage: number;
};

export type StatisticsBoxProps = {
  name: string;
  items: Items[];
  color: 'orange' | 'blue';
};

const StatisticsBox = ({
  name,
  items,
  color = 'orange'
}: StatisticsBoxProps) => (
  <S.Wrapper>
    <h1>{name}</h1>

    <S.ItemsWrapper>
      {items.map((item) => (
        <S.Item key={item.name}>
          <S.ItemHeader>
            <span>{item.name}</span>
            <span>{item.percentage} %</span>
          </S.ItemHeader>

          <S.PercentageBar color={color} value={item.percentage} max="100" />
        </S.Item>
      ))}
    </S.ItemsWrapper>
  </S.Wrapper>
);

export default StatisticsBox;
