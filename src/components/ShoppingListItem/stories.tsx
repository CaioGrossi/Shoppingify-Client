import { Story, Meta } from '@storybook/react/types-6-0';
import ShoppingListItem, { ShoppingListItemProps } from '.';
import mock from './mock';

export default {
  title: 'ShoppingListItem',
  component: ShoppingListItem
} as Meta;

export const Default: Story<ShoppingListItemProps> = (args) => (
  <ShoppingListItem {...args} />
);

Default.args = { ...mock };
