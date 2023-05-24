import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/scrollbar.css';

export const Scrollbar = ({ length }) => {
  return (
    <>
      <div className={[`scrollbar-length--${length}`].join(' ')}>
        <div className='scrollbar'>
          <div className={[`scrollbar-bar-length--${length}`].join(' ')} />
        </div>
      </div>
    </>
  );
};

Scrollbar.propTypes = {
  length: PropTypes.oneOf(['25', '50', '75']),
};
