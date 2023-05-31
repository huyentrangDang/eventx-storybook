import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/control-handle.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';

export const ControlHandle = ({ state, type }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        className={[`component-control-handle-state--${state}`].join(' ')}
      ></div>
      {type === 'text' && (
        <span className={[`text-control-handle`, `text-md-medium`].join(' ')}>
          0%
        </span>
      )}
      {type === 'tooltip' && (
        <div className={`tooltip-control-handle`}>
          <div className={`content-tooltip`}>
            <span className={[`text-xs-semibold`].join(' ')}>0%</span>
          </div>
        </div>
      )}
    </div>
  );
};
ControlHandle.propTypes = {
  state: PropTypes.oneOf(['default', 'hover', 'focused']),
  type: PropTypes.oneOf(['text', 'false', 'tooltip']),
};

export const iconPath = () => {};
