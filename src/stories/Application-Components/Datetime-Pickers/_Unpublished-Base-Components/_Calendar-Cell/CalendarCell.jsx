import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/datetime-picker.css';

export const CalendarCell = ({ activeDot, type, position, state, text }) => {
  return (
    <div
      className={`calendar-cell-activeDot--${activeDot}-type--${type}-position--${position}-state--${state}`}
    >
      {state === 'hover' && (
        <div
          className={[`icon-cursor-hand`, `cursor-calendar-cell`].join(' ')}
        ></div>
      )}
      {activeDot === 'true' && (
        <icon
          className={`dot-calendar-cell-type--${type}-position--${position}-state--${state}`}
        />
      )}
      <span className={`text-sm-regular`}>{text}</span>
      {/* {(type === 'active' || type === 'today-date') && (
        <span className={`text-sm-medium`}>{text}</span>
      )} */}
      {type === 'active' && position === 'middle' && (
        <div className={`connection-calendar-cell`}></div>
      )}
    </div>
  );
};

CalendarCell.propTypes = {
  activeDot: PropTypes.oneOf(['true', 'false']),
  type: PropTypes.oneOf(['active', 'in-active', 'today-date']),
  position: PropTypes.oneOf(['leading-trailing', 'middle', 'default']),
  state: PropTypes.oneOf(['default', 'hover', 'disabled']),
  text: PropTypes.string,
};

export const iconTablePath = (arrow, state) => {
  switch (arrow) {
    case 'down': {
      if (state === 'default') {
        return 'icon-arrow-down-gray-600';
      }
      if (state === 'hover') {
        return 'icon-arrow-down-gray-700';
      }
      if (state === 'disabled') {
        return 'icon-arrow-down-gray-300';
      }

      break;
    }
    case 'up': {
      if (state === 'default') {
        return 'icon-arrow-up-gray-600';
      }
      if (state === 'hover') {
        return 'icon-arrow-up-gray-700';
      }
      if (state === 'disabled') {
        return 'icon-arrow-up-gray-300';
      }
      break;
    }

    default: {
      return {};
    }
  }
};
