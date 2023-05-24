import { InputDropdown } from './InputDropdown';

export default {
  title: 'Dropdowns/Input Dropdowns',
  component: InputDropdown,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: [
        'default',
        'iconLeading',
        'avatarLeading',
        'dotLeading',
        'search',
        'tags',
      ],
    },
    state: {
      control: 'radio',
      options: ['placeholder', 'default', 'open', 'disabled', 'focused'],
    },
  },
};

const InputDropdowns = (args) => <InputDropdown {...args} />;
export const input_dropdown = InputDropdowns.bind({});
input_dropdown.args = {
  type: 'default',
  state: 'placeholder',
  label: 'Team member',
  hintText: 'This is a hint text to help user.',
};
