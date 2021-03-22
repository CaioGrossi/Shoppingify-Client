import { Story, Meta } from '@storybook/react/types-6-0';
import CartItem from '.';
import { CartItemProps } from '.';
import mock from './mock';

export default {
  title: 'CartItem',
  component: CartItem,
  argTypes: {
    name: { control: 'text' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<CartItemProps> = (args) => <CartItem {...args} />;

Default.args = { ...mock };
