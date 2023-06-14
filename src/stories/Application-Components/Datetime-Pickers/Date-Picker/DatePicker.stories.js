import { DatePicker } from './DatePicker';
export default {
  title: 'Application Components/Datetime Pickers/Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
};

const DatePickers = (args) => <DatePicker {...args} />;
export const datePicker = DatePickers.bind({});
datePicker.args = {
  legend: 'false',
};
