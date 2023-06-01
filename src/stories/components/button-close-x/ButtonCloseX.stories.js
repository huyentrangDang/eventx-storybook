import { ButtonCloseX } from './ButtonCloseX';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Buttons/Button Close X',
  component: ButtonCloseX,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};
export const Button_Close_X = {
  args: {
    size: 'sm',
    color: 'primary',
    theme: 'light',
    state: 'default',
  },
};
