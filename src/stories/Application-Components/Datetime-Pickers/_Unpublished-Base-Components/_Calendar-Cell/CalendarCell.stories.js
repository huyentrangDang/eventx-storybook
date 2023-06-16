import { CalendarCell } from './CalendarCell';

export default {
  title:
    'Application Components/Datetime Pickers/_Unpublished Base Components/_Calendar Cell',
  component: CalendarCell,
  tags: ['autodocs'],
  argTypes: {},
};

export const Calendar_Cell = {
  args: {
    text: '1',
    activeDot: 'false',
    type: 'in-active',
    position: 'leading-trailing',
    state: 'default',
  },
};
