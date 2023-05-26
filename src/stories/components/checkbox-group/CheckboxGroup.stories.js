import { CheckboxGroupItem } from './CheckboxGroupItem';

export default {
  title: 'Checkbox Groups/Checkbox Group Item',
  component: CheckboxGroupItem,
  tags: ['autodocs'],
};

const Checkbox_Group_Item = (args) => <CheckboxGroupItem {...args} />;
export const checkbox_group_item = Checkbox_Group_Item.bind({});
checkbox_group_item.args = {
  selected: 'false',
  size: 'sm',
  type: 'iconSimple',
  state: 'default',
  breakpoint: 'desktop',
  text: 'Basic plan',
  subText1: '$10/month',
  subText2:
    'Includes up to 10 users, 20GB individual data and access to all features.',
};
checkbox_group_item.argTypes = {
  //   current: {
  //     control: 'radio',
  //     options: ['true', 'false'],
  //   },
  //   icon: {
  //     options: ['false', 'leading', 'trailing', 'only'],
  //   },
  //   text: {
  //     control: 'text',
  //     if: { arg: 'icon', neq: 'only' },
  //   },
  //   iconLeading: {
  //     control: 'text',
  //     if: { arg: 'icon', eq: 'leading' },
  //   },
  //   iconTrailing: {
  //     control: 'text',
  //     if: { arg: 'icon', eq: 'trailing' },
  //   },
  //   iconOnly: {
  //     control: 'text',
  //     if: { arg: 'icon', eq: 'only' },
  //   },
};

// const Button_Group_Base = (args) => <ButtonGroupBase {...args} />;
// export const button_group_base = Button_Group_Base.bind({});
// button_group_base.args = {
//   text: 'Text',
//   current: 'false',
//   icon: 'false',
//   state: 'default',
//   iconLeading: 'leading',
//   iconTrailing: 'trailing',
//   iconDotLeading: 'dotLeading',
//   iconOnly: 'leading',
// };
// button_group_base.argTypes = {
//   text: {
//     control: 'text',
//     if: { arg: 'icon', neq: 'only' },
//   },
//   iconLeading: {
//     control: 'text',
//     if: { arg: 'icon', eq: 'leading' },
//   },
//   iconTrailing: {
//     control: 'text',
//     if: { arg: 'icon', eq: 'trailing' },
//   },
//   iconDotLeading: {
//     control: 'text',
//     if: { arg: 'icon', eq: 'dotLeading' },
//   },
//   iconOnly: {
//     control: 'text',
//     if: { arg: 'icon', eq: 'only' },
//   },
// };
