import { DatetimePickerMenu } from './DatetimePickerMenu';

export default {
  title:
    'Application Components/Datetime Pickers/_Unpublished Base Components/_Datetime Picker Menu',
  component: DatetimePickerMenu,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      table: {
        disable: true,
      },
    },
    breakpoint: {
      table: {
        disable: true,
      },
    },
  },
};

export const Datetime_picker_menu = {
  args: {
    type: 'pre-set-ranges',
    // actions: 'false',
    timePicker: 'false',
    breakpoint: 'desktop',
  },
};
