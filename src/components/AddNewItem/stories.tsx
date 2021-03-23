import { Story, Meta } from '@storybook/react/types-6-0';
import AddNewItem, { AddNewItemProps } from '.';

export default {
  title: 'AddNewItem',
  component: AddNewItem
} as Meta;

export const Default: Story<AddNewItemProps> = (args) => (
  <AddNewItem {...args} />
);

Default.args = {
  onAdd: () => {
    console.log('item a adicionar');
  }
};
