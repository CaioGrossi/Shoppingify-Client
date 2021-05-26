import { X as Close } from '@styled-icons/bootstrap/X';

import * as S from './styles';

export type Modal = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const DeleteListModal = ({ isOpen, onClose, children }: Modal) => (
  <S.Wrapper isOpen={isOpen}>
    <S.Close onClick={() => onClose()} role="button" aria-label="close modal">
      <Close size={50} />
    </S.Close>

    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default DeleteListModal;
