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

  const isEventDay = (current) => {
    const events = ['2023-06-10', '2023-06-25', '2023-06-30'];
    const currentDate = current.format('YYYY-MM-DD');
    return events.includes(currentDate);
  };

  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (status) => {
    if (status) {
      setOpen(true);
      setStartDate(null);
      setEndDate(null);
    } else {
      setOpen(false);
    }
  };

  const handleDateChange = (dates, dateStrings) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  const handleButtonClick = () => {
    if (startDate && endDate) {
      setStartDate(startDate);
      setEndDate(endDate);
      setOpen(false);
    }
  };

  const renderExtraFooter = () => {
    return (
      <button
        type='button'
        className='button-apply'
        onClick={handleButtonClick}
      >
        Apply
      </button>
    );
  };

  return (
    <>
      <div className={`datetime-picker`}>
        {type === 'pre-set-ranges' ? (
          <RangePicker
            presets={rangePresets}
            showTime={timePicker === 'false' ? false : true}
            format='YYYY/MM/DD HH:mm:ss'
            onChange={handleDateChange}
            getPopupContainer={(trigger) => {
              return trigger;
            }}
            dateRender={(current) => {
              if (isEventDay(current)) {
                return (
                  <div class='ant-picker-cell-inner'>
                    {current.date()}
                    {current.date() === startDate?.date() ||
                    current.date() === endDate?.date() ? (
                      <div className='dot-time-active' />
                    ) : (
                      <div className='dot-time' />
                    )}
                  </div>
                );
              }
              return <div class='ant-picker-cell-inner'>{current.date()}</div>;
            }}
            // renderExtraFooter={renderExtraFooter}
            // open={open}
            // onOpenChange={handleOpenChange}
          />
        ) : (
          <RangePicker
            showTime={timePicker === 'false' ? false : true}
            format='YYYY/MM/DD HH:mm:ss'
            onChange={handleDateChange}
            getPopupContainer={(trigger) => {
              return trigger;
            }}
            dateRender={(current) => {
              if (isEventDay(current)) {
                return (
                  <div class='ant-picker-cell-inner'>
                    {current.date()}
                    {current.date() === startDate?.date() ||
                    current.date() === endDate?.date() ? (
                      <div className='dot-time-active' />
                    ) : (
                      <div className='dot-time' />
                    )}
                  </div>
                );
              }
              return <div class='ant-picker-cell-inner'>{current.date()}</div>;
            }}
            renderExtraFooter={renderExtraFooter}
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
