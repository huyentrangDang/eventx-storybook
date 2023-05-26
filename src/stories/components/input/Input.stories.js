import { InputField } from './InputField';
import { TextAreaInputField } from './TextAreaInputField';

export default {
  title: 'Input/Input Fields',
  component: InputField,
  tags: ['autodocs'],
};

const Input_Field = (args) => <InputField {...args} />;
export const input_field = Input_Field.bind({});
input_field.args = {
  label: 'Email',
  size: 'sm',
  state: 'placeholder',
  destructive: 'false',
  type: 'default',
  hintText: 'This is a hint text to help user.',
  text: 'olivia@untitledui.com',
};

const TextArea_InputField = (args) => <TextAreaInputField {...args} />;
export const textArea_inputField = TextArea_InputField.bind({});
textArea_inputField.args = {
  label: 'Description',
  state: 'placeholder',
  destructive: 'false',
  type: 'default',
  hintText: 'This is a hint text to help user.',
};
textArea_inputField.argTypes = {
  size: { table: { disable: true } },
  state: {
    control: 'radio',
    options: ['placeholder', 'default', 'focused', 'disabled'],
  },
  type: {
    control: 'radio',
    options: ['tags', 'default'],
  },
};
