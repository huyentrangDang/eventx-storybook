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
checkbox_group_item.argTypes = {};
