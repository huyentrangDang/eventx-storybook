import { BadgeIcon } from './BadgeIcon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Badges/Badge Icon',
  component: BadgeIcon,
  tags: ['autodocs'],
  argTypes: {
    color: { table: { disable: true } },
    icon: { table: { disable: true } },
  },
  excludeProps: ['icon'],
};
export const badge_icon_gray = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'gray',
    outline: 'false',
  },
};
export const badge_icon_primary = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'primary',
    outline: 'false',
  },
};
export const badge_icon_error = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'error',
    outline: 'false',
  },
};
export const badge_icon_warning = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'warning',
    outline: 'false',
  },
};

export const badge_icon_success = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'success',
    outline: 'false',
  },
};
export const badge_icon_blueGray = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'blueGray',
    outline: 'false',
  },
};
export const badge_icon_blueLight = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'blueLight',
    outline: 'false',
  },
};
export const badge_icon_blue = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'blue',
    outline: 'false',
  },
};
export const badge_icon_indigo = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'indigo',
    outline: 'false',
  },
};
export const badge_icon_purple = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'purple',
    outline: 'false',
  },
};
export const badge_icon_pink = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'pink',
    outline: 'false',
  },
};
export const badge_icon_rose = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'rose',
    outline: 'false',
  },
};
export const badge_icon_orange = {
  args: {
    size: 'sm',
    icon: 'only',
    color: 'orange',
    outline: 'false',
  },
};
