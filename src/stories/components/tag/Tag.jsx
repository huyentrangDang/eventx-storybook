import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/tag.css';
import '../../assets/css/tag-icon.css';
import '../../assets/css/tag-count.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/button-icon.css';
import '../../assets/css/badge-icon.css';

export const Tag = ({
  size,
  icon,
  text,
  checkbox,
  iconCountry,
  iconAvatar,
  iconDot,
  action,
  textTagCount,
}) => {
  return (
    <>
      <button
        type='button'
        className={[
          `tag-size--${size}-icon--${icon}-action--${action}-checkbox--${checkbox}`,
        ].join(' ')}
      >
        <div className={[`tag-content-size--${size}`].join(' ')}>
          {checkbox === 'true' && (
            <button
              type='button'
              className={[`tag-checkbox-size--${size}`].join(' ')}
            />
          )}
          {icon === 'country' && (
            <div
              class={[
                `container-icon-size--${size}`,
                `${iconPath(`${iconCountry}`)}`,
              ].join(' ')}
            />
          )}
          {icon === 'avatar' && (
            <div
              class={[
                `container-icon-size--${size}`,
                `${iconPath(`${iconAvatar}`)}`,
              ].join(' ')}
            />
          )}
          {icon === 'dot' && (
            <div
              class={[`container-icon-dot`, `${iconPath(`${iconDot}`)}`].join(
                ' '
              )}
            />
          )}
          <div className={`text-tag-size--${size}-medium`}> {text}</div>
          {action === 'count' && (
            <button
              type='button'
              className={[`tag-count-size--${size}`].join(' ')}
            >
              <div className={`text-button-${size}`}> {textTagCount}</div>
            </button>
          )}
        </div>

        {action === 'xClose' && (
          <button
            type='button'
            className={[`tag-x-close-size--${size}`].join(' ')}
          >
            <icon className={`icon-x-close-size--${size}`} />
          </button>
        )}
      </button>
    </>
  );
};

Tag.propTypes = {
  icon: PropTypes.oneOf(['false', 'avatar', 'country', 'dot']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  action: PropTypes.oneOf(['textOnly', 'xClose', 'count']),
  checkbox: PropTypes.oneOf(['true', 'false']),
  text: PropTypes.string,
  textTagCount: PropTypes.string,
};

Tag.defaultProps = {};
export const iconPath = (icon) => {
  if (icon === 'country') {
    return 'circle_country_Australia';
  }
  if (icon === 'avatar') {
    return 'circle_avatar';
  }
  if (icon === 'dot') {
    return 'dot_success_500';
  } else {
    return icon;
  }
};
