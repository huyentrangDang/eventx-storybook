import { Button } from "./Button"


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Buttons/Buttons',
  component: Button,
  tags: ['autodocs'],
  excludePropTypes: ['hierarchy'],
  argTypes: {
    hierarchy: { table: { disable: true } },
  },
  excludeProps: ['hierarchy'],
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const button_primary = {
  args: {
    hierarchy: 'primary',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    // icon: 'default',
    showIconLeading: 'true',
    showiconTrailing: 'true',
    text: "Button CTA",
    iconLeading: "default",
    iconTrailing: "default",
  }
}
export const button_secondaryGray = {
  args: {
    hierarchy: 'secondaryGray',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    // icon: 'default',
    showIconLeading: 'true',
    showiconTrailing: 'true',
    text: "Button CTA",
    iconLeading: "default",
    iconTrailing: "default",
  }
}
export const button_secondaryColor = {
  args: {
    hierarchy: 'secondaryColor',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    // icon: 'default',
    showIconLeading: 'true',
    showiconTrailing: 'true',
    text: "Button CTA",
    iconLeading: "default",
    iconTrailing: "default",
  }
}
export const button_tertiaryGray = {
  args: {
    hierarchy: 'tertiaryGray',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    // icon: 'default',
    showIconLeading: 'true',
    showiconTrailing: 'true',
    text: "Button CTA",
    iconLeading: "default",
    iconTrailing: "default",
  }
}

export const button_tertiaryColor = {
  args: {
    hierarchy: 'tertiaryColor',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    // icon: 'default',
    showIconLeading: 'true',
    showiconTrailing: 'true',
    text: "Button CTA",
    iconLeading: "default",
    iconTrailing: "default",
  }
}
export const button_linkGray = {
  args: {
    hierarchy: 'linkGray',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    // icon: 'default',
    showIconLeading: 'true',
    showiconTrailing: 'true',
    text: "Button CTA",
    iconLeading: "default",
    iconTrailing: "default",
  }
}
export const button_linkColor = {
  args: {
    hierarchy: 'linkColor',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    // icon: 'default',
    showIconLeading: 'true',
    showiconTrailing: 'true',
    text: "Button CTA",
    iconLeading: "default",
    iconTrailing: "default",
  }
}