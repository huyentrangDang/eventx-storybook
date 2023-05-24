import { Dropdown } from './Dropdown';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { CompanyDropdown } from './CompanyDropdown';

export default {
  title: 'Dropdowns/Dropdown & Company Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'radio',
      options: ['true', 'false'],
    },
  },
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
};

dropdown.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getAllByTestId('menu-dropdown')).toBeInTheDocument();
};

// Company Dropdown
const CompanyDropdowns = (args) => <CompanyDropdown {...args} />;
export const company_dropdown = CompanyDropdowns.bind({});
company_dropdown.args = {
  open: 'false',
};
company_dropdown.argTypes = {
  type: { table: { disable: true } },
};
