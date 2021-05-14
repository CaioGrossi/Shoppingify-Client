import * as S from './styles';

export type Item = {
  name: string;
  percentage: number;
};

export type StatisticsBoxProps = {
  name: string;
  items: Item[];
  color?: 'orange' | 'blue';
};

const StatisticsBox = ({
  name,
  items,
  color = 'orange'
}: StatisticsBoxProps) => (
  <S.Wrapper>
    <h1>{name}</h1>

    <S.ItemsWrapper>
      {items.length > 0 ? (
        items.map((item) => (
          <S.Item key={item.name}>
            <S.ItemHeader>
              <span>{item.name}</span>
              <span>{item.percentage} %</span>
            </S.ItemHeader>

            <S.PercentageBar color={color} value={item.percentage} max="100" />
          </S.Item>
        ))
      ) : (
        <h1>You don`t have any statistics yet</h1>
      )}
    </S.ItemsWrapper>
  </S.Wrapper>
);

export default StatisticsBox;
