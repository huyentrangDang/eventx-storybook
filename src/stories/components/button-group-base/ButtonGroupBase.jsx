import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button-group.css';
import '../../assets/css/button-group-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/button-icon.css';

export const ButtonGroupBase = ({
  current,
  state,
  icon,
  text,
  iconLeading,
  iconTrailing,
  iconDotLeading,
  iconOnly,
}) => {
  return (
    <>
      {icon !== 'only' &&
        (icon === 'false' ? (
          <button
            type='button'
            className={[
              `button-group-current--${current}-state--${state}`,
            ].join(' ')}
          >
            <div className={`text-button-sm-semibold`}> {text}</div>
          </button>
        ) : (
          <button
            type='button'
            className={[
              `button-group-current--${current}-state--${state}`,
            ].join(' ')}
          >
            {icon === 'leading' && (
              <div
                class={[
                  `container-button-group-icon`,
                  `${iconPath(`${current}`, `${iconLeading}`, `${state}`)}`,
                ].join(' ')}
              />
            )}
            {icon === 'dotLeading' && (
              <div
                class={[
                  `container-button-group-icon`,
                  `${iconPath(`${current}`, `${iconDotLeading}`, `${state}`)}`,
                ].join(' ')}
              />
            )}
            <div className={`text-button-sm-semibold`}> {text}</div>
            {icon === 'trailing' && (
              <div
                class={[
                  `container-button-group-icon`,
                  `${iconPath(`${current}`, `${iconTrailing}`, `${state}`)}`,
                ].join(' ')}
              />
            )}
          </button>
        ))}

      {icon === 'only' && (
        <button
          type='button'
          className={[
            `button-group-icon-current--${current}-state--${state}`,
          ].join(' ')}
        >
          <div
            class={[
              `container-button-group-icon`,
              `${iconPath(`${current}`, `${iconOnly}`, `${state}`)}`,
            ].join(' ')}
          />
        </button>
      )}
    </>
  );
};

ButtonGroupBase.propTypes = {
  icon: PropTypes.oneOf(['false', 'leading', 'trailing', 'dotLeading', 'only']),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  iconLeading: PropTypes.string,
  current: PropTypes.oneOf(['true', 'false']),
  iconTrailing: PropTypes.string,
  text: PropTypes.string,
  iconDotLeading: PropTypes.string,
  iconOnly: PropTypes.string,
};

ButtonGroupBase.defaultProps = {};
export const iconPath = (current, icon, state) => {
  if (icon === 'leading' || icon === 'trailing' || icon === 'only') {
    return iconDefaultPath(state, current);
  }
  if (icon === 'dotLeading') {
    return iconDotLeadingPath(state, current);
  } else {
    return icon;
  }
};
export const iconDefaultPath = (state, current) => {
  if (state === 'disabled') {
    return 'circle_gray300';
  }
  if (state === 'hover') {
    return 'circle_gray800';
  }
  if (state === 'default' || state === 'focused') {
    if (current === 'false') {
      return 'circle_gray500';
    } else {
      return 'circle_gray800';
    }
  }
};
export const iconDotLeadingPath = (state, current) => {
  if (state === 'default' || state === 'hover' || state === 'focused') {
    return 'dot_leading_success_500';
  } else {
    return 'dot_leading_gray_300';
  }
};
