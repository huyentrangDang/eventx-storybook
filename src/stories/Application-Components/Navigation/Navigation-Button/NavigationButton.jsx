import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/common.css';
import '../../../assets/css/typography.css';
import '../../../assets/css/color.css';
import '../../../assets/css/navigation/navigation-button.css';
import '../../../assets/css/navigation/navigation-icon.css';

export const NavigationButton = ({
  current,
  size,
  color,
  theme,
  state,
  iconSwap,
}) => {
  return (
    <>
      <div
        className={[
          `navigation-button-size--${size}`,
          `navigation-button-current--${current}-color--${color}-theme--${theme}-state--${state}`,
        ].join(' ')}
      >
        <div
          className={[
            `${iconPath(current, color, theme, state, size)}`,
            iconSwap,
          ].join(' ')}
        ></div>
      </div>
    </>
  );
};

NavigationButton.propTypes = {
  current: PropTypes.oneOf(['true', 'false']),
  size: PropTypes.oneOf(['md', 'lg']),
  color: PropTypes.oneOf(['gray', 'primary']),
  theme: PropTypes.oneOf(['light', 'dark']),
  state: PropTypes.oneOf(['default', 'hover', 'focused']),
  iconSwap: PropTypes.string,
};

export const iconPath = (current, color, theme, state, size) => {
  switch (size) {
    case 'md': {
      if (theme === 'light') {
        if (color === 'primary') {
          if (current === 'false') {
            if (state === 'default' || state === 'focused') {
              return 'bell-md-gray-500';
            }
            if (state === 'hover') {
              return 'bell-md-primary-700';
            }
          } else {
            return 'bell-md-primary-700';
          }
        }
        if (color === 'gray') {
          if (current === 'false') {
            return 'bell-md-gray-500';
          } else {
            return 'bell-md-gray-700';
          }
        }
      }

      if (theme === 'dark') {
        if (color === 'primary') {
          if (current === 'false') {
            if (state === 'default' || state === 'focused') {
              return 'bell-md-primary-300';
            }
            if (state === 'hover') {
              return 'bell-md-base-white';
            }
          } else {
            return 'bell-md-base-white';
          }
        }
        if (color === 'gray') {
          if (current === 'false') {
            if (state === 'default' || state === 'focused') {
              return 'bell-md-gray-300';
            }
            if (state === 'hover') {
              return 'bell-md-base-white';
            }
          } else {
            return 'bell-md-base-white';
          }
        }
      }

      break;
    }
    case 'lg': {
      if (theme === 'light') {
        if (color === 'primary') {
          if (current === 'false') {
            if (state === 'default' || state === 'focused') {
              return 'bell-lg-gray-500';
            }
            if (state === 'hover') {
              return 'bell-lg-primary-700';
            }
          } else {
            return 'bell-lg-primary-700';
          }
        }
        if (color === 'gray') {
          if (current === 'false') {
            return 'bell-lg-gray-500';
          } else {
            return 'bell-lg-gray-700';
          }
        }
      }

      if (theme === 'dark') {
        if (color === 'primary') {
          if (current === 'false') {
            if (state === 'default' || state === 'focused') {
              return 'bell-lg-primary-300';
            }
            if (state === 'hover') {
              return 'bell-lg-base-white';
            }
          } else {
            return 'bell-lg-base-white';
          }
        }
        if (color === 'gray') {
          if (current === 'false') {
            if (state === 'default' || state === 'focused') {
              return 'bell-lg-gray-300';
            }
            if (state === 'hover') {
              return 'bell-lg-base-white';
            }
          } else {
            return 'bell-lg-base-white';
          }
        }
      }

      break;
    }

    default: {
      return {};
    }
  }
};
