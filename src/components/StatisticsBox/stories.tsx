import { Story, Meta } from '@storybook/react/types-6-0';
import StatisticsBox, { StatisticsBoxProps } from '.';

import { statisticsMock } from './mock';
export default {
  title: 'StatisticsBox',
  component: StatisticsBox
} as Meta;

export const Default: Story<StatisticsBoxProps> = (args) => (
  <StatisticsBox {...args} />
);

Default.args = statisticsMock;
