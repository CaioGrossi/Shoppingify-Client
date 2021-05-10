import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button
} as Meta;

export const Default: Story<ButtonProps> = () => <Button>Save</Button>;

export const Minimal: Story<ButtonProps> = () => (
  <Button minimal={true}>Minimal</Button>
);
