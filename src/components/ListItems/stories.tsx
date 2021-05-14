import { Story, Meta } from '@storybook/react/types-6-0';
import ItemsList, { ItemsListProps } from '.';

import { cartItemMock, checkListMock } from './mock';

export default {
  title: 'ItemsList',
  component: ItemsList,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta;

export const Default: Story<ItemsListProps> = (args) => <ItemsList {...args} />;

Default.args = {
  itemsSections: cartItemMock
};

export const CheckList: Story<ItemsListProps> = (args) => (
  <ItemsList {...args} checkList />
);

CheckList.args = {
  itemsSections: checkListMock
};
