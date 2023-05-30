import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/avatar.css';
import '../../assets/css/avatar-icon.css';

export const VerifiedTick = ({ size }) => {
  return (
    <div className={[`avatar-verified`, `icon-size--${size}`].join(' ')} />
  );
};
VerifiedTick.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']),
};
