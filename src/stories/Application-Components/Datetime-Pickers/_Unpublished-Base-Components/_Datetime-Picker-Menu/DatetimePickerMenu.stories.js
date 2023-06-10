import { DatetimePickerMenu } from './DatetimePickerMenu';

export default {
  title:
    'Application Components/Datetime Pickers/_Unpublished Base Components/_Datetime Picker Menu',
  component: DatetimePickerMenu,
  tags: ['autodocs'],
  argTypes: {},
};

export const Datetime_picker_menu = {
  args: {
    type: 'pre-set-ranges',
    actions: 'true',
    timePicker: 'false',
    breakpoint: 'desktop',
  },
};
