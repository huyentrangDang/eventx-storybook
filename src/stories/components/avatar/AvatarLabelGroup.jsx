import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/checkbox-icon.css';
import '../../assets/css/avatar-icon.css';
import '../../assets/css/avatar-label-group.css';
import '../../assets/css/avatar.css';

export const AvatarLabelGroup = ({
  size,
  statusIcon,
  state,
  text,
  supportText,
}) => {
  return (
    <>
      {statusIcon === 'false' && (
        <>
          <div className={`container-avatar-label-group-size--${size}`}>
            <div
              className={[
                `avatar-image`,
                `size--${size}`,
                `state--${state}`,
                `${iconPath(statusIcon)}`,
              ].join(' ')}
            />
            <div className={`text-and-support-text`}>
              <span
                className={[
                  `${textPath(size)}`,
                  `text-color-label-avatar`,
                ].join(' ')}
              >
                {text}
              </span>
              <span
                className={[
                  `${subTextPath(size)}`,
                  `subtext-color-label-avatar`,
                ].join(' ')}
              >
                {supportText}
              </span>
            </div>
          </div>
        </>
      )}

      {statusIcon !== 'false' && (
        <>
          <div className={`container-avatar-label-group-size--${size}`}>
            <div
              className={[
                `icon-avatar-image`,
                `size--${size}`,
                `state--${state}`,
                `${iconPath(statusIcon)}`,
              ].join(' ')}
            >
              {statusIcon === 'onlineIndicator' && (
                <div
                  className={[
                    `online-indicator-size--${size}`,
                    `avatar-online-indicator`,
                  ].join(' ')}
                ></div>
              )}
              {statusIcon === 'company' && (
                <div
                  className={[`avatar-company-icon`, `icon-size--${size}`].join(
                    ' '
                  )}
                ></div>
              )}
              {statusIcon === 'verified' && (
                <div
                  className={[
                    `avatar-verified-icon`,
                    `icon-size--${size}`,
                  ].join(' ')}
                ></div>
              )}
            </div>
            <div className={`text-and-support-text`}>
              <span
                className={[
                  `${textPath(size)}`,
                  `text-color-label-avatar`,
                ].join(' ')}
              >
                {text}
              </span>
              <span
                className={[
                  `${subTextPath(size)}`,
                  `subtext-color-label-avatar`,
                ].join(' ')}
              >
                {supportText}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
AvatarLabelGroup.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  statusIcon: PropTypes.oneOf([
    'false',
    'onlineIndicator',
    'company',
    'verified',
  ]),
  state: PropTypes.oneOf(['default', 'hover', 'focused']),
  text: PropTypes.string,
  supportText: PropTypes.string,
};

export const iconPath = (statusIcon) => {
  if (statusIcon === 'false') {
    return 'icon-avatar-sm-status-false';
  } else {
    return 'bg-avatar-sm-status-false';
  }
};

export const textPath = (size) => {
  switch (size) {
    case 'sm': {
      return 'text-label-avatar-sm-semibold';
    }
    case 'md': {
      return 'text-label-avatar-sm-semibold';
    }
    case 'lg': {
      return 'text-label-avatar-md-semibold';
    }
    case 'xl': {
      return 'text-label-avatar-lg-semibold';
    }
    default: {
      return {};
    }
  }
};

export const subTextPath = (size) => {
  switch (size) {
    case 'sm': {
      return 'text-label-avatar-xs-regular';
    }
    case 'md': {
      return 'text-label-avatar-sm-regular';
    }
    case 'lg': {
      return 'text-label-avatar-md-regular';
    }
    case 'xl': {
      return 'text-label-avatar-md-regular';
    }
    default: {
      return {};
    }
  }
};
