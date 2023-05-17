import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/badge-group.css';
import '../../assets/css/badge-group-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';

export const BadgeGroup = ({
  badge,
  color,
  size,
  theme,
  text,
  iconBadge,
  textBadge,
}) => {
  return (
    <>
      {badge === 'leading' && (
        <button
          type='button'
          className={[
            `badge-group-size--${size}-color--${color}-badge--${badge}-theme--${theme}`,
          ].join(' ')}
        >
          {/* {iconBadge === 'trailing' ? (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-theme--${theme}-icon--${iconBadge}`,
              ].join(' ')}
            >
              <div className={`text-badge-group-size--${size}`}>{text}</div>
              <div class={[`${iconPath(`${color}`)}`].join(' ')} />
            </button>
          ) : (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-theme--${theme}`,
              ].join(' ')}
            >
              <div className={`text-badge-group-size--${size}`}>{text}</div>
            </button>
          )} */}
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-theme--${theme}`,
            ].join(' ')}
          >
            <div className={`text-badge-group-size--${size}`}>{text}</div>
          </button>
          <button className={`badge--${badge}-color--${color}`}>
            <div className={`text-badge-group-size--${size}`}>{textBadge}</div>
            <div class={[`${iconPath(`${color}`, `${badge}`)}`].join(' ')} />
          </button>
        </button>
      )}

      {badge === 'trailing' && (
        <button
          type='button'
          className={[
            `badge-group-size--${size}-color--${color}-badge--${badge}-theme--${theme}`,
          ].join(' ')}
        >
          <div className={`text-badge-group-size--${size}`}>{textBadge}</div>
          {/* {iconBadge === 'trailing' ? (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-theme--${theme}-icon--${iconBadge}`,
              ].join(' ')}
            >
              <div className={`text-badge-group-size--${size}`}>{text}</div>
              <div class={[`${iconPath(`${color}`)}`].join(' ')} />
            </button>
          ) : (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-theme--${theme}`,
              ].join(' ')}
            >
              <div className={`text-badge-group-size--${size}`}>{text}</div>
            </button>
          )} */}
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-theme--${theme}-icon--${iconBadge}`,
            ].join(' ')}
          >
            <div className={`text-badge-group-size--${size}`}>{text}</div>
            <div
              class={[`${iconPath(`${color}`, `${badge}`, `${theme}`)}`].join(
                ' '
              )}
            />
          </button>
        </button>
      )}
    </>
  );
};

BadgeGroup.propTypes = {
  size: PropTypes.oneOf(['md', 'lg']),
  color: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'medium', 'dark', 'outline']),
  text: PropTypes.string,
  sizeBadge: PropTypes.oneOf(['sm', 'md']),
  iconBadge: PropTypes.oneOf(['false', 'trailing']),
  colorBadge: PropTypes.string,
  badge: PropTypes.oneOf(['leading', 'trailing']),
};

BadgeGroup.defaultProps = {};
export const iconPath = (color, badge, theme) => {
  if (badge === 'leading') {
    return iconLeadingPath(color);
  }
  if (badge === 'trailing') {
    if (theme === 'dark') {
      return 'arrow_right_base_white_trailing';
    } else {
      return iconTrailingPath(color);
    }
  }
};

export const iconLeadingPath = (color) => {
  if (color === 'primary') {
    return 'arrow_right_primary_leading';
  }
  if (color === 'gray') {
    return 'arrow_right_gray_leading';
  }
  if (color === 'error') {
    return 'arrow_right_error_leading';
  }
  if (color === 'warning') {
    return 'arrow_right_warning_leading';
  }
  if (color === 'success') {
    return 'arrow_right_success_leading';
  }
};

export const iconTrailingPath = (color) => {
  if (color === 'primary') {
    return 'arrow_right_primary_trailing';
  }
  if (color === 'gray') {
    return 'arrow_right_gray_trailing';
  }
  if (color === 'error') {
    return 'arrow_right_error_trailing';
  }
  if (color === 'warning') {
    return 'arrow_right_warning_trailing';
  }
  if (color === 'success') {
    return 'arrow_right_success_trailing';
  }
};
