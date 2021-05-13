import { Story, Meta } from '@storybook/react/types-6-0';
import CheckListItem, { CheckListItemProps } from '.';

import { mock } from './mock';

export default {
  title: 'CheckListItem',
  component: CheckListItem
} as Meta;

export const Default: Story<CheckListItemProps> = (args) => (
  <CheckListItem {...args} />
);

Default.args = mock;
