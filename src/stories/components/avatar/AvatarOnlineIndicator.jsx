import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/avatar.css';
import '../../assets/css/avatar-icon.css';

export const AvatarOnlineIndicator = ({ size, online }) => {
  return (
    <>
      <div
        className={[
          `online-indicator-size--${size}`,
          `color-avatar-online--${online}`,
        ].join(' ')}
      />
    </>
  );
};
AvatarOnlineIndicator.propTypes = {
  online: PropTypes.oneOf(['true', 'false']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
};

export const iconPath = (size) => {};
