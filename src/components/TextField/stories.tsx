import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />;

Default.args = {
  label: 'Name',
  placeholder: 'Enter a name'
};

export const Small: Story<TextFieldProps> = (args) => <TextField {...args} />;

Small.args = {
  label: 'Name',
  placeholder: 'Enter a name',
  inputSize: 'small'
};
