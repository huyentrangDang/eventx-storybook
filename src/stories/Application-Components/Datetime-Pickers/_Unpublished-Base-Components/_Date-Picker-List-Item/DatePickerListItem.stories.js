import { DatePickerListItem } from './DatePickerListItem';

export default {
  title: 'Application Components/Datetime Pickers/DatePickerListItem',
  component: DatePickerListItem,
  tags: ['autodocs'],
};

const DatePickerListItems = (args) => <DatePickerListItem {...args} />;
export const datePickerListItem = DatePickerListItems.bind({});
datePickerListItem.args = {};
datePickerListItem.argTypes = {
  //   textFirst: { table: { disable: true } },
  //   textDestination: { table: { disable: true } },
};
