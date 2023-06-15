import React from 'react';
import PropTypes from 'prop-types';
import '../../../../assets/css/common.css';
import '../../../../assets/css/datetime-picker.css';

export const DatePickerListItem = ({ selected, state, text }) => {
  return (
    <>
      <div
        className={`datetime-list-item-selected--${selected}-state--${state}`}
      >
        <span className={[`text-sm-medium`].join(' ')}>
          {text ? text : 'List Item'}
        </span>
      </div>
    </>
  );
};

DatePickerListItem.propTypes = {
  selected: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['default', 'hover', 'focused']),
};
