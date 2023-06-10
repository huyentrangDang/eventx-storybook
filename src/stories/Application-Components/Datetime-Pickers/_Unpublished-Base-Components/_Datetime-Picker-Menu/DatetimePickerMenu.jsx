import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/datetime-picker.css';
import dayjs from 'dayjs';

const shortcutsItems = [
  {
    label: 'Today',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('day'), today.endOf('day')];
    },
  },
  {
    label: 'Yesterday',
    getValue: () => {
      const today = dayjs().subtract(1, 'day');
      return [today.startOf('day'), today.endOf('day')];
    },
  },
  {
    label: 'This Week',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('week'), today.endOf('week')];
    },
  },
  {
    label: 'Last Week',
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, 'day');
      return [prevWeek.startOf('week'), prevWeek.endOf('week')];
    },
  },
  {
    label: 'This Month',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('month'), today.endOf('month')];
    },
  },
  {
    label: 'Last Month',
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(4, 'week');
      return [prevWeek.startOf('month'), prevWeek.endOf('month')];
    },
  },
  {
    label: 'This Year',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('year'), today.endOf('year')];
    },
  },
  {
    label: 'Last Year',
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(12, 'month');
      return [prevWeek.startOf('year'), prevWeek.endOf('year')];
    },
  },
  //   {
  //     label: 'Last 7 Days',
  //     getValue: () => {
  //       const today = dayjs();
  //       return [today.subtract(7, 'day'), today];
  //     },
  //   },
  //   {
  //     label: 'Current Month',
  //     getValue: () => {
  //       const today = dayjs();
  //       return [today.startOf('month'), today.endOf('month')];
  //     },
  //   },
  //   {
  //     label: 'Next Month',
  //     getValue: () => {
  //       const today = dayjs();
  //       const startOfNextMonth = today.endOf('month').add(1, 'day');
  //       return [startOfNextMonth, startOfNextMonth.endOf('month')];
  //     },
  //   },
  //   { label: 'Reset', getValue: () => [null, null] },
];

export const DatetimePickerMenu = ({
  type,
  actions,
  timePicker,
  breakpoint,
}) => {
  return <div className={`datepicker`}></div>;
};

DatetimePickerMenu.propTypes = {
  type: PropTypes.oneOf(['pre-set-ranges']),
  actions: PropTypes.oneOf(['true', 'false']),
  timePicker: PropTypes.oneOf(['true', 'false']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
