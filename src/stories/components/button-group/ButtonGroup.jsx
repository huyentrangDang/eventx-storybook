import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button-group.css';
import '../../assets/css/button-group-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/button-icon.css';
import { ButtonGroupBase } from '../button-group-base/ButtonGroupBase';

export const ButtonGroup = ({
  current,
  state,
  icon,
  text,
  iconLeading,
  iconTrailing,
  iconOnly,
}) => {
  return (
    <>
      {/* {icon !== 'only' && (
        <div>
          {icon === 'false' ? (
            <div className='button-group'>
              {Array.from(new Array(3)).map(() => (
                <button
                  type='button'
                  className={[
                    `button-group-current--${current}-state--${state}`,
                  ].join(' ')}
                >
                  <div className={`text-button-sm-semibold`}> {text}</div>
                </button>
              ))}
            </div>
          ) : (
            <div className='button-group'>
              {Array.from(new Array(3)).map(() => (
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
                        `${iconPath(
                          `${current}`,
                          `${iconLeading}`,
                          `${state}`
                        )}`,
                      ].join(' ')}
                    />
                  )}

                  <div className={`text-button-sm-semibold`}> {text}</div>

                  {icon === 'trailing' && (
                    <div
                      class={[
                        `container-button-group-icon`,
                        `${iconPath(
                          `${current}`,
                          `${iconTrailing}`,
                          `${state}`
                        )}`,
                      ].join(' ')}
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {icon === 'only' && (
        <div className='button-group'>
          {Array.from(new Array(3)).map(() => (
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
          ))}
        </div>
      )} */}
      <div className={`button-group`}>
        {Array.from(new Array(3)).map((_, index) => (
          <ButtonGroupBase
            current={'false'}
            icon={icon}
            state={'default'}
            text={'Text'}
            iconDotLeading={iconPath(`${'false'}`, `${icon}`, `${'default'}`)}
            iconLeading={iconPath(`${'false'}`, `${icon}`, `${'default'}`)}
            iconTrailing={iconPath(`${'false'}`, `${icon}`, `${'default'}`)}
            iconOnly={iconPath(`${'false'}`, `${icon}`, `${'default'}`)}
          />
        ))}
      </div>
    </>
  );
};

ButtonGroup.propTypes = {
  icon: PropTypes.oneOf(['false', 'leading', 'trailing', 'only']),
  // state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  // iconLeading: PropTypes.string,
  // current: PropTypes.oneOf(['true', 'false']),
  // iconTrailing: PropTypes.string,
  // text: PropTypes.string,
  // iconOnly: PropTypes.string,
};

ButtonGroup.defaultProps = {};
export const iconPath = (current, icon, state) => {
  if (icon === 'leading' || icon === 'trailing') {
    return iconDefaultPath(state, current);
  }
  if (icon === 'only') {
    return 'arrow_left_gray500';
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
