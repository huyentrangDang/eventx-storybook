import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/button-group.css';
import '../../assets/css/button-group-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/page-header.css';
import '../../assets/css/button-icon.css';
import { ButtonGroupBase } from '../button-group-base/ButtonGroupBase';

export const ButtonGroup = ({
  // current,
  // state,
  icon,
  // text,
  // iconLeading,
  // iconTrailing,
  // iconOnly,
  // numberButton,
  buttonArray,
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
        {buttonArray?.map(
          ({ current, state, text, iconLeading, iconTrailing, iconOnly }) => (
            <ButtonGroupBase
              current={current}
              icon={icon}
              state={state}
              text={text}
              iconLeading={iconLeading}
              iconTrailing={iconTrailing}
              iconOnly={iconOnly}
            />
          )
        )}
      </div>
    </>
  );
};

ButtonGroup.propTypes = {
  icon: PropTypes.oneOf(['false', 'leading', 'trailing', 'only']),
  buttonArray: PropTypes.arrayOf(
    PropTypes.shape({
      current: PropTypes.string,
      state: PropTypes.string,
      text: PropTypes.string,
      iconLeading: PropTypes.string,
      iconTrailing: PropTypes.string,
      iconOnly: PropTypes.string,
    })
  ),
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
