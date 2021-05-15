import { Story, Meta } from '@storybook/react/types-6-0';
import ItemForm, { ItemFormProps } from '.';

export default {
  title: 'ItemForm',
  component: ItemForm
} as Meta;

export const Default: Story<ItemFormProps> = (args) => <ItemForm {...args} />;

Default.args = {
  onCompleted: () => null
};
