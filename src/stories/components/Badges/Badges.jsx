import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/badges.css';
import '../../assets/css/badge-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';

export const Badges = ({
  outline,
  color,
  size,
  icon,
  text,
  iconAvatar,
  iconCountry,
  iconDotLeading,
  iconDotTrailing,
  iconXCloseLeading,
  iconXCloseTrailing,
  iconArrowRightLeading,
  iconArrowRightTrailing,
  iconArrowUpLeading,
  iconArrowUpTrailing,
  iconOnly,
}) => {
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

        {icon === 'dot' ? (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon--${icon}`,
            ].join(' ')}
          >
            {String(iconDotLeading)?.includes('dot') && (
              <div
                class={[`${iconPath(`${color}`, `${iconDotLeading}`)}`].join(
                  ' '
                )}
              />
            )}
            <div className={`text-badge-${size}-medium`}> {text}</div>
            {String(iconDotTrailing)?.includes('dot') && (
              <div
                class={[`${iconPath(`${color}`, `${iconDotTrailing}`)}`].join(
                  ' '
                )}
              />
            )}
          </button>
        ) : (
          icon === 'dot' && (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-outline--${outline}`,
              ].join(' ')}
            >
              <div className={`text-badge-${size}-medium`}> {text}</div>
            </button>
          )
        )}

        {icon === 'xclose' ? (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon--${icon}`,
            ].join(' ')}
          >
            {String(iconXCloseLeading)?.includes('x_close') && (
              <div
                class={[`${iconPath(`${color}`, `${iconXCloseLeading}`)}`].join(
                  ' '
                )}
              />
            )}
            <div className={`text-badge-${size}-medium`}> {text}</div>
            {String(iconXCloseTrailing)?.includes('x_close') && (
              <div
                class={[
                  `${iconPath(`${color}`, `${iconXCloseTrailing}`)}`,
                ].join(' ')}
              />
            )}
          </button>
        ) : (
          icon === 'xclose' && (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-outline--${outline}`,
              ].join(' ')}
            >
              <div className={`text-badge-${size}-medium`}> {text}</div>
            </button>
          )
        )}

        {icon === 'arrowRight' ? (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon--${icon}`,
            ].join(' ')}
          >
            {String(iconArrowRightLeading)?.includes('arrow_right') && (
              <div
                class={[
                  `${iconPath(`${color}`, `${iconArrowRightLeading}`)}`,
                ].join(' ')}
              />
            )}
            <div className={`text-badge-${size}-medium`}> {text}</div>
            {String(iconArrowRightTrailing)?.includes('arrow_right') && (
              <div
                class={[
                  `${iconPath(`${color}`, `${iconArrowRightTrailing}`)}`,
                ].join(' ')}
              />
            )}
          </button>
        ) : (
          icon === 'arrowRight' && (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-outline--${outline}`,
              ].join(' ')}
            >
              <div className={`text-badge-${size}-medium`}> {text}</div>
            </button>
          )
        )}

        {icon === 'arrowUp' ? (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon--${icon}`,
            ].join(' ')}
          >
            {String(iconArrowUpLeading)?.includes('arrow_up') && (
              <div
                class={[
                  `${iconPath(`${color}`, `${iconArrowUpLeading}`)}`,
                ].join(' ')}
              />
            )}
            <div className={`text-badge-${size}-medium`}> {text}</div>
            {String(iconArrowUpTrailing)?.includes('arrow_up') && (
              <div
                class={[
                  `${iconPath(`${color}`, `${iconArrowUpTrailing}`)}`,
                ].join(' ')}
              />
            )}
          </button>
        ) : (
          icon === 'arrowUp' && (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-outline--${outline}`,
              ].join(' ')}
            >
              <div className={`text-badge-${size}-medium`}> {text}</div>
            </button>
          )
        )}

        {icon === 'avatar' && String(iconAvatar)?.includes('avatar') ? (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon-image`,
            ].join(' ')}
          >
            <div
              className={[`${iconPath(`${color}`, `${iconAvatar}`)}`].join(' ')}
            />
            <div className={`text-badge-${size}-medium`}> {text}</div>
          </button>
        ) : (
          icon === 'avatar' && (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-outline--${outline}`,
              ].join(' ')}
            >
              <div className={`text-badge-${size}-medium`}> {text}</div>
            </button>
          )
        )}

        {icon === 'country' && String(iconCountry)?.includes('country') ? (
          <button
            type='button'
            className={[
              `badge-size--${size}-color--${color}-outline--${outline}-icon-image`,
            ].join(' ')}
          >
            <div
              className={[`${iconPath(`${color}`, `${iconCountry}`)}`].join(
                ' '
              )}
            />
            <div className={`text-badge-${size}-medium`}> {text}</div>
          </button>
        ) : (
          icon === 'country' && (
            <button
              type='button'
              className={[
                `badge-size--${size}-color--${color}-outline--${outline}`,
              ].join(' ')}
            >
              <div className={`text-badge-${size}-medium`}> {text}</div>
            </button>
          )
        )}

        {icon === 'only' && (
          <button
            type='button'
            className={[
              `icon-badge-size--${size}-color--${color}-outline--${outline}`,
            ].join(' ')}
          >
            <div
              class={[
                `icon-badge-only`,
                `${iconPath(`${color}`, `${iconOnly}`)}`,
              ].join(' ')}
            ></div>
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
    'arrowRight',
    'arrowUp',
    'only',
  ]),
  text: PropTypes.string,
  iconAvatar: PropTypes.string,
  iconCountry: PropTypes.string,
  iconDotLeading: PropTypes.string,
  iconDotTrailing: PropTypes.string,
  iconXCloseLeading: PropTypes.string,
  iconXCloseTrailing: PropTypes.string,
  iconArrowRightLeading: PropTypes.string,
  iconArrowRightTrailing: PropTypes.string,
  iconArrowUpLeading: PropTypes.string,
  iconArrowUpTrailing: PropTypes.string,
  iconOnly: PropTypes.string,
};

