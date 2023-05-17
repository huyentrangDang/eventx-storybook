import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/badges.css';
import '../../assets/css/badge-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import { iconOnlyPath } from '../badge-icon/BadgeIcon';

export const Badges = ({ outline, color, size, icon, text }) => {
  return (
    <>
      <div>
        {icon === 'false' && (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}`,
            ].join(' ')}
          >
            <div className={`text-badge-${size}-medium`}> {text}</div>
          </button>
        )}
        {(icon === 'dot' || icon === 'iconLeading') && (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon--${icon}`,
            ].join(' ')}
          >
            <div
              class={[
                `container-icon-size--${size}`,
                `${iconPath(`${color}`, `${icon}`)}`,
              ].join(' ')}
            />
            <div className={`text-badge-${size}-medium`}> {text}</div>
          </button>
        )}

        {(icon === 'xclose' || icon === 'iconTrailing') && (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon--${icon}`,
            ].join(' ')}
          >
            <div className={`text-badge-${size}-medium`}> {text}</div>
            <div
              class={[
                `container-icon-size--${size}`,
                `${iconPath(`${color}`, `${icon}`)}`,
              ].join(' ')}
            />
          </button>
        )}

        {(icon === 'country' || icon === 'avatar') && (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon-image`,
            ].join(' ')}
          >
            <div className={[`${iconPath(`${color}`, `${icon}`)}`].join(' ')} />
            <div className={`text-badge-${size}-medium`}> {text}</div>
          </button>
        )}

        {icon === 'only' && (
          <button
            type='button'
            className={[
              `icon-badge-size--${size}-color--${color}-outline--${outline}`,
            ].join(' ')}
          >
            <div class={[`${iconPath(`${color}`, `${icon}`)}`].join(' ')}></div>
          </button>
        )}
      </div>
    </>
  );
};

Badges.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.string,
  outline: PropTypes.oneOf(['true', 'false']),
  icon: PropTypes.oneOf([
    'false',
    'dot',
    'country',
    'avatar',
    'xclose',
    'iconTrailing',
    'iconLeading',
    'only',
  ]),
  text: PropTypes.string,
};

Badges.defaultProps = {};
export const iconPath = (color, icon) => {
  if (icon === 'country') {
    return 'circle_coutry';
  }
  if (icon === 'avatar') {
    return 'circle_avatar';
  }
  if (icon === 'dot') {
    return iconDotPath(color);
  }
  if (icon === 'xclose') {
    return iconXClosePath(color);
  }
  if (icon === 'iconTrailing') {
    return iconTrailingPath(color);
  }
  if (icon === 'iconLeading') {
    return iconLeadingPath(color);
  }
  if (icon === 'only') {
    return iconOnlyPath(color);
  } else return icon;
};

export const iconDotPath = (color, icon) => {
  if (color === 'gray') {
    return 'dot_leading_gray';
  }
  if (color === 'primary') {
    return 'dot_leading_primary';
  }
  if (color === 'error') {
    return 'dot_leading_error';
  }
  if (color === 'warning') {
    return 'dot_leading_warning';
  }
  if (color === 'success') {
    return 'dot_leading_success';
  }
  if (color === 'blueGray') {
    return 'dot_leading_blue-gray';
  }
  if (color === 'blueLight') {
    return 'dot_leading_blue-light';
  }
  if (color === 'blue') {
    return 'dot_leading_blue';
  }
  if (color === 'indigo') {
    return 'dot_leading_indigo';
  }
  if (color === 'purple') {
    return 'dot_leading_purple';
  }
  if (color === 'pink') {
    return 'dot_leading_pink';
  }
  if (color === 'rose') {
    return 'dot_leading_rose';
  } else {
    return 'dot_leading_orange';
  }
};

export const iconXClosePath = (color, icon) => {
  if (color === 'gray') {
    return 'x_close_trailing_gray';
  }
  if (color === 'primary') {
    return 'x_close_trailing_primary';
  }
  if (color === 'error') {
    return 'x_close_trailing_error';
  }
  if (color === 'warning') {
    return 'x_close_trailing_warning';
  }
  if (color === 'success') {
    return 'x_close_trailing_success';
  }
  if (color === 'blueGray') {
    return 'x_close_trailing_blue-gray';
  }
  if (color === 'blueLight') {
    return 'x_close_trailing_blue-light';
  }
  if (color === 'blue') {
    return 'x_close_trailing_blue';
  }
  if (color === 'indigo') {
    return 'x_close_trailing_indigo';
  }
  if (color === 'purple') {
    return 'x_close_trailing_purple';
  }
  if (color === 'pink') {
    return 'x_close_trailing_pink';
  }
  if (color === 'rose') {
    return 'x_close_trailing_rose';
  } else {
    return 'x_close_trailing_orange';
  }
};

