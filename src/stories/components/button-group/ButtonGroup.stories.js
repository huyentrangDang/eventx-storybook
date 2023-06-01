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
  text: 'Text',
  current: 'false',
  icon: 'false',
  state: 'default',
  iconLeading: 'leading',
  iconTrailing: 'trailing',
  iconOnly: 'only',
};
button_group.argTypes = {
  current: {
    control: 'radio',
    options: ['true', 'false'],
  },
  icon: {
    options: ['false', 'leading', 'trailing', 'only'],
  },
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
  iconOnly: {
    control: 'text',
    if: { arg: 'icon', eq: 'only' },
  },
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
