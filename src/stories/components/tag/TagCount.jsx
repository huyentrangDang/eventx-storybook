import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/tag-count.css';
import '../../assets/css/common.css';

export const TagCount = ({ size, text }) => {
  return (
    <>
      <button
        type='button'
        className={[`tag-count-size--${size}`].join(' ')}
      >
        <div className={`text-button-${size}`}> {text}</div>
      </button>
    </>
  );
};

TagCount.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string,
};
