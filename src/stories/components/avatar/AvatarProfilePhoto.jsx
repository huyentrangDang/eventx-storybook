import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/checkbox-icon.css';
import '../../assets/css/avatar-icon.css';
import '../../assets/css/avatar.css';

export const AvatarProfilePhoto = ({ placeholder, text, size, verified }) => {
  return (
    <>
      {placeholder === 'false' && text === 'false' && (
        <div className={`container-avatar-profile-photo`}>
          <div
            className={[
              `avatar-placeholder--false-text--false`,
              `avatar-profile-photo-size--${size}`,
              `content-avatar-profile-photo-size--${size}`,
              `${iconPath(placeholder, text)}`,
            ].join(' ')}
          >
            {verified === true && (
              <div
                className={[
                  `avatar-verified-icon`,
                  `icon-avatar-profile-size--${size}`,
                ].join(' ')}
              ></div>
            )}
          </div>
        </div>
      )}

      {placeholder === 'true' && text === 'false' && (
        <div className={`container-avatar-profile-photo`}>
          <div
            className={[
              `avatar-placeholder--false-text--false`,
              `avatar-profile-photo-size--${size}`,
              `background-placeholder--${placeholder}`,
              `content-avatar-profile-photo-size--${size}`,
            ].join(' ')}
          >
            <div
              className={[
                `${iconPath(placeholder, text)}`,
                `avatar-profile-photo-user-size--${size}`,
              ].join(' ')}
            />
            {verified === true && (
              <div
                className={[
                  `avatar-verified-icon`,
                  `icon-avatar-profile-size--${size}`,
                ].join(' ')}
              ></div>
            )}
          </div>
        </div>
      )}

      {placeholder === 'true' && text === 'true' && (
        <div className={`container-avatar-profile-photo`}>
          <div
            className={[
              `avatar-placeholder--false-text--false`,
              `avatar-profile-photo-size--${size}`,
              `background-placeholder--${placeholder}`,
              `content-avatar-profile-photo-size--${size}`,
              `flex-center`,
            ].join(' ')}
          >
            <span
              className={[`text-avatar-profile-photo-user-size--${size}`].join(
                ' '
              )}
            >
              OR
            </span>
            {verified === true && (
              <div
                className={[
                  `avatar-verified-icon`,
                  `icon-avatar-profile-size--${size}`,
                ].join(' ')}
              ></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
AvatarProfilePhoto.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  placeholder: PropTypes.oneOf(['true', 'false']),
  text: PropTypes.oneOf(['true', 'false']),
  verified: PropTypes.oneOf([true, false]),
};

export const iconPath = (placeholder, text) => {
  if (placeholder === 'false') {
    if (text === 'false') {
      return 'bg-avatar-sm-status-false';
    }
  } else {
    if (text === 'false') {
      return 'icon-avatar-user-sm';
    }
  }
};
