import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/avatar.css';
import '../../assets/css/avatar-icon.css';

export const AvatarCompanyIcon = ({ size }) => {
  return <div className={[`avatar-company`, `icon-size--${size}`].join(' ')} />;
};
AvatarCompanyIcon.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
};
