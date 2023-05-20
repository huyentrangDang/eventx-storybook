import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/tag-checkbox.css';
import '../../assets/css/tag-icon.css';
import '../../assets/css/common.css';

export const TagCheckbox = ({ checked, size, state }) => {
  return (
    <>
      {checked === 'true' ? (
        <button
          type='button'
          className={[
            `tag-checkbox-size--${size}-state--${state}-checked--${checked}`,
          ].join(' ')}
        >
          <icon className={`icon-checkbox-size--${size}`} />
        </button>
      ) : (
        <button
          type='button'
          className={[
            `tag-checkbox-size--${size}-state--${state}-checked--${checked}`,
          ].join(' ')}
        ></button>
      )}
    </>
  );
};

TagCheckbox.propTypes = {
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disbaled']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  checked: PropTypes.oneOf(['true', 'false']),
};
