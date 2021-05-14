import { ListUl } from '@styled-icons/bootstrap/ListUl';
import { FileBarGraph } from '@styled-icons/bootstrap/FileBarGraph';
import { ArrowCounterclockwise } from '@styled-icons/bootstrap/ArrowCounterclockwise';
import { BoxArrowLeft } from '@styled-icons/bootstrap/BoxArrowLeft';

import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { signOut } from 'next-auth/client';

import * as S from './styles';

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
          <S.StyledLink active={router.pathname.includes('/shopping-lists')}>
            <ArrowCounterclockwise
              data-testid="Reset icon"
              size={30}
              title="Lastest lists"
            />
          </S.StyledLink>
        </Link>

        <Link href="/statistics">
          <S.StyledLink active={router.pathname == '/statistics'}>
            <FileBarGraph data-testid="Graph icon" size={30} title="Graphics" />
          </S.StyledLink>
        </Link>

        <S.SignOut>
          <BoxArrowLeft
            data-testid="SignOut icon"
            size={30}
            onClick={() => signOut()}
          />
        </S.SignOut>
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

export default Sidebar;
