import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/avatar.css';
import '../../assets/css/avatar-icon.css';

export const AvatarAddButton = ({ size, state }) => {
  return (
    <div className={`avatar-add-button-size--${size}-state--${state}`}>
      <div className={`content-avatar-add-button`}>
        <div className={[`${iconPlusPath(size)}`, `plus-${size}`].join(' ')} />
      </div>
      {state === 'hover' && (
        <>
          <div
            className={[`cursor-size--${size}`, `icon-cursor`].join(' ')}
          ></div>
          <div className={[`tooltip-size--${size}`]}>
            <div className={[`content-tooltip-size--${size}`].join(' ')}>
              <span className={[`text-xs-semibold`].join(' ')}>Add User</span>
            </div>
            <div className={`tooltip-icon`}>
              <div className={`tooltip-bottom-center`}></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
AvatarAddButton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  state: PropTypes.oneOf(['default', 'hover', 'focus', 'disabled']),
};

export const iconPlusPath = (size) => {
  if (size === 'xs') {
    return 'icon-plus-xs-gray-400';
  }
  if (size === 'sm') {
    return 'icon-plus-sm-gray-400';
  }
  if (size === 'md') {
    return 'icon-plus-md-gray-400';
  }
};
