import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/datetime-picker.css';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export const DatetimePickerMenu = ({
  type,
  actions,
  timePicker,
  breakpoint,
}) => {
  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
    }
  };

  const today = dayjs();
  const prevWeek = today.subtract(7, 'day');
  const prevMonth = today.subtract(4, 'week');
  const prevYear = today.subtract(12, 'month');
  const rangePresets = [
    {
      label: 'Today',
      value: [today.startOf('day'), today.endOf('day')],
    },
    {
      label: 'Yesterday',
      value: [
        today.subtract(1, 'day').startOf('day'),
        today.subtract(1, 'day').endOf('day'),
      ],
    },
    {
      label: 'This Week',
      value: [today.startOf('week'), today.endOf('week')],
    },
    {
      label: 'Last Week',
      value: [prevWeek.startOf('week'), prevWeek.endOf('week')],
    },
    {
      label: 'This Month',
      value: [today.startOf('month'), today.endOf('month')],
    },
    {
      label: 'Last Month',
      value: [prevMonth.startOf('month'), prevMonth.endOf('month')],
    },
    {
      label: 'This Year',
      value: [today.startOf('year'), today.endOf('year')],
    },
    {
      label: 'Last Year',
      value: [prevYear.startOf('year'), prevYear.endOf('year')],
    },
  ];

  const eventDates = [
    new Date('2023-06-10'),
    new Date('2023-06-15'),
    new Date('2023-06-20'),
  ];

  const dateRender = (current) => {
    const formattedDate = current.format('YYYY-MM-DD');
    const isEventDate = eventDates.includes(formattedDate);

    if (isEventDate) {
      return (
        <div className='event-cell'>
          <div className='event-date'>{current.date()}</div>
          <icon className='dot-time' />
        </div>
      );
    }

    return current.date();
  };

  return (
    <>
      <div className={`datetime-picker`}>
        {type === 'pre-set-ranges' ? (
          <RangePicker
            presets={rangePresets}
            showTime={timePicker === 'true' ? true : false}
            format='YYYY/MM/DD HH:mm:ss'
            onChange={onRangeChange}
            getPopupContainer={(trigger) => {
              return trigger;
            }}
            // dateRender={dateRender}
          />
        ) : (
          <RangePicker
            showTime={timePicker === 'true' ? true : false}
            format='YYYY/MM/DD HH:mm:ss'
            onChange={onRangeChange}
            getPopupContainer={(trigger) => {
              return trigger;
            }}
            // dateRender={dateRender}
          />
        )}
      </div>
    </>
  );
};

DatetimePickerMenu.propTypes = {
  type: PropTypes.oneOf(['pre-set-ranges', 'dual-dates']),
  actions: PropTypes.oneOf(['true', 'false']),
  timePicker: PropTypes.oneOf(['true', 'false']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
