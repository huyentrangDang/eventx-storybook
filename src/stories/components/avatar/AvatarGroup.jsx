import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/avatar.css';
import '../../assets/css/checkbox-icon.css';
import '../../assets/css/avatar-icon.css';
import '../../assets/css/avatar-group.css';

export const AvatarGroup = ({ size, moreUser, addMore, arrNameAvatar }) => {
  const nameAvatars = [
    'first',
    'second',
    'three',
    'four',
    'five',
    'six',
    'sevent',
    'eight',
    'nine',
    'ten',
  ];
  return (
    <>
      <div className={`avatar-group`}>
        <div className={`container-avatar-group`}>
          {arrNameAvatar
            ? arrNameAvatar?.map((name, index) => (
                <div
                  key={index}
                  className={[
                    `icon-avatar-${name}`,
                    `avatar-group-size--${size}`,
                    name,
                  ].join(' ')}
                />
              ))
            : nameAvatars.map((name, index) => (
                <div
                  key={index}
                  className={[
                    `icon-avatar-${name}`,
                    `avatar-group-size--${size}`,
                  ].join(' ')}
                />
              ))}
          <div
            className={[`avatar-group-add`, `avatar-group-size--${size}`].join(
              ' '
            )}
          >
            <span className={`text-avatar-group-add-size--${size}`}>+5</span>
          </div>
        </div>
        {addMore === 'true' && (
          <div className={[`button-avatar-group-size--${size}`].join(' ')}>
            <div
              className={[
                `icon-avatar-add-button-size--${size}`,
                `button-avatar-group-size--${size}`,
              ].join(' ')}
            />
          </div>
        )}
      </div>
    </>
  );
};
AvatarGroup.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  moreUser: PropTypes.oneOf(['true', 'false']),
  addMore: PropTypes.oneOf(['true', 'false']),
};

export const iconPath = (size) => {};
