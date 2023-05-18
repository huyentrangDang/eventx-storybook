import { BadgeGroup } from './BadgeGroup';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'BadgeGroup/BadgeGroup',
  component: BadgeGroup,
  tags: ['autodocs'],
  argTypes: {
    icon: { table: { disable: true } },
    colorBadge: { table: { disable: true } },
    sizeBadge: { table: { disable: true } },
    iconBadge: { table: { disable: true } },
  },
};

export const Badge_Group = {
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
    iconTrailing: 'trailing',
  },
};