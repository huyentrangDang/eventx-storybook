import { Checkbox } from './Checkbox';
export default {
  title: 'Components/Checkboxes/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export const checkbox = Checkbox.bind({});
checkbox.args = {
  text: 'Remember me',
  supportingText: 'Save my login details for next time.',
  checked: 'false',
  indeterminate: 'false',
  size: 'sm',
  type: 'checkbox',
  state: 'default',
  showText: 'false',
};
checkbox.argTypes = {
  text: {
    control: 'text',
    if: { arg: 'showText', eq: 'true' },
  },
  supportingText: {
    control: 'text',
    if: { arg: 'showText', eq: 'true' },
  },
};
