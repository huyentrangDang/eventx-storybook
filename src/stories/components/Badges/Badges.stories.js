import { Badges } from './Badges';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Badges/Badges',
  component: Badges,
  tags: ['autodocs'],
  excludePropTypes: ['color'],
  argTypes: {
    color: { table: { disable: true } },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const badge_gray = {
  args: {
    color: 'gray',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};
export const badge_primary = {
  args: {
    color: 'primary',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};
export const badge_error = {
  args: {
    color: 'error',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};
export const badge_warning = {
  args: {
    color: 'warning',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};

export const badge_success = {
  args: {
    color: 'success',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};
export const badge_blueGray = {
  args: {
    color: 'blueGray',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};
export const badge_blueLight = {
  args: {
    color: 'blueLight',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};
export const badge_indigo = {
  args: {
    color: 'indigo',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};

export const badge_purple = {
  args: {
    color: 'purple',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};

export const badge_pink = {
  args: {
    color: 'pink',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};

export const badge_rose = {
  args: {
    color: 'rose',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};

export const badge_orange = {
  args: {
    color: 'orange',
    size: 'sm',
    outline: 'false',
    icon: 'false',
    text: 'Label',
  },
};
