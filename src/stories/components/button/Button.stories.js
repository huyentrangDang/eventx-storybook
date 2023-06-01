import { Button } from './Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  excludePropTypes: ['hierarchy'],
  excludeProps: ['hierarchy'],
  argTypes: {
    text: {
      control: 'text',
      if: { arg: 'icon', neq: 'only' },
    },
    showIconLeading: {
      control: 'radio',
      if: { arg: 'icon', neq: 'only' },
    },
    iconLeading: {
      control: 'text',
      if: { arg: 'icon', neq: 'only' },
    },
    showiconTrailing: {
      control: 'radio',
      if: { arg: 'icon', neq: 'only' },
    },
  },
};

export const buttons = {
  args: {
    text: 'Button CTA',
    size: 'sm',
    hierarchy: 'primary',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: 'default',
    showiconTrailing: 'true',
    iconTrailing: 'default',
  },
};
