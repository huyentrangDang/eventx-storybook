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
    icon: 'default',
    iconLeading: 'true',
    iconTrailing: 'true',
    text: "Button CTA"
  }
}
export const button_secondaryGray = {
  args: {
    hierarchy: 'secondaryGray',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    iconLeading: 'true',
    iconTrailing: 'true',
    text: "Button CTA"
  }
}
export const button_secondaryColor = {
  args: {
    hierarchy: 'secondaryColor',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    iconLeading: 'true',
    iconTrailing: 'true',
    text: "Button CTA"
  }
}
export const button_tertiaryGray = {
  args: {
    hierarchy: 'tertiaryGray',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    iconLeading: 'true',
    iconTrailing: 'true',
    text: "Button CTA"
  }
}

export const button_tertiaryColor = {
  args: {
    hierarchy: 'tertiaryColor',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    iconLeading: 'true',
    iconTrailing: 'true',
    text: "Button CTA"
  }
}
export const button_linkGray = {
  args: {
    hierarchy: 'linkGray',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    iconLeading: 'true',
    iconTrailing: 'true',
    text: "Button CTA"
  }
}
export const button_linkColor = {
  args: {
    hierarchy: 'linkColor',
    size: 'sm',
    state: 'default',
    destructive: 'false',
    icon: 'default',
    iconLeading: 'true',
    iconTrailing: 'true',
    text: "Button CTA"
  }
}

// export const size_md_hierarchy_primary_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_primary_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_primary_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_primary_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// //// SecondaryGray
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }
// /// gray color
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }
// ///tertiaryGray
// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// //tertiaryColor
// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }
// /// linkGray
// //linkGray
// export const size_sm_hierarchy_linkGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// /// linkColor
// //linkColor
// export const size_sm_hierarchy_linkColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'default'
//   }
// }



// //// primaryDestructiveTrue
// export const size_sm_hierarchy_primary_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_primary_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_primary_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_primary_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_primary_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_primary_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_primary_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_primary_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_primary_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///secondaryGrayDestructiveTrue
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///SecondaryColor
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///tertiaryGray

// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }


// ///tertiaryColor

// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///linkGray

// export const size_sm_hierarchy_linkGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_linkGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_linkGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///linkColor

// export const size_sm_hierarchy_linkColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_linkColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'default'
//   }
// }
// ///
// export const size_sm_hierarchy_linkColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_default_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'default'
//   }
// }

// ////// Icon dot leading
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }
// /// gray color
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }
// ///tertiaryGray
// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// //tertiaryColor
// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }
// /// linkGray
// //linkGray
// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// /// linkColor
// //linkColor
// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'default',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveFalse_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: false,
//     icon: 'dotLeading'
//   }
// }



// //// primaryDestructiveTrue
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_primary_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_primary_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_primary_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_primary_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'primary',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///secondaryGrayDestructiveTrue
// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///SecondaryColor
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_secondaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'secondaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///tertiaryGray

// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }


// ///tertiaryColor

// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_tertiaryColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'tertiaryColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///linkGray

// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkGray_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkGray',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///linkColor

// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_default = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'default',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// ///
// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_hover = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'hover',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_focused = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'focused',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
// ///
// export const size_sm_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'sm',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_md_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'md',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_lg_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'lg',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: 'xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }

// export const size_2xl_hierarchy_linkColor_icon_dotLeading_destructiveTrue_state_disabled = {
//   args: {
//     hierarchy: 'linkColor',
//     size: '2xl',
//     state: 'disabled',
//     destructive: true,
//     icon: 'dotLeading'
//   }
// }
