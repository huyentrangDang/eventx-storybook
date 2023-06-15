import { DatePickerListItem } from './DatePickerListItem';

export default {
  title: 'Application Components/Datetime Pickers/DatePicker List Item',
  component: DatePickerListItem,
  tags: ['autodocs'],
};

const DatePickerListItems = (args) => <DatePickerListItem {...args} />;
export const datePickerListItem = DatePickerListItems.bind({});
datePickerListItem.args = {
  selected: 'false',
  state: 'default',
};
datePickerListItem.argTypes = {};
