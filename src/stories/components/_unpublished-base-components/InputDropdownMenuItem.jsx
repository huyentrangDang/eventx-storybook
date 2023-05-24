import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/input-dropdown.css';
import '../../assets/css/button-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/input-icon.css';
import '../../assets/css/badge-icon.css';

export const InputDropdownMenuItem = ({
  selected,
  type,
  state,
  supporting,
  text,
  supportText,
  iconDotLeading,
}) => {
  return (
    <>
      <button className={[`input-dropdown`].join(' ')}>
        {type !== 'company' && (
          <div
            type='button'
            className={[
              `content-input-dropdown-selected--${selected}-type--${type}-state--${state}`,
            ].join(' ')}
          >
            <div className={[`component-text-input-dropdown`].join(' ')}>
              {type === 'iconLeading' && (
                <div class={[`user-input-state--${state}`].join(' ')} />
              )}
              {type === 'dotLeading' && (
                <div className={`input-icon-dotLeading`}>
                  <div
                    class={[
                      `${iconPath(`${iconDotLeading}`, `${state}`)}`,
                    ].join(' ')}
                  />
                </div>
              )}
              {type === 'avatarLeading' && (
                <div class={[`avatar-input`].join(' ')} />
              )}
              <div className={`input-dropdown-text-state--${state}`}>
                {text}
              </div>
              <div className={`input-dropdown-support-text-state--${state}`}>
                {supportText}
              </div>
            </div>
            {selected === 'true' && (
              <div class={[`checked-state--${state}`].join(' ')} />
            )}
          </div>
        )}

        {type === 'company' && (
          <div
            type='button'
            className={[
              `content-input-dropdown-selected--${selected}-type--${type}-state--${state}`,
            ].join(' ')}
          >
            <div className={[`avatar-label-group`].join(' ')}>
              <div class={[`icon-avatar-company`].join(' ')} />
              <div className={`text-and-support-text`}>
                <div className={`text-type--${type}-state--${state}`}>
                  {text}
                </div>
                <div className={`support-text-type--${type}-state--${state}`}>
                  {supportText}
                </div>
              </div>
            </div>
            {selected === 'true' && (
              <button
                type='button'
                className={`button-input-state--${state}`}
              >
                <div className={`text-button-input-md-semibold`}>Edit</div>
              </button>
            )}
          </div>
        )}
      </button>
    </>
  );
};

InputDropdownMenuItem.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'dotLeading',
    'iconLeading',
    'avatarLeading',
    'company',
  ]),
  selected: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['default', 'hover', 'focus', 'disabled']),
  text: PropTypes.string,
  supportText: PropTypes.string,
};

InputDropdownMenuItem.defaultProps = {};
export const iconPath = (icon, state) => {
  if (icon === 'dotLeading') {
    if (state === 'disabled') {
      return 'dot_leading_gray';
    } else {
      return 'dot_leading_success';
    }
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
