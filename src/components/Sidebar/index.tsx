import { ListUl } from '@styled-icons/bootstrap/ListUl';
import { FileBarGraph } from '@styled-icons/bootstrap/FileBarGraph';
import { ArrowCounterclockwise } from '@styled-icons/bootstrap/ArrowCounterclockwise';
import Link from 'next/link';

import * as S from './styles';
import { useRouter } from 'next/dist/client/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.IconsWrapper>
        <Link href="/">
          <S.StyledLink active={router.pathname == '/'}>
            <ListUl data-testid="List icon" size={30} title="Items" />
          </S.StyledLink>
        </Link>

        <Link href="/shopping-lists">
          <S.StyledLink active={router.pathname == '/shopping-lists'}>
            <ArrowCounterclockwise
              data-testid="Reset icon"
              size={30}
              title="Lastest lists"
            />
          </S.StyledLink>
        </Link>

        <Link href="#">
          <S.StyledLink active={false}>
            <FileBarGraph data-testid="Graph icon" size={30} title="Graphics" />
          </S.StyledLink>
        </Link>
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default Sidebar;
