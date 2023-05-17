import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/badge-icon.css';
import '../../assets/css/icon.css';

export const BadgeIcon = ({ size, icon, color, outline, ...props }) => {
  return (
    <button
      type='button'
      className={[
        `icon-badge-size--${size}-color--${color}-outline--${outline}`,
      ].join(' ')}
      {...props}
    >
      <div class={[`${iconPath(`${color}`, `${icon}`)}`].join(' ')}></div>
    </button>
  );
};
BadgeIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string,
  icon: PropTypes.string,
  outline: PropTypes.oneOf(['true', 'false']),
};

export const iconPath = (color, icon) => {
  if (icon === 'only') {
    return iconOnlyPath(color);
  } else {
    return icon;
  }
};

export const iconOnlyPath = (color) => {
  if (color === 'gray') {
    return 'plus_gray';
  }
  if (color === 'primary') {
    return 'plus_primary';
  }
  if (color === 'error') {
    return 'plus_error';
  }
  if (color === 'warning') {
    return 'plus_warning';
  }
  if (color === 'success') {
    return 'plus_success';
  }
  if (color === 'blueGray') {
    return 'plus_blue_gray';
  }
  if (color === 'blueLight') {
    return 'plus_blue_light';
  }
  if (color === 'blue') {
    return 'plus_blue';
  }
  if (color === 'indigo') {
    return 'plus_indigo';
  }
  if (color === 'purple') {
    return 'plus_purple';
  }
  if (color === 'pink') {
    return 'plus_pink';
  }
  if (color === 'rose') {
    return 'plus_rose';
  } else {
    return 'plus_orange';
  }
};
