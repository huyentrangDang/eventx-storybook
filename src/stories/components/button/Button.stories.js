import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Buttons/Buttons',
  component: Button,
  tags: ['autodocs'],
  excludePropTypes: ['hierarchy'],
  argTypes: {},
  excludeProps: ['hierarchy'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const button = {
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