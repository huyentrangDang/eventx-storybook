import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/common.css';
import '../../../assets/css/typography.css';
import '../../../assets/css/color.css';
import '../../../assets/css/navigation/navigation-base.css';
import '../../../assets/css/navigation/navigation-icon.css';
import { MiscellaneousDotIcon } from '../../../Style-Guid/Misc-Icons/MiscIcon';
import { Badges } from '../../../components/Badges/Badges';

export const NavigationBase = ({
  current,
  color,
  theme,
  state,
  text,
  textBage,
  badge,
  dot,
  icon,
  dropdown,
}) => {
  return (
    <>
      <div
        className={`navigation-base-current--${current}-color--${color}-theme--${theme}-state--${state}`}
      >
        <div className={`content-navigation-base`}>
          {dot === 'true' &&
            (theme === 'light' ? (
              <MiscellaneousDotIcon size={'md'} />
            ) : color === 'primary' ? (
              <MiscellaneousDotIcon icon={'dot-md-primary-300'} />
            ) : (
              <MiscellaneousDotIcon icon={'dot-md-gray-300'} />
            ))}

          {icon === 'true' && (
            <div
              className={[
                `${iconBarChar(current, color, theme, state)}`,
                `icon-barchar-navigation-base-current`,
              ].join(' ')}
            ></div>
          )}
          <span
            className={[
              `text-md-semibold`,
              `${colorText(current, color, theme, state)}`,
              `text-navigation-base-current`,
            ].join(' ')}
          >
            {text}
          </span>
        </div>
        {badge === 'true' && (
          <Badges
            size={'sm'}
            icon={'false'}
            color={'gray'}
            outline={'false'}
            text={textBage}
          />
        )}
        {dropdown === 'true' && (
          <div
            className={[
              `${iconChevronDown(current, color, theme, state)}`,
              `icon-chevron-down-navigation-base-current`,
            ].join(' ')}
          ></div>
        )}
      </div>
    </>
  );
};

NavigationBase.propTypes = {
  current: PropTypes.oneOf(['true', 'false']),
  color: PropTypes.oneOf(['gray', 'primary']),
  theme: PropTypes.oneOf(['light', 'dark']),
  state: PropTypes.oneOf(['default', 'hover', 'focused']),
  text: PropTypes.string,
  textBage: PropTypes.number,
  badge: PropTypes.oneOf(['true', 'false']),
  dot: PropTypes.oneOf(['true', 'false']),
  icon: PropTypes.oneOf(['true', 'false']),
  dropdown: PropTypes.oneOf(['true', 'false']),
};

export const iconBarChar = (current, color, theme, state) => {
  switch (theme) {
    case 'light': {
      if (color === 'primary') {
        if (current === 'false') {
          if (state === 'default' || state === 'focused') {
            return 'bar-char-gray-500';
          }
          if (state === 'hover') {
            return 'bar-char-primary-500';
          }
        }
        if (current === 'true') {
          return 'bar-char-primary-500';
        }
      }

      if (color === 'gray') {
        return 'bar-char-gray-500';
      }

      break;
    }
    case 'dark': {
      if (current === 'false') {
        if (color === 'primary') {
          return 'bar-char-primary-300';
        }
        if (color === 'gray') {
          return 'bar-char-gray-300';
        }
      }
      if (current === 'true') {
        return 'bar-char-base-white';
      }

      break;
    }

    default: {
      return {};
    }
  }
};

export const colorText = (current, color, theme, state) => {
  switch (theme) {
    case 'light': {
      if (current === 'false') {
        if (state === 'default' || state === 'focused') {
          return 'color-gray-700';
        }
        if (state === 'hover') {
          if (color === 'primary') {
            return 'color-primary-700';
          }
          if (color === 'gray') {
            return 'color-gray-900';
          }
        }
      }
      if (current === 'true') {
        if (color === 'primary') {
          return 'color-primary-700';
        }
        if (color === 'gray') {
          return 'color-gray-900';
        }
      }
      break;
    }
    case 'dark': {
      if (current === 'false') {
        if (color === 'primary') {
          if (state === 'default' || state === 'focused') {
            return 'color-primary-100';
          }
          if (state === 'hover') {
            return 'color-base-white';
          }
        }
        if (color === 'gray') {
          if (state === 'default' || state === 'focused') {
            return 'color-gray-100';
          }
          if (state === 'hover') {
            return 'color-base-white';
          }
        }
      }
      if (current === 'true') {
        return 'color-base-white';
      }

      break;
    }

    default: {
      return {};
    }
  }
};

export const iconChevronDown = (current, color, theme, state) => {
  switch (theme) {
    case 'light': {
      if (color === 'primary') {
        if (current === 'false') {
          if (state === 'default' || state === 'focused') {
            return 'chevron-down-gray-500';
          }
          if (state === 'hover') {
            return 'chevron-down-primary-400';
          }
        }
        if (current === 'true') {
          return 'chevron-down-primary-400';
        }
      }

      if (color === 'gray') {
        return 'chevron-down-gray-500';
      }

      break;
    }
    case 'dark': {
      if (color === 'primary') {
        return 'chevron-down-primary-300';
      }
      if (color === 'gray') {
        return 'chevron-down-gray-300';
      }
      break;
    }

    default: {
      return {};
    }
  }
};
