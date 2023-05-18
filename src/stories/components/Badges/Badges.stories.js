import { Badges } from './Badges';
import { BadgeGroup } from '../badge-group/BadgeGroup';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Badges/Badges',
  component: Badges,
  tags: ['autodocs'],
  excludePropTypes: ['color'],
};

const Badge = (args) => <Badges {...args} />;
export const badge = Badge.bind({});
badge.args = {
  text: 'Label',
  size: 'sm',
  color: 'gray',
  outline: 'false',
  icon: 'false',
  iconAvatar: 'avatar',
  iconCountry: 'country',
  iconDotLeading: 'dot',
  iconDotTrailing: 'false',
  iconXCloseLeading: 'false',
  iconXCloseTrailing: 'xclose',
  iconArrowRightLeading: 'false',
  iconArrowRightTrailing: 'arrowRight',
  iconArrowUpLeading: 'arrowUp',
  iconArrowUpTrailing: 'false',
  iconOnly: 'only',
};
badge.argTypes = {
  iconAvatar: {
    control: 'text',
    if: { arg: 'icon', eq: 'avatar' },
  },
  iconCountry: {
    control: 'text',
    if: { arg: 'icon', eq: 'country' },
  },
  text: {
    control: 'text',
    if: { arg: 'icon', neq: 'only' },
  },
  iconDotLeading: {
    control: 'text',
    if: { arg: 'icon', eq: 'dot' },
  },
  iconDotTrailing: {
    control: 'text',
    if: { arg: 'icon', eq: 'dot' },
  },
  iconXCloseLeading: {
    control: 'text',
    if: { arg: 'icon', eq: 'xclose' },
  },
  iconXCloseTrailing: {
    control: 'text',
    if: { arg: 'icon', eq: 'xclose' },
  },
  iconArrowRightLeading: {
    control: 'text',
    if: { arg: 'icon', eq: 'arrowRight' },
  },
  iconArrowRightTrailing: {
    control: 'text',
    if: { arg: 'icon', eq: 'arrowRight' },
  },
  iconArrowUpLeading: {
    control: 'text',
    if: { arg: 'icon', eq: 'arrowUp' },
  },
  iconArrowUpTrailing: {
    control: 'text',
    if: { arg: 'icon', eq: 'arrowUp' },
  },
  iconOnly: {
    control: 'text',
    if: { arg: 'icon', eq: 'only' },
  },
};

const Badge_Group = (args) => <BadgeGroup {...args} />;
export const badge_group = Badge_Group.bind({});
badge_group.args = {
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
};
badge_group.argTypes = {
  icon: { table: { disable: true } },
  colorBadge: { table: { disable: true } },
  sizeBadge: { table: { disable: true } },
  iconBadge: { table: { disable: true } },
  color: {
    options: ['primary', 'gray', 'error', 'warning', 'success'],
    control: { type: 'radio' },
  },
  size: {
    options: ['md', 'lg'],
    control: { type: 'radio' },
  },
  theme: {
    options: ['light', 'medium', 'dark', 'outline'],
    control: { type: 'radio' },
  },
  badge: {
    options: ['leading', 'trailing'],
    control: { type: 'radio' },
  },
  outline: { table: { disable: true } },
  iconAvatar: { table: { disable: true } },
  iconCountry: { table: { disable: true } },
  iconDotLeading: { table: { disable: true } },
  iconDotTrailing: { table: { disable: true } },
  iconXCloseLeading: { table: { disable: true } },
  iconXCloseTrailing: { table: { disable: true } },
  iconArrowRightLeading: { table: { disable: true } },
  iconArrowRightTrailing: { table: { disable: true } },
  iconArrowUpLeading: { table: { disable: true } },
  iconArrowUpTrailing: { table: { disable: true } },
  iconOnly: { table: { disable: true } },
};