export const iconTrailingPath = (color, icon) => {
  if (color === 'gray') {
    return 'icon_trailing_gray';
  }
  if (color === 'primary') {
    return 'icon_trailing_primary';
  }
  if (color === 'error') {
    return 'icon_trailing_error';
  }
  if (color === 'warning') {
    return 'icon_trailing_warning';
  }
  if (color === 'success') {
    return 'icon_trailing_success';
  }
  if (color === 'blueGray') {
    return 'icon_trailing_blue-gray';
  }
  if (color === 'blueLight') {
    return 'icon_trailing_blue-light';
  }
  if (color === 'blue') {
    return 'icon_trailing_blue';
  }
  if (color === 'indigo') {
    return 'icon_trailing_indigo';
  }
  if (color === 'purple') {
    return 'icon_trailing_purple';
  }
  if (color === 'pink') {
    return 'icon_trailing_pink';
  }
  if (color === 'rose') {
    return 'icon_trailing_rose';
  } else {
    return 'icon_trailing_orange';
  }
};

export const iconLeadingPath = (color, icon) => {
  if (color === 'gray') {
    return 'icon_leading_gray';
  }
  if (color === 'primary') {
    return 'icon_leading_primary';
  }
  if (color === 'error') {
    return 'icon_leading_error';
  }
  if (color === 'warning') {
    return 'icon_leading_warning';
  }
  if (color === 'success') {
    return 'icon_leading_success';
  }
  if (color === 'blueGray') {
    return 'icon_leading_blue-gray';
  }
  if (color === 'blueLight') {
    return 'icon_leading_blue-light';
  }
  if (color === 'blue') {
    return 'icon_leading_blue';
  }
  if (color === 'indigo') {
    return 'icon_leading_indigo';
  }
  if (color === 'purple') {
    return 'icon_leading_purple';
  }
  if (color === 'pink') {
    return 'icon_leading_pink';
  }
  if (color === 'rose') {
    return 'icon_leading_rose';
  } else {
    return 'icon_leading_orange';
  }
};

export const iconOtherPath = (color, icon) => {
  switch (color) {
    case 'gray': {
      if (icon === 'dot') {
        return 'dot_leading_gray';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_gray';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_gray';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_gray';
      }

      break;
    }
    case 'primary': {
      if (icon === 'dot') {
        return 'dot_leading_primary';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_primary';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_primary';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_primary';
      }

      break;
    }
    case 'error': {
      if (icon === 'dot') {
        return 'dot_leading_error';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_error';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_error';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_error';
      }

      break;
    }
    case 'warning': {
      if (icon === 'dot') {
        return 'dot_leading_warning';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_warning';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_warning';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_warning';
      }

      break;
    }
    case 'succes': {
      if (icon === 'dot') {
        return 'dot_leading_success';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_success';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_success';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_success';
      }

      break;
    }
    case 'blueGray': {
      if (icon === 'dot') {
        return 'dot_leading_blue-gray';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_blue-gray';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_blue-gray';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_blue-gray';
      }

      break;
    }
    case 'blueLight': {
      if (icon === 'dot') {
        return 'dot_leading_blue-light';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_blue-light';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_blue-light';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_blue-light';
      }

      break;
    }
    case 'blue': {
      if (icon === 'dot') {
        return 'dot_leading_blue';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_blue';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_blue';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_blue';
      }

      break;
    }
    case 'indigo': {
      if (icon === 'dot') {
        return 'dot_leading_indigo';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_indigo';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_indigo';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_indigo';
      }

      break;
    }
    case 'purple': {
      if (icon === 'dot') {
        return 'dot_leading_purple';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_purple';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_purple';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_purple';
      }

      break;
    }
    case 'pink': {
      if (icon === 'dot') {
        return 'dot_leading_pink';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_pink';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_pink';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_pink';
      }

      break;
    }
    case 'rose': {
      if (icon === 'dot') {
        return 'dot_leading_rose';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_rose';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_rose';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_rose';
      }

      break;
    }
    case 'orange': {
      if (icon === 'dot') {
        return 'dot_leading_orange';
      }
      if (icon === 'xCloseTrailing') {
        return 'x_close_trailing_orange';
      }
      if (icon === 'arrowRightTrailing') {
        return 'arrow-right_trailing_orange';
      }
      if (icon === 'arrowUpLeading') {
        return 'arrow-up_leading_orange';
      }

      break;
    }
    default: {
      return {};
    }
  }
};
