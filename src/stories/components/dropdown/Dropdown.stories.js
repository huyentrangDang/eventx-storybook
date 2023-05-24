import { DropdownListItem } from './DropdownListItem';
import { DropdownListHeader } from './DropdownListHeader';
import { Scrollbar } from './Scrollbar';
import { InputDropdownMenuItem } from './InputDropdownMenuItem';
import { Dropdown } from './Dropdown';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CompanyDropdown } from './CompanyDropdown';
import { InputDropdown } from './InputDropdown';

export default {
  title: 'Dropdowns/Dropdowns',
  component: DropdownListItem,
  tags: ['autodocs'],
};

// Tags

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

input_dropdown_menu_item.play = async ({ canvasElement, args }) => {
  // console.log({ canvasElement, args });
};

// Dropdown
const Dropdowns = (args) => <Dropdown {...args} />;
export const dropdown = Dropdowns.bind({});
dropdown.args = {
  open: 'false',
  type: 'icon',
};
dropdown.argTypes = {
  type: {
    control: 'radio',
    options: ['button', 'icon', 'avatar'],
  },
  open: {
    control: 'radio',
    options: ['true', 'false'],
  },
  icon: { table: { disable: true } },
  iconLeading: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  text: { table: { disable: true } },
  state: { table: { disable: true } },
};

// the play function comes into use
dropdown.play = async ({ canvasElement }) => {
  // start querying the component from its root element
  const canvas = within(canvasElement);
  // the key part, where the interactions are defined
  // Simulate interactions with the component
  //   await userEvent.type(canvas.getByTestId('test'), 'Account');
  //   await userEvent.type(canvas.getByTestId('password'), 'a-due-password');
  await userEvent.click(canvas.getByRole('button'));
  // assert DOM structure
  await expect(canvas.getAllByTestId('menu-dropdown')).toBeInTheDocument();
};

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

// Company Dropdown
const CompanyDropdowns = (args) => <CompanyDropdown {...args} />;
export const company_dropdown = CompanyDropdowns.bind({});
company_dropdown.args = {
  open: 'false',
};
company_dropdown.argTypes = {
  open: {
    control: 'radio',
    options: ['true', 'false'],
  },
  icon: { table: { disable: true } },
  iconLeading: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  text: { table: { disable: true } },
  state: { table: { disable: true } },
};

// Input Dropdown
const InputDropdowns = (args) => <InputDropdown {...args} />;
export const input_dropdown = InputDropdowns.bind({});
input_dropdown.args = {
  type: 'default',
  state: 'placeholder',
  label: 'Team member',
  hintText: 'This is a hint text to help user.',
};
input_dropdown.argTypes = {
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
  icon: { table: { disable: true } },
  iconLeading: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  text: { table: { disable: true } },
};
