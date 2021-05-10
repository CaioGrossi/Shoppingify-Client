import { Story, Meta } from '@storybook/react/types-6-0';
import ShoppingListCard, { ShoppingListCardProps } from '.';
import { shoppingListCardMock } from './mock';
export default {
  title: 'ShoppingListCard',
  component: ShoppingListCard
} as Meta;

export const Default: Story<ShoppingListCardProps> = (args) => (
  <ShoppingListCard {...args} />
);

Default.args = shoppingListCardMock;
