import { Story, Meta } from '@storybook/react/types-6-0';
import AddItemModal, { AddItemModalProps } from '.';

export default {
  title: 'AddItemModal',
  component: AddItemModal
} as Meta;

export const Default: Story<AddItemModalProps> = (args) => (
  <AddItemModal {...args} />
);
