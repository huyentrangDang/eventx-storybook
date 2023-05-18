import { Badges } from './Badges';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Badges/Badges',
  component: Badges,
  tags: ['autodocs'],
  excludePropTypes: ['color'],
  argTypes: {
    color: { table: { disable: true } },
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
export const badge_gray = {
  args: {
    color: 'gray',
    text: 'Label',
    size: 'sm',
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
export const badge_primary = {
  args: {
    color: 'primary',
    text: 'Label',
    size: 'sm',
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
export const badge_error = {
  args: {
    color: 'error',
    text: 'Label',
    size: 'sm',
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
export const badge_warning = {
  args: {
    color: 'warning',
    text: 'Label',
    size: 'sm',
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

export const badge_success = {
  args: {
    color: 'success',
    text: 'Label',
    size: 'sm',
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
export const badge_blueGray = {
  args: {
    color: 'blueGray',
    text: 'Label',
    size: 'sm',
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
export const badge_blueLight = {
  args: {
    color: 'blueLight',
    text: 'Label',
    size: 'sm',
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
export const badge_indigo = {
  args: {
    color: 'indigo',
    text: 'Label',
    size: 'sm',
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

export const badge_purple = {
  args: {
    color: 'purple',
    text: 'Label',
    size: 'sm',
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

export const badge_pink = {
  args: {
    color: 'pink',
    text: 'Label',
    size: 'sm',
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

export const badge_rose = {
  args: {
    color: 'rose',
    text: 'Label',
    size: 'sm',
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

export const badge_orange = {
  args: {
    color: 'orange',
    text: 'Label',
    size: 'sm',
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
