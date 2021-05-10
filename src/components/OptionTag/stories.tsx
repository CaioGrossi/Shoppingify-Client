import { Story, Meta } from '@storybook/react/types-6-0';
import OptionTag, { OptionTagProps } from '.';
import { optionMock } from './mock';

export default {
  title: 'OptionTag',
  component: OptionTag
} as Meta;

export const Default: Story<OptionTagProps> = (args) => <OptionTag {...args} />;

Default.args = {
  ...optionMock
};
