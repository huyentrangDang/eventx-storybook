import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/tag-x-close.css';
import '../../assets/css/tag-icon.css';
import '../../assets/css/common.css';

export const TagXClose = ({ size, state }) => {
  return (
    <>
      <button
        type='button'
        className={[`tag-x-close-size--${size}-state--${state}`].join(' ')}
      >
        <icon className={`icon-x-close-size--${size}-state--${state}`} />
      </button>
    </>
  );
};

TagXClose.propTypes = {
  state: PropTypes.oneOf(['default', 'hover', 'focus']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
