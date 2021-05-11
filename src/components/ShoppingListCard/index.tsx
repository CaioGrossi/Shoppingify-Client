import { CaretRightFill } from '@styled-icons/bootstrap/CaretRightFill';
import { Calendar4Range } from '@styled-icons/bootstrap/Calendar4Range';

import * as S from './styles';
import Link from 'next/link';

export type ShoppingListCardProps = {
  id: string;
  name: string;
  createdAt: string;
  status: 'open' | 'completed';
};

const ShoppingListCard = ({
  id,
  name,
  createdAt,
  status
}: ShoppingListCardProps) => (
  <S.Wrapper>
    <h2>{name}</h2>

    <S.Info>
      <Calendar4Range size={20} color="#C1C1C4" />
      <span>{createdAt}</span>
      <S.Status status={status}>{status}</S.Status>
      {/* id no link aq */}
      <Link href={`/shopping-lists/${id}`}>
        <a>
          <CaretRightFill size={20} color="#F9A109" />
        </a>
      </Link>
    </S.Info>
  </S.Wrapper>
);

export default ShoppingListCard;
