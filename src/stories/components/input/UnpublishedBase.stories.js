import { MegaInputFieldBase } from './MegaInputFieldBase';
import { EditorIcon } from './EditorIcon';

export default {
  title: 'Input/_Unpublished Base Component',
  component: MegaInputFieldBase,
  tags: ['autodocs'],
};

const MegaInputField_Base = (args) => <MegaInputFieldBase {...args} />;
export const mega_inputfield_base = MegaInputField_Base.bind({});
mega_inputfield_base.args = {
  state: 'placeholder',
  size: 'sm',
};

const Editor_Icons = (args) => <EditorIcon {...args} />;
export const editor_icon = Editor_Icons.bind({});
editor_icon.args = {
  active: 'true',
  type: 'listNumbers',
  theme: 'dark',
};
editor_icon.argTypes = {
  size: { table: { disable: true } },
  state: { table: { disable: true } },
  type: {
    control: 'select',
    options: [
      'listNumbers',
      'listBullet',
      'photo',
      'link',
      'quote',
      'h2',
      'h1',
      'italic',
      'bold',
    ],
  },
  active: {
    control: 'radio',
    options: ['true', 'false'],
  },
  theme: {
    control: 'radio',
    options: ['light', 'dark'],
  },
};
