import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/datetime-picker.css';

export const CalendarCell = ({ activeDot, type, position, state, text }) => {
  return (
    <>
      {type === 'today-date' && position === 'middle' ? (
        ''
      ) : (
        <div
          className={`calendar-cell-activeDot--${activeDot}-type--${type}-position--${position}-state--${state}`}
        >
          {state === 'hover' &&
            ((type === 'in-active' && position === 'leading-trailing') ||
              (type === 'in-active' && position === 'middle') ||
              (type === 'active' && position === 'leading-trailing') ||
              (type === 'active' && position === 'middle') ||
              (type === 'today-date' && position === 'leading-trailing')) && (
              <div
                className={[`icon-cursor-hand`, `cursor-calendar-cell`].join(
                  ' '
                )}
              ></div>
            )}
          {activeDot === 'true' && (
            <icon
              className={`dot-calendar-cell-type--${type}-position--${position}-state--${state}`}
            />
          )}
          <span className={`text-sm-regular`}>{text}</span>
          {type === 'active' && position === 'middle' && (
            <div className={`connection-calendar-cell`} />
          )}
        </div>
      )}
    </>
  );
};

CalendarCell.propTypes = {
  activeDot: PropTypes.oneOf(['true', 'false']),
  type: PropTypes.oneOf(['active', 'in-active', 'today-date']),
  position: PropTypes.oneOf(['leading-trailing', 'middle']),
  state: PropTypes.oneOf(['default', 'hover', 'disabled']),
  text: PropTypes.string,
};
