import { Story, Meta } from '@storybook/react/types-6-0';
import DataListField, { DataListFieldProps } from '.';

import { dataListMock } from './mock';

export default {
  title: 'DataListField',
  component: DataListField
} as Meta;

export const Default: Story<DataListFieldProps> = (args) => (
  <DataListField {...args} />
);

Default.args = {
  ...dataListMock
};
