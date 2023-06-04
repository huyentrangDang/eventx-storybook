import { ButtonGroupBase } from '../button-group-base/ButtonGroupBase';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Components/Button Groups',
  component: ButtonGroup,
  tags: ['autodocs'],
};

const Button_Group = (args) => <ButtonGroup {...args} />;
export const button_group = Button_Group.bind({});
button_group.args = {
  icon: 'false',
  buttonArray: [
    {
      current: 'false',
      state: 'default',
      text: 'Text',
      iconLeading: 'circle_gray500',
      iconTrailing: 'circle_gray500',
      iconOnly: 'arrow_left_gray500',
    },
    {
      current: 'false',
      state: 'default',
      text: 'Text',
      iconLeading: 'circle_gray500',
      iconTrailing: 'circle_gray500',
      iconOnly: 'icon-plus-gray500',
    },
    {
      current: 'false',
      state: 'default',
      text: 'Text',
      iconLeading: 'circle_gray500',
      iconTrailing: 'circle_gray500',
      iconOnly: 'arrow_right_gray500',
    },
  ],
};
button_group.argTypes = {
  buttonArray: { table: { disable: true } },
  // buttonArray: {
  //   type: {
  //     summary: 'Array of objects',
  //   },
  //   control: {
  //     type: 'array',
  //     separator: ',',
  //     item: {
  //       type: 'object',
  //       properties: {
  //         current: {
  //           type: 'text',
  //         },
  //         state: {
  //           type: 'text',
  //         },
  //         iconLeading: {
  //           type: 'text',
  //         },
  //         iconTrailing: {
  //           type: 'text',
  //         },
  //         iconOnly: {
  //           type: 'text',
  //         },
  //         text: {
  //           type: 'text',
  //         },
  //       },
  //     },
  //   },
  // },
};

const Button_Group_Base = (args) => <ButtonGroupBase {...args} />;
export const button_group_base = Button_Group_Base.bind({});
button_group_base.args = {
  text: 'Text',
  current: 'false',
  icon: 'false',
  state: 'default',
  iconLeading: 'leading',
  iconTrailing: 'trailing',
  iconDotLeading: 'dotLeading',
  iconOnly: 'leading',
};
button_group_base.argTypes = {
  text: {
    control: 'text',
    if: { arg: 'icon', neq: 'only' },
  },
  iconLeading: {
    control: 'text',
    if: { arg: 'icon', eq: 'leading' },
  },
  iconTrailing: {
    control: 'text',
    if: { arg: 'icon', eq: 'trailing' },
  },
  iconDotLeading: {
    control: 'text',
    if: { arg: 'icon', eq: 'dotLeading' },
  },
  iconOnly: {
    control: 'text',
    if: { arg: 'icon', eq: 'only' },
  },
};
