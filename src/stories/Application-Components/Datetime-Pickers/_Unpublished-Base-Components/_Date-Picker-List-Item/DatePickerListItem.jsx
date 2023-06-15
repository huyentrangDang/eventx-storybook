import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/css/common.css';
import moment from 'moment';
// import DateTimeRangeContainer from 'react-advanced-datetimerange-event-x';

export const DatePickerListItem = ({}) => {
  let now = new Date();
  let start = moment(
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
  );
  let end = moment(start).add(1, 'days').subtract(1, 'seconds');
  let ranges = {
    Today: [moment(start), moment(end)],
    Yesterday: [
      moment(start).subtract(1, 'days'),
      moment(end).subtract(1, 'days'),
    ],
    'This Week': [moment(start).startOf('week'), moment(end).endOf('week')],
    'Last Week': [
      moment(start).subtract(7, 'days').startOf('week'),
      moment(start).subtract(7, 'days').endOf('week'),
    ],
    'This Month': [moment(start).startOf('month'), moment(end).endOf('month')],
    'Last Month': [
      moment(start).subtract(4, 'week').startOf('month'),
      moment(start).subtract(4, 'week').endOf('month'),
    ],
    'This Year': [moment(start).startOf('years'), moment(start).endOf('years')],
    'Last Year': [
      moment(start).subtract(12, 'month').startOf('years'),
      moment(start).subtract(12, 'month').endOf('years'),
    ],
  };
  let local = {
    format: 'DD-MM-YYYY HH:mm',
    sundayFirst: false,
  };
  let maxDate = moment(end).add(24, 'hour');

  const [startDate, setStartDate] = React.useState(start);
  const [endDate, setEndDate] = React.useState(end);

  const applyCallback = (startDate, endDate) => {
    console.log('Apply Callback');
    console.log(startDate.format('DD-MM-YYYY HH:mm'));
    console.log(endDate.format('DD-MM-YYYY HH:mm'));
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const rangeCallback = (index, value) => {
    console.log(index, value);
  };

  const onClick = () => {
    let newStart = moment(startDate).subtract(3, 'days');
    // console.log("On Click Callback");
    // console.log(newStart.format("DD-MM-YYYY HH:mm"));
    setStartDate(newStart);
  };

  const renderStandalone = (ranges, local, maxDate, descendingYears) => {
    return (
      <div id='DateTimeRangeContainerStandalone'>
        {/* <DateTimeRangeContainer
          eventDays={[
            {
              day: new Date(),
              label: 'ngay abc',
            },
          ]}
          ranges={ranges}
          start={startDate}
          end={endDate}
          local={local}
          maxDate={maxDate}
          applyCallback={applyCallback}
          rangeCallback={rangeCallback}
          // autoApply
          descendingYears={descendingYears}
          // years={[2010, 2020]}
          twelveHoursClock={true}
          smartMode
          forceMobileMode
          standalone
          style={{
            standaloneLayout: {
              display: 'flex',
              maxWidth: 'fit-content',
              backgroundColor: '#FFFFFF',
              border: '1px solid #F2F4F7',
              boxShadow:
                '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
              borderRadius: 8,
              padding: 0,
            },
          }}
        /> */}
        <br />
      </div>
    );
  };

  let pickersRender = (
    <div>
      <br />
      {renderStandalone(ranges, local, maxDate, false)}
    </div>
  );

  return (
    <>
      {/* <DateTimeRangeContainer
        ranges={ranges}
        start={start}
        end={end}
        local={local}
        maxDate={maxDate}
        applyCallback={() => {}}
      >
        <FormControl
          id='formControlsTextB'
          type='text'
          label='Text'
          placeholder='Enter text'
        />
      </DateTimeRangeContainer> */}
      {pickersRender}
    </>
  );
};

DatePickerListItem.propTypes = {};