Badges.defaultProps = {};
export const iconPath = (color, icon) => {
  if (icon === 'country') {
    return 'circle_country_Australia';
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
  if (icon === 'arrowRight') {
    return iconArrowRightPath(color);
  }
  if (icon === 'arrowUp') {
    return iconArrowUpPath(color);
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

export const iconArrowRightPath = (color, icon) => {
  if (color === 'gray') {
    return 'arrow_right_gray';
  }
  if (color === 'primary') {
    return 'arrow_right_primary';
  }
  if (color === 'error') {
    return 'arrow_right_error';
  }
  if (color === 'warning') {
    return 'arrow_right_warning';
  }
  if (color === 'success') {
    return 'arrow_right_success';
  }
  if (color === 'blueGray') {
    return 'arrow_right_blue-gray';
  }
  if (color === 'blueLight') {
    return 'arrow_right_blue-light';
  }
  if (color === 'blue') {
    return 'arrow_right_blue';
  }
  if (color === 'indigo') {
    return 'arrow_right_indigo';
  }
  if (color === 'purple') {
    return 'arrow_right_purple';
  }
  if (color === 'pink') {
    return 'arrow_right_pink';
  }
  if (color === 'rose') {
    return 'arrow_right_rose';
  } else {
    return 'arrow_right_orange';
  }
};

export const iconArrowUpPath = (color, icon) => {
  if (color === 'gray') {
    return 'arrow_up_gray';
  }
  if (color === 'primary') {
    return 'arrow_up_primary';
  }
  if (color === 'error') {
    return 'arrow_up_error';
  }
  if (color === 'warning') {
    return 'arrow_up_warning';
  }
  if (color === 'success') {
    return 'arrow_up_success';
  }
  if (color === 'blueGray') {
    return 'arrow_up_blue-gray';
  }
  if (color === 'blueLight') {
    return 'arrow_up_blue-light';
  }
  if (color === 'blue') {
    return 'arrow_up_blue';
  }
  if (color === 'indigo') {
    return 'arrow_up_indigo';
  }
  if (color === 'purple') {
    return 'arrow_up_purple';
  }
  if (color === 'pink') {
    return 'arrow_up_pink';
  }
  if (color === 'rose') {
    return 'arrow_up_rose';
  } else {
    return 'arrow_up_orange';
  }
};

export const iconOnlyPath = (color) => {
  if (color === 'gray') {
    return 'plus_gray';
  }
  if (color === 'primary') {
    return 'plus_primary';
  }
  if (color === 'error') {
    return 'plus_error';
  }
  if (color === 'warning') {
    return 'plus_warning';
  }
  if (color === 'success') {
    return 'plus_success';
  }
  if (color === 'blueGray') {
    return 'plus_blue_gray';
  }
  if (color === 'blueLight') {
    return 'plus_blue_light';
  }
  if (color === 'blue') {
    return 'plus_blue';
  }
  if (color === 'indigo') {
    return 'plus_indigo';
  }
  if (color === 'purple') {
    return 'plus_purple';
  }
  if (color === 'pink') {
    return 'plus_pink';
  }
  if (color === 'rose') {
    return 'plus_rose';
  } else {
    return 'plus_orange';
  }
};
