import { Story, Meta } from '@storybook/react/types-6-0';
import ShoppingList from '.';
import { itemsMock } from './mock';

export default {
  title: 'ShoppingList',
  component: ShoppingList,
  argTypes: {
    shoppinglistContextValue: {
      type: ''
    },
    items: {
      type: ''
    }
  }
} as Meta;

export const Default: Story = (args) => <ShoppingList {...args} />;

Default.args = {
  shoppinglistContextValue: {
    items: itemsMock
  }
};
