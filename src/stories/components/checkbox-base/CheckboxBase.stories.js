import { CheckboxBase } from './CheckboxBase';
export default {
  title: 'Components/Checkboxes/Checkbox base',
  component: CheckboxBase,
  tags: ['autodocs'],
};
const CheckboxBases = (args) => <CheckboxBase {...args} />;

export const checkboxBase = CheckboxBases.bind({});
checkboxBase.args = {
  checked: 'false',
  indeterminate: 'false',
  size: 'sm',
  type: 'checkbox',
  state: 'default',
};
