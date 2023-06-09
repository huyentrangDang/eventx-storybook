import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button.css';
import '../../assets/css/button-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import { ButtonIcon } from '../button-icon/ButtonIcon';
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  destructive,
  hierarchy,
  state,
  size,
  icon,
  showIconLeading,
  showiconTrailing,
  text,
  iconLeading,
  iconTrailing,
  widthButton,
  colorIcon,
}) => {
  return (
    <>
      {icon !== 'only' && (
        <div style={{ width: '100%' }}>
          {hierarchy !== 'linkColor' && hierarchy !== 'linkGray' && (
            <div>
              <button
                type='button'
                className={[
                  `button-size--${size}-hierarchy--${hierarchy}-destructive--${destructive}-state--${state}`,
                ].join(' ')}
                style={{ width: widthButton }}
              >
                {showIconLeading === 'true' && (
                  <div
                    class={[
                      `container-icon-size--${size}`,
                      `${iconPath(
                        `${size}`,
                        `${hierarchy}`,
                        `${iconLeading}`,
                        `${state}`,
                        `${destructive}`
                      )}`,
                    ].join(' ')}
                  ></div>
                )}
                <div className={`text-button-${size}-semibold`}> {text}</div>
                {showiconTrailing === 'true' && (
                  <div
                    class={[
                      `container-icon-size--${size}`,
                      `${iconPath(
                        `${size}`,
                        `${hierarchy}`,
                        `${iconTrailing}`,
                        `${state}`,
                        `${destructive}`
                      )}`,
                    ].join(' ')}
                  ></div>
                )}
              </button>
            </div>
          )}
          {(hierarchy === 'linkColor' || hierarchy === 'linkGray') && (
            <div
              className={[
                `button-icon-${icon}-size--${size}`,
                `button-size--${size}-hierarchy--${hierarchy}-destructive--${destructive}-state--${state}`,
              ].join(' ')}
            >
              {showIconLeading === 'true' && (
                <div
                  class={[
                    `container-icon-size--${size}`,
                    `${iconPath(
                      `${size}`,
                      `${hierarchy}`,
                      `${iconLeading}`,
                      `${state}`,
                      `${destructive}`
                    )}`,
                  ].join(' ')}
                ></div>
              )}
              <div className={`text-button-${size}-semibold`}> {text}</div>
              {showiconTrailing === 'true' && (
                <div
                  class={[
                    `container-icon-size--${size}`,
                    `${iconPath(
                      `${size}`,
                      `${hierarchy}`,
                      `${iconTrailing}`,
                      `${state}`,
                      `${destructive}`
                    )}`,
                  ].join(' ')}
                ></div>
              )}
            </div>
          )}
        </div>
      )}
      {icon === 'only' && (
        <button
          type='button'
          className={[
            `button-size--${size}-hierarchy--${hierarchy}-icon--${icon}-destructive--${destructive}-state--${state}`,
          ].join(' ')}
        >
          <div
            class={[
              `container-icon-only-size--${size}`,
              `${iconPath(
                `${size}`,
                `${hierarchy}`,
                `${iconTrailing}`,
                `${state}`,
                `${destructive}`
              )}`,
              iconTrailing ? `container-icon-size--${size}` : '',
            ].join(' ')}
            style={{ color: colorIcon }}
          ></div>
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  icon: PropTypes.oneOf(['default', 'dotLeading', 'only']),
  destructive: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  showIconLeading: PropTypes.oneOf(['true', 'false']),
  iconLeading: PropTypes.string,
  showiconTrailing: PropTypes.oneOf(['true', 'false']),
  iconTrailing: PropTypes.string,
  text: PropTypes.string,
  hierarchy: PropTypes.oneOf([
    'primary',
    'secondaryGray',
    'secondaryColor',
    'tertiaryGray',
    'tertiaryColor',
    'linkGray',
    'linkColor',
  ]),
};

Button.defaultProps = {};
export const iconPath = (size, hierarchy, icon, state, destructive) => {
  if (icon === 'default') {
    return iconDefaultPath(size, hierarchy, state, destructive);
  }
  if (icon === 'dotLeading') {
    return iconDotLeadingPath(size, hierarchy, state, destructive);
  } else {
    return icon;
  }
};
export const iconDefaultPath = (size, hierarchy, state, destructive) => {
  switch (size) {
    case 'sm': {
      if (hierarchy === 'primary') {
        return 'circle_white_sm';
      }
      if (destructive === 'false') {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray700_sm';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_gray300_sm';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_gray800_sm';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_sm';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_primary300_sm';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_primary800_sm';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_sm';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_gray300_sm';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_gray700_sm';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_sm';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_gray300_sm';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_primary800_sm';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_sm';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_gray300_sm';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_gray700_sm';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_sm';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_gray300_sm';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_primary800_sm';
          }
        }
      } else {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_sm';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_error300_sm';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_error800_sm';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_sm';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_error300_sm';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_error800_sm';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_sm';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_error300_sm';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_error800_sm';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_sm';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_error300_sm';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_error800_sm';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_sm';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_error300_sm';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_error800_sm';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_sm';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_error300_sm';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_error800_sm';
          }
        }
      }

      break;
    }
    case 'md': {
      if (hierarchy === 'primary') {
        return 'circle_white_md';
      }
      if (destructive === 'false') {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray700_md';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_gray300_md';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_gray800_md';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_md';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_primary300_md';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_primary800_md';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_md';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_gray300_md';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_gray700_md';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_md';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_gray300_md';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_primary800_md';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_md';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_gray300_md';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_gray700_md';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_md';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_gray300_md';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_primary800_md';
          }
        }
      } else {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_md';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_error300_md';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_error800_md';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_md';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_error300_md';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_error800_md';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_md';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_error300_md';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_error800_md';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_md';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_error300_md';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_error800_md';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_md';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_error300_md';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_error800_md';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_md';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_error300_md';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_error800_md';
          }
        }
      }
      break;
    }
    case 'lg': {
      if (hierarchy === 'primary') {
        return 'circle_white_lg';
      }
      if (destructive === 'false') {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray700_lg';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_gray300_lg';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_gray800_lg';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_lg';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_primary300_lg';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_primary800_lg';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_lg';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_gray300_lg';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_gray700_lg';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_lg';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_gray300_lg';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_primary800_lg';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_lg';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_gray300_lg';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_gray700_lg';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_lg';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_gray300_lg';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_primary800_lg';
          }
        }
      } else {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_lg';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_error300_lg';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_error800_lg';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_lg';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_error300_lg';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_error800_lg';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_lg';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_error300_lg';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_error800_lg';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_lg';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_error300_lg';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_error800_lg';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_lg';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_error300_lg';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_error800_lg';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_lg';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_error300_lg';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_error800_lg';
          }
        }
      }
      break;
    }
    case 'xl': {
      if (hierarchy === 'primary') {
        return 'circle_white_xl';
      }
      if (destructive === 'false') {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray700_xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_gray300_xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_gray800_xl';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_primary300_xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_primary800_xl';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_gray300_xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_gray700_xl';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_gray300_xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_primary800_xl';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_xl';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_gray300_xl';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_gray700_xl';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_xl';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_gray300_xl';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_primary800_xl';
          }
        }
      } else {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_error300_xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_error800_xl';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_error300_xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_error800_xl';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_error300_xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_error800_xl';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_error300_xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_error800_xl';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_xl';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_error300_xl';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_error800_xl';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_xl';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_error300_xl';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_error800_xl';
          }
        }
      }

      break;
    }
    case '2xl': {
      if (hierarchy === 'primary') {
        return 'circle_white_2xl';
      }
      if (destructive === 'false') {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray700_2xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_gray300_2xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_gray800_2xl';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_2xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_primary300_2xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_primary800_2xl';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_2xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_gray300_2xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_gray700_2xl';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_2xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_gray300_2xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_primary800_2xl';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_gray600_2xl';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_gray300_2xl';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_gray700_2xl';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_primary700_2xl';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_gray300_2xl';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_primary800_2xl';
          }
        }
      } else {
        if (hierarchy === 'secondaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_2xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'disabled') {
            return 'circle_error300_2xl';
          }
          if (hierarchy === 'secondaryGray' && state === 'hover') {
            return 'circle_error800_2xl';
          }
        }
        if (hierarchy === 'secondaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_2xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'disabled') {
            return 'circle_error300_2xl';
          }
          if (hierarchy === 'secondaryColor' && state === 'hover') {
            return 'circle_error800_2xl';
          }
        }
        if (hierarchy === 'tertiaryGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_2xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'disabled') {
            return 'circle_error300_2xl';
          }
          if (hierarchy === 'tertiaryGray' && state === 'hover') {
            return 'circle_error800_2xl';
          }
        }
        if (hierarchy === 'tertiaryColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_2xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'disabled') {
            return 'circle_error300_2xl';
          }
          if (hierarchy === 'tertiaryColor' && state === 'hover') {
            return 'circle_error800_2xl';
          }
        }
        if (hierarchy === 'linkGray') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_2xl';
          }
          if (hierarchy === 'linkGray' && state === 'disabled') {
            return 'circle_error300_2xl';
          }
          if (hierarchy === 'linkGray' && state === 'hover') {
            return 'circle_error800_2xl';
          }
        }
        if (hierarchy === 'linkColor') {
          if (state === 'default' || state === 'focused') {
            return 'circle_error700_2xl';
          }
          if (hierarchy === 'linkColor' && state === 'disabled') {
            return 'circle_error300_2xl';
          }
          if (hierarchy === 'linkColor' && state === 'hover') {
            return 'circle_error800_2xl';
          }
        }
      }

      break;
    }
    default: {
      return {};
    }
  }
};
export const iconDotLeadingPath = (size, hierarchy, state, destructive) => {
  if (hierarchy === 'primary') {
    return 'dot_leading_white';
  }
  if (destructive === 'false') {
    if (state !== 'disabled') {
      return 'dot_leading_success_500';
    }
    if (
      hierarchy === 'secondaryGray' ||
      hierarchy === 'tertiaryGray' ||
      hierarchy === 'linkGray' ||
      hierarchy === 'linkColor'
    ) {
      return 'dot_leading_gray_300';
    }
    if (hierarchy === 'secondaryColor') {
      return 'dot_leading_priamry_300';
    }
  } else {
    return 'dot_leading_error_300';
  }
};
