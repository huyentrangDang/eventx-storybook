import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/breadcrumb.css';
import '../../assets/css/breadcrumb-icon.css';
import '../../assets/css/typography.css';

export const BreadcrumbButtonBase = ({ current, type, icon, state, text }) => {
  return (
    <>
      {icon === 'true' && (
        <div
          className={[
            `breadcrumd-button-type--${type}-current--${current}-state--${state}`,
            `${iconPath(current, type, state)}`,
          ].join(' ')}
        />
      )}

      {icon === 'false' && (
        <div
          className={[
            `breadcrumd-button-type--${type}-current--${current}-state--${state}-icon--${icon}`,
          ].join(' ')}
        >
          <span
            className={[
              `${textPath(current)}`,
              `${colorTextPath(current, type, state)}`,
            ].join(' ')}
          >
            {text}
          </span>
        </div>
      )}
    </>
  );
};

BreadcrumbButtonBase.propTypes = {
  current: PropTypes.oneOf(['true', 'false']),
  type: PropTypes.oneOf(['button-gray', 'button-primary', 'text']),
  icon: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['default', 'hover', 'focused']),
  text: PropTypes.string,
};

export const iconPath = (current, type, state) => {
  switch (current) {
    case 'false': {
      if (state === 'default' || state === 'focused') {
        return 'icon-breadcrumb-gray-500';
      }
      if (state === 'hover') {
        if (type === 'text' || type === 'button-gray') {
          return 'icon-breadcrumb-gray-700';
        }
        if (type === 'button-primary') {
          return 'icon-breadcrumb-primary-700';
        }
      }
      break;
    }
    case 'true': {
      if (type === 'text' || type === 'button-primary') {
        return 'icon-breadcrumb-primary-700';
      }
      if (type === 'button-gray') {
        return 'icon-breadcrumb-gray-700';
      }
      break;
    }
    default: {
      return {};
    }
  }
};

export const colorTextPath = (current, type, state) => {
  switch (current) {
    case 'false': {
      if (state === 'default' || state === 'focused') {
        return 'color-gray-600';
      }
      if (state === 'hover') {
        if (type === 'text' || type === 'button-gray') {
          return 'color-gray-800';
        }
        if (type === 'button-primary') {
          return 'color-primary-700';
        }
      }
      break;
    }
    case 'true': {
      if (type === 'text' || type === 'button-primary') {
        return 'color-primary-700';
      }
      if (type === 'button-gray') {
        if (state === 'default') {
          return 'color-gray-700';
        }
        if (state === 'hover') {
          return 'color-gray-800';
        }
        if (state === 'focused') {
          return 'color-gray-600';
        }
      }
      break;
    }
    default: {
      return {};
    }
  }
};

export const textPath = (current) => {
  if (current === 'true') {
    return 'text-sm-semibold';
  }
  if (current === 'false') {
    return 'text-sm-medium';
  }
};
