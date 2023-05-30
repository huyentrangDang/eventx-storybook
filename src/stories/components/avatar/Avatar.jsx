import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/avatar.css';
import '../../assets/css/checkbox-icon.css';
import '../../assets/css/avatar-icon.css';
import '../../assets/css/avatar.scss';

export const Avatar = ({ statusIcon, state, size, placeholder, text }) => {
  return (
    <>
      {statusIcon === 'false' &&
        placeholder === 'false' &&
        text === 'false' && (
          <div
            className={[
              `avatar-placeholder--${placeholder}-text--${text} size--${size} state--${state}`,
              `${iconPath(statusIcon, state, placeholder)}`,
            ].join(' ')}
          ></div>
        )}

      {statusIcon !== 'false' &&
        placeholder === 'false' &&
        text === 'false' && (
          <div
            className={[
              `avatar-placeholder--${placeholder}-text--${text} statusIcon--${statusIcon}`,
              `size--${size} state--${state}`,
              `${iconPath(statusIcon, state, placeholder)}`,
            ].join(' ')}
          >
            {statusIcon === 'onlineIndicator' && (
              <div
                className={[
                  `avatar-online-indicator`,
                  `online-indicator-size--${size}`,
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
                className={[`avatar-verified-icon`, `icon-size--${size}`].join(
                  ' '
                )}
              ></div>
            )}
          </div>
        )}

      {statusIcon === 'false' && placeholder === 'true' && text === 'false' && (
        <div
          className={[
            `avatar-placeholder--${placeholder}-text--${text}`,
            `size--${size}`,
            `avatar-placeholder--${placeholder}-state--${state}`,
            `${iconPath(statusIcon, placeholder, placeholder)}`,
          ].join(' ')}
        ></div>
      )}

      {statusIcon !== 'false' && placeholder === 'true' && text === 'false' && (
        <div
          className={[
            `avatar-placeholder--${placeholder}-text--${text}`,
            `size--${size}`,
            `avatar-placeholder--${placeholder}-state--${state}`,
            `${iconPath(statusIcon, placeholder, placeholder)}`,
          ].join(' ')}
        >
          {statusIcon === 'onlineIndicator' && (
            <div
              className={[
                `avatar-online-indicator`,
                `online-indicator-size--${size}`,
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
        </div>
      )}

      {statusIcon === 'false' && placeholder === 'false' && text === 'true' && (
        <div
          className={[
            `avatar-placeholder--${placeholder}-text--${text}`,
            `size--${size}`,
            `avatar-placeholder--${placeholder}-state--${state}`,
          ].join(' ')}
        >
          <span
            className={`text--${text}-placeholder--${placeholder}-size--${size}`}
          >
            OR
          </span>
        </div>
      )}

      {(statusIcon === 'onlineIndicator' || statusIcon === 'company') &&
        placeholder === 'false' &&
        text === 'true' && (
          <div
            className={[
              `avatar-placeholder--${placeholder}-text--${text}`,
              `size--${size}`,
              `avatar-placeholder--${placeholder}-state--${state}`,
            ].join(' ')}
          >
            <span
              className={`text--${text}-placeholder--${placeholder}-size--${size}`}
            >
              OR
            </span>

            {statusIcon === 'onlineIndicator' && (
              <div
                className={[
                  `avatar-online-indicator`,
                  `online-indicator-size--${size}`,
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
          </div>
        )}
    </>
  );
};
Avatar.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  placeholder: PropTypes.oneOf(['true', 'false']),
  statusIcon: PropTypes.oneOf([
    'false',
    'onlineIndicator',
    'company',
    'verified',
  ]),
  state: PropTypes.oneOf(['default', 'hover', 'focused']),
  text: PropTypes.oneOf(['true', 'false']),
};

export const iconPath = (statusIcon, state, placeholder) => {
  if (placeholder === 'true') {
    return 'bg-avatar-user-sm';
  }
  if (placeholder === 'false') {
    return 'bg-avatar-sm-status-false';
  }
};
