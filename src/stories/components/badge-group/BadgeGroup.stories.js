import { BadgeGroup } from './BadgeGroup';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'BadgeGroup/BadgeGroup',
  component: BadgeGroup,
  tags: ['autodocs'],
  excludePropTypes: ['color'],
  argTypes: {
    color: { table: { disable: true } },
    icon: { table: { disable: true } },
    colorBadge: { table: { disable: true } },
    sizeBadge: { table: { disable: true } },
    iconBadge: { table: { disable: true } },
  },
};

export const badge_primary = {
  args: {
    color: 'primary',
    colorBadge: 'baseWhite',
    size: 'md',
    sizeBadge: 'sm',
    theme: 'light',
    icon: 'true',
    iconBadge: 'trailing',
    text: 'New feature',
    textBadge: 'We’ve just released a new feature',
    badge: 'leading',
  },
};
export const badge_gray = {
  args: {
    color: 'gray',
    colorBadge: 'baseWhite',
    size: 'md',
    sizeBadge: 'sm',
    theme: 'light',
    icon: 'true',
    iconBadge: 'trailing',
    text: 'Version 4.0',
    textBadge: 'We’ve just released a new feature',
    badge: 'leading',
  },
};
export const badge_error = {
  args: {
    color: 'error',
    colorBadge: 'baseWhite',
    size: 'md',
    sizeBadge: 'sm',
    theme: 'light',
    icon: 'true',
    iconBadge: 'trailing',
    text: 'Fix now',
    textBadge: 'There was a problem with that action',
    badge: 'leading',
  },
};
export const badge_warning = {
  args: {
    color: 'warning',
    colorBadge: 'baseWhite',
    size: 'md',
    sizeBadge: 'sm',
    theme: 'light',
    icon: 'true',
    iconBadge: 'trailing',
    text: 'Warning',
    textBadge: 'Just to let you know this might be a problem',
    badge: 'leading',
  },
};
export const badge_success = {
  args: {
    color: 'success',
    colorBadge: 'baseWhite',
    size: 'md',
    sizeBadge: 'sm',
    theme: 'light',
    icon: 'true',
    iconBadge: 'trailing',
    text: 'New feature',
    textBadge: 'You’ve updated your profile and details',
    badge: 'leading',
  },
};
