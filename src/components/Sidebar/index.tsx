import Link from 'next/link';

import { ListUl } from '@styled-icons/bootstrap/ListUl';
import { FileBarGraph } from '@styled-icons/bootstrap/FileBarGraph';
import { ArrowCounterclockwise } from '@styled-icons/bootstrap/ArrowCounterclockwise';

import * as S from './styles';

const Sidebar = () => {
  return (
    <S.Wrapper>
      <S.IconsWrapper>
        <Link href="/">
          <a>
            <ListUl data-testid="List icon" size={30} title="Items" />
          </a>
        </Link>

        <Link href="#">
          <a>
            <ArrowCounterclockwise
              data-testid="Reset icon"
              size={30}
              title="Lastest lists"
            />
          </a>
        </Link>

        <Link href="#">
          <a>
            <FileBarGraph data-testid="Graph icon" size={30} title="Graphics" />
          </a>
        </Link>
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default Sidebar;
