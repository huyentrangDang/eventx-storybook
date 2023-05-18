import { Badges } from './Badges';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Badges/Badges',
  component: Badges,
  tags: ['autodocs'],
  excludePropTypes: ['color'],
  argTypes: {
    // color: { table: { disable: true } },
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
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badge = {
  args: {
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
  },
};
