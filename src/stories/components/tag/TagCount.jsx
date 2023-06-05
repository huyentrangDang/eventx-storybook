import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/tag-count.css';
import '../../assets/css/common.css';

export const TagCount = ({ size, text, color, background }) => {
  return (
    <>
      <button
        type='button'
        className={[`tag-count-size--${size}`].join(' ')}
        style={{ background: background }}
      >
        <div
          className={`text-button-${size}`}
          style={{ color: color }}
        >
          {' '}
          {text}
        </div>
      </button>
    </>
  );
};

TagCount.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
};

export const tagBackground = (color) => {
  return color;
};

export const tagColor = (color) => {
  return color;
};
