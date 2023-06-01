import { DropdownListItem } from './DropdownListItem';
import { DropdownListHeader } from './DropdownListHeader';
import { Scrollbar } from './Scrollbar';
import { InputDropdownMenuItem } from './InputDropdownMenuItem';

export default {
  title: 'Components/Dropdowns/_Unpublished Base Components',
  component: DropdownListItem,
  tags: ['autodocs'],
};

// Dropdown List Items

const DropdownListItems = (args) => <DropdownListItem {...args} />;
export const dropdown_listitem = DropdownListItems.bind({});
dropdown_listitem.args = {
  text: 'Placeholder',
  icon: 'false',
  iconLeading: 'true',
  checkbox: 'false',
  state: 'default',
};
dropdown_listitem.argTypes = {
  iconLeading: {
    control: 'text',
    if: { arg: 'icon', eq: 'true' },
  },
};

// Dropdown List Header

const DropdownListHeaders = (args) => <DropdownListHeader {...args} />;
export const dropdown_list_header = DropdownListHeaders.bind({});
dropdown_list_header.args = {
  type: 'avatarGroup',
  text: 'Olivia Rhye',
  supportText: 'olivia@untitledui.com',
};
dropdown_list_header.argTypes = {
  icon: { table: { disable: true } },
  iconLeading: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  state: { table: { disable: true } },
  textTagCount: { table: { disable: true } },
  type: {
    control: 'radio',
    options: ['header', 'avatarGroup'],
  },
};

// InputDropdownMenuItems

const InputDropdownMenuItems = (args) => <InputDropdownMenuItem {...args} />;
export const input_dropdown_menu_item = InputDropdownMenuItems.bind({});
input_dropdown_menu_item.args = {
  type: 'default',
  selected: 'false',
  state: 'default',
  text: 'Olivia Rhye',
  supportText: '@olivia',
  iconDotLeading: 'dotLeading',
};
input_dropdown_menu_item.argTypes = {
  icon: { table: { disable: true } },
  iconLeading: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  type: {
    control: 'radio',
    options: [
      'default',
      'dotLeading',
      'iconLeading',
      'avatarLeading',
      'company',
    ],
  },
  state: {
    control: 'radio',
    options: ['default', 'hover', 'focus', 'disabled'],
  },
  selected: {
    control: 'radio',
    options: ['true', 'false'],
  },
  iconDotLeading: { control: 'text', if: { arg: 'type', eq: 'dotLeading' } },
};

input_dropdown_menu_item.play = async ({ canvasElement, args }) => {};

//Scrollbar

const Scrollbars = (args) => <Scrollbar {...args} />;
export const scrollbar = Scrollbars.bind({});
scrollbar.args = {
  length: '25',
};
scrollbar.argTypes = {
  icon: { table: { disable: true } },
  iconLeading: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  state: { table: { disable: true } },
  supportText: { table: { disable: true } },
  type: { table: { disable: true } },
  text: { table: { disable: true } },
  length: {
    control: 'radio',
    options: ['25', '50', '75'],
  },
};
