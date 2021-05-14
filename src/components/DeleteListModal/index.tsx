import Button from 'components/Button';
import * as S from './styles';

export type DeleteListModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteListModal = ({
  isOpen,
  onCancel,
  onConfirm
}: DeleteListModalProps) => (
  <S.Wrapper isOpen={isOpen} onClick={() => onCancel()}>
    <S.Content>
      <h1>Are you shure that you want to delete this list?</h1>
      <S.ButtonsWrapper>
        <Button minimal onClick={() => onCancel()}>
          Cancel
        </Button>
        <Button color="red" onClick={() => onConfirm()}>
          Yes
        </Button>
      </S.ButtonsWrapper>
    </S.Content>
  </S.Wrapper>
);

export default DeleteListModal;
