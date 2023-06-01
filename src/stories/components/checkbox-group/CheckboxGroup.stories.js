import { CheckboxGroup } from './CheckboxGroup';

export default {
  title: 'Components/Checkbox Groups/Checkbox Group',
  component: CheckboxGroup,
  tags: ['autodocs'],
};

const Checkbox_Group = (args) => <CheckboxGroup {...args} />;
export const checkbox_group = Checkbox_Group.bind({});
checkbox_group.args = {
  size: 'sm',
  type: 'iconSimple',
  breakpoint: 'desktop',
  text: 'Basic plan',
  subText: '$10/month',
};
checkbox_group.argTypes = {
  text: { table: { disable: true } },
  subText: { table: { disable: true } },
};
