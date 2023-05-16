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
    text: "Button CTA",
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: "default",
    showiconTrailing: 'true',
    iconTrailing: "default",
  }
}
export const button_secondaryGray = {
  args: {
    hierarchy: 'secondaryGray',
    text: "Button CTA",
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: "default",
    showiconTrailing: 'true',
    iconTrailing: "default",
  }
}
export const button_secondaryColor = {
  args: {
    hierarchy: 'secondaryColor',
    text: "Button CTA",
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: "default",
    showiconTrailing: 'true',
    iconTrailing: "default",
  }
}
export const button_tertiaryGray = {
  args: {
    hierarchy: 'tertiaryGray',
    text: "Button CTA",
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: "default",
    showiconTrailing: 'true',
    iconTrailing: "default",
  }
}

export const button_tertiaryColor = {
  args: {
    hierarchy: 'tertiaryColor',
    text: "Button CTA",
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: "default",
    showiconTrailing: 'true',
    iconTrailing: "default",
  }
}
export const button_linkGray = {
  args: {
    hierarchy: 'linkGray',
    text: "Button CTA",
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: "default",
    showiconTrailing: 'true',
    iconTrailing: "default",
  }
}
export const button_linkColor = {
  args: {
    hierarchy: 'linkColor',
    text: "Button CTA",
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    showIconLeading: 'true',
    iconLeading: "default",
    showiconTrailing: 'true',
    iconTrailing: "default",
  }
}

