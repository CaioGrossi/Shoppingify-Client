import { Story, Meta } from '@storybook/react/types-6-0';
import DeleteListModal, { DeleteListModalProps } from '.';
import { mock } from './mock';

export default {
  title: 'DeleteListModal',
  component: DeleteListModal
} as Meta;

export const Default: Story<DeleteListModalProps> = (args) => (
  <DeleteListModal {...args} />
);

Default.args = mock;
