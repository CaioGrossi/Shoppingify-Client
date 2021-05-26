import Button from 'components/Button';
import Modal from 'components/Modal';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import api from 'services/api';
import * as S from './styles';

export type DeleteListModalProps = {
  listId: string;
  isOpen: boolean;
  onCancel: () => void;
};

const DeleteListModal = ({
  listId,
  isOpen,
  onCancel
}: DeleteListModalProps) => {
  const [session] = useSession();
  const router = useRouter();

  const onDeleteList = async () => {
    try {
      await api.post(
        'shopping-list/delete',
        {
          id: listId
        },
        {
          headers: {
            Authorization: `Bearer ${session?.jwt}`
          }
        }
      );

      router.push('/shopping-lists');
    } catch (error) {
      router.push('/sign-in');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <S.Content>
        <h1>Are you shure that you want to delete this list?</h1>
        <S.ButtonsWrapper>
          <Button minimal onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button color="red" onClick={() => onDeleteList()}>
            Yes
          </Button>
        </S.ButtonsWrapper>
      </S.Content>
    </Modal>
  );
};

export default DeleteListModal;
