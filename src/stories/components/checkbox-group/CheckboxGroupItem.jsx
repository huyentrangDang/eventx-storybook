import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/checkbox-icon.css';
import '../../assets/css/checkbox-group.css';
import '../../assets/css/dropdown.css';
import '../../assets/css/button.css';

export const CheckboxGroupItem = ({
  selected,
  size,
  type,
  state,
  breakpoint,
  text,
  subText1,
  subText2,
}) => {
  return (
    <>
      {type === 'iconSimple' && (
        <div
          className={`checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
        >
          <div
            className={`content-checkbox-group-item-size--${size}-type--${type}-breakpoint--${breakpoint}`}
          >
            <div className={`${iconStartPath(`${size}`, `${state}`)}`} />
            <div
              className={[
                `text-and-support-text`,
                `container-text-size--${size}-breakpoint--${breakpoint}`,
              ].join(' ')}
            >
              <div
                className={`container-text-checkbox-group-item-size--${size}`}
              >
                <span
                  className={[
                    `text-checkbox-group-item-size--${size}-selected--${selected}-state--${state}`,
                    ``,
                  ].join(' ')}
                >
                  {text}
                </span>
                <span
                  className={`subText-text-checkbox-group-item-size--${size}-selected--${selected}-state--${state}`}
                >
                  {subText1}
                </span>
              </div>
              <span
                className={`subText-text-checkbox-group-item-size--${size}-selected--${selected}-state--${state}`}
              >
                {subText2}
              </span>
            </div>
            {breakpoint === 'desktop' && (
              <button
                type='button'
                className={[
                  `text-button-checkbox-group-item-size--${size}`,
                  `button-checkbox-group-item-state--${state}`,
                ].join(' ')}
              >
                Change
              </button>
            )}
          </div>
          <div
            className={`${iconEndPath(`${size}`, `${state}`, `${selected}`)}`}
          />
        </div>
      )}

      {type === 'iconCard' && (
        <div
          className={`checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
        >
          <div
            className={`header-checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
          >
            <div className={`header-content`}>
              <div className={`${iconStartPath(`${size}`, `${state}`)}`} />
              <span
                className={`header-text-selected--${selected}-size--${size}-state--${state}`}
              >
                {text}
              </span>
            </div>
            <div
              className={`${iconEndPath(`${size}`, `${state}`, `${selected}`)}`}
            />
          </div>
          <div
            className={`body-checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
          >
            {breakpoint === 'mobile' && (
              <div
                className={`badge-checkbox-group-item-size--${size}-type--${type}-state--${state}`}
              >
                <span
                  className={`text-badge-checkbox-group-item-size--${size}-type--${type}`}
                >
                  Limited time only
                </span>
              </div>
            )}
            <div
              className={`container-text-checkbox-group-item-size--${size}-type--${type}`}
            >
              <div
                className={`container-inner-text-checkbox-group-item-size--${size}-type--${type}`}
              >
                <span
                  className={`first-text-checkbox-group-item-size--${size}-type--${type}`}
                >
                  {subText1}
                </span>
                <div
                  className={`container-second-text-checkbox-group-item-type--${type}`}
                >
                  <span
                    className={`second-text-checkbox-group-item-size--${size}-type--${type}`}
                  >
                    {subText2}
                  </span>
                </div>
              </div>
              <span
                className={`second-text-checkbox-group-item-size--${size}-type--${type}`}
              >
                {subText2}
              </span>
            </div>
            {breakpoint === 'desktop' && (
              <div
                className={`badge-checkbox-group-item-size--${size}-type--${type}-state--${state}`}
              >
                <span
                  className={`text-badge-checkbox-group-item-size--${size}-type--${type}`}
                >
                  Limited time only
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {type === 'price' && (
        <div
          className={`checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
        >
          <div
            className={`header-checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
          >
            <div className={`header-content`}>
              <div className={`${iconStartPath(`${size}`, `${state}`)}`} />
              <span
                className={`header-text-selected--${selected}-size--${size}-state--${state}`}
              >
                {text}
              </span>
            </div>
            <div
              className={`${iconEndPath(`${size}`, `${state}`, `${selected}`)}`}
            />
          </div>
          <div className={`body-checkbox-group-item-type--${type}`}>
            <span
              className={`text-regular-checkbox-group-item-size--${size}-type--${type}`}
            >
              {text}
            </span>
          </div>
          <div
            className={`component-footer-checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}`}
          >
            <div className={`footer-checkbox-group-item-type--${type}`}>
              <span
                className={`text-regular-checkbox-group-item-size--${size}-type--${type}`}
              >
                {subText2}
              </span>
              <span
                className={`text-semibold-checkbox-group-item-size--${size}-type--${type}`}
              >
                {subText1}
              </span>
              <span
                className={`text-regular-checkbox-group-item-size--${size}-type--${type}`}
              >
                {subText2}
              </span>
            </div>
            <div className={`footer-checkbox-group-item-type--${type}`}>
              <span
                className={`text-regular-checkbox-group-item-size--${size}-type--${type}`}
              >
                {subText2}
              </span>
              <span
                className={`text-semibold-checkbox-group-item-size--${size}-type--${type}`}
              >
                {subText1}
              </span>
              <span
                className={`text-regular-checkbox-group-item-size--${size}-type--${type}`}
              >
                {subText2}
              </span>
            </div>
          </div>
        </div>
      )}

      {type === 'avatar' && (
        <div
          className={`checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
        >
          <div
            className={`content-checkbox-group-item-size--${size}-type--${type}-breakpoint--${breakpoint}`}
          >
            <div className={`${iconAvatarPath(`${size}`)}`} />
            <div
              className={[
                `text-and-support-text-size--${size}-type--${type}-breakpoint--${breakpoint}`,
                `container-text-size--${size}-breakpoint--${breakpoint}`,
              ].join(' ')}
            >
              <div className={`text-and-subtext-size--${size}-type--${type}`}>
                <span
                  className={[
                    `text-size--${size}-type--${type}`,
                    `text-color-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {text}
                </span>
                <span
                  className={[
                    `subText-size--${size}-type--${type}`,
                    `subText-color-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {subText1}
                </span>
              </div>
              <span
                className={[
                  `subText-size--${size}-type--${type}`,
                  `subText-color-selected--${selected}-type--${type}-state--${state}`,
                ].join(' ')}
              >
                {subText2}
              </span>
            </div>
            {breakpoint === 'desktop' && (
              <button
                type='button'
                className={`button-type--${type}-breakpoint--${breakpoint}`}
              >
                <span
                  className={[
                    `text-semibold-size--${size}-type--${type}-breakpoint--${breakpoint}`,
                    `text-color-button-type--${type}-state--${state}-breakpoint--${breakpoint}`,
                  ].join(' ')}
                >
                  Change
                </span>
              </button>
            )}
          </div>
          <div
            className={`${iconEndPath(`${size}`, `${state}`, `${selected}`)}`}
          />
        </div>
      )}

      {type === 'paymentIcon' && (
        <div
          className={`checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
        >
          <div
            className={`body-checkbox-group-item-size--${size}-type--${type}-breakpoint--${breakpoint}`}
          >
            <icon className={`icon-payment`} />
            <div
              className={[
                `content-checkbox-group-item-size--${size}-type--${type}`,
                `container-text-size--${size}-breakpoint--${breakpoint}`,
              ].join(' ')}
            >
              <div
                className={`text-and-support-text-size--${size}-type--${type}`}
              >
                <span
                  className={[
                    `text-size--${size}-type--${type}`,
                    `text-color-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {text}
                </span>
                <span
                  className={[
                    `subText-size--${size}-type--${type}`,
                    `subText-color-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {subText1}
                </span>
              </div>
              <div className={`actions-type--${type}`}>
                <button className={`button-type--${type}`}>
                  <span
                    className={[
                      `text-button-type--${type}`,
                      `text-color-button-selected--${selected}-type--${type}-state--${state}`,
                    ].join(' ')}
                  >
                    Set as default
                  </span>
                </button>
                <button className={`button-type--${type}`}>
                  <span
                    className={[
                      `text-button-type--${type}`,
                      `text-color-button-type--${type}`,
                    ].join(' ')}
                  >
                    Edit
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${iconEndPath(`${size}`, `${state}`, `${selected}`)}`}
          />
        </div>
      )}

      {type === 'radioButton' && (
        <div
          className={`checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
        >
          <div
            className={`content-checkbox-group-item-size--${size}-type--${type}`}
          >
            <div className={`input-checkbox-group-item-type--${type}`}>
              <div
                className={`${iconTypeRadioButtonPath(
                  `${size}`,
                  `${state}`,
                  `${selected}`
                )}`}
              />
            </div>
            <div
              className={[
                `text-and-support-text-size--${size}-type--${type}`,
                `container-text-size--${size}-breakpoint--${breakpoint}`,
              ].join(' ')}
            >
              <div className={`text-and-subtext-size--${size}-type--${type}`}>
                <span
                  className={[
                    `text-checkbox-group-item-size--${size}-type--${type}`,
                    `text-color-checkbox-group-item-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {text}
                </span>
                <span
                  className={[
                    `subText-checkbox-group-item-size--${size}-type--${type}`,
                    `subText-color-checkbox-group-item-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {subText1}
                </span>
              </div>
              <span
                className={[
                  `subText-checkbox-group-item-size--${size}-type--${type}`,
                  `subText-color-checkbox-group-item-selected--${selected}-type--${type}-state--${state}`,
                ].join(' ')}
              >
                {subText2}
              </span>
            </div>
          </div>
        </div>
      )}

      {type === 'checkbox' && (
        <div
          className={`checkbox-group-item-selected--${selected}-size--${size}-type--${type}-state--${state}-breakpoint--${breakpoint}`}
        >
          <div
            className={`content-checkbox-group-item-size--${size}-type--${type}`}
          >
            <div className={`input-checkbox-group-item-type--${type}`}>
              <div
                className={`${iconTypeCheckboxPath(
                  `${size}`,
                  `${state}`,
                  `${selected}`
                )}`}
              />
            </div>
            <div
              className={[
                `text-and-support-text-size--${size}-type--${type}`,
                `container-text-size--${size}-breakpoint--${breakpoint}`,
              ].join(' ')}
            >
              <div className={`text-and-subtext-size--${size}-type--${type}`}>
                <span
                  className={[
                    `text-checkbox-group-item-size--${size}-type--${type}`,
                    `text-color-checkbox-group-item-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {text}
                </span>
                <span
                  className={[
                    `subText-checkbox-group-item-size--${size}-type--${type}`,
                    `subText-color-checkbox-group-item-selected--${selected}-type--${type}-state--${state}`,
                  ].join(' ')}
                >
                  {subText1}
                </span>
              </div>
              <span
                className={[
                  `subText-checkbox-group-item-size--${size}-type--${type}`,
                  `subText-color-checkbox-group-item-selected--${selected}-type--${type}-state--${state}`,
                ].join(' ')}
              >
                {subText2}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CheckboxGroupItem.propTypes = {
  selected: PropTypes.oneOf(['true', 'false']),
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf([
    'radioButton',
    'checkbox',
    'iconSimple',
    'avatar',
    'paymentIcon',
    'iconCard',
    'price',
  ]),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  breakpoint: PropTypes.oneOf(['mobile', 'desktop']),
  text: PropTypes.string,
  subText1: PropTypes.string,
  subText2: PropTypes.string,
};

CheckboxGroupItem.defaultProps = {};
export const iconPath = (current, icon, state) => {};

export const iconStartPath = (size, state) => {
  switch (size) {
    case 'sm': {
      if (state === 'default' || state === 'hover' || state === 'focused') {
        return 'icon-layers-two-sm-primary-100';
      }
      if (state === 'disabled') {
        return 'icon-layers-two-sm-gray-100';
      }
      break;
    }
    case 'md': {
      if (state === 'default' || state === 'hover' || state === 'focused') {
        return 'icon-layers-two-md-primary-100';
      }
      if (state === 'disabled') {
        return 'icon-layers-two-md-gray-100';
      }
      break;
    }
    default: {
      return {};
    }
  }
};

export const iconEndPath = (size, state, selected) => {
  switch (size) {
    case 'sm': {
      if (selected === 'false') {
        if (state === 'default') {
          return 'icon-check-circle-sm-default';
        }
        if (state === 'hover') {
          return 'icon-check-circle-sm-hover';
        }
        if (state === 'focused') {
          return 'icon-check-circle-sm-focused';
        }
        if (state === 'disabled') {
          return 'icon-check-circle-sm-disabled';
        }
      }

      if (selected === 'true') {
        if (state === 'default') {
          return 'icon-check-circle-sm-default-selected';
        }
        if (state === 'hover') {
          return 'icon-check-circle-sm-hover-selected';
        }
        if (state === 'focused') {
          return 'icon-check-circle-sm-focused-selected';
        }
        if (state === 'disabled') {
          return 'icon-check-circle-sm-disabled-selected';
        }
      }

      break;
    }
    case 'md': {
      if (selected === 'false') {
        if (state === 'default') {
          return 'icon-check-circle-md-default';
        }
        if (state === 'hover') {
          return 'icon-check-circle-md-hover';
        }
        if (state === 'focused') {
          return 'icon-check-circle-md-focused';
        }
        if (state === 'disabled') {
          return 'icon-check-circle-sm-disabled';
        }
      }

      if (selected === 'true') {
        if (state === 'default') {
          return 'icon-check-circle-md-default-selected';
        }
        if (state === 'hover') {
          return 'icon-check-circle-md-hover-selected';
        }
        if (state === 'focused') {
          return 'icon-check-circle-md-focused-selected';
        }
        if (state === 'disabled') {
          return 'icon-check-circle-md-disabled-selected';
        }
      }
      break;
    }
    default: {
      return {};
    }
  }
};

export const iconAvatarPath = (size) => {
  if (size === 'sm') {
    return 'icon-avatar-sm';
  }
  if (size === 'md') {
    return 'icon-avatar-md';
  }
};

export const iconTypeRadioButtonPath = (size, state, selected) => {
  switch (size) {
    case 'sm': {
      if (selected === 'false') {
        if (state === 'default') {
          return 'icon-check-circle-sm-default';
        }
        if (state === 'hover') {
          return 'icon-check-circle-sm-hover';
        }
        if (state === 'focused') {
          return 'icon-check-circle-sm-focused';
        }
        if (state === 'disabled') {
          return 'icon-check-circle-sm-disabled';
        }
      }

      if (selected === 'true') {
        if (state === 'default' || state === 'hover' || state === 'focused') {
          return 'icon-check-radio-sm-primary-600';
        }
        if (state === 'disabled') {
          return 'icon-check-radio-sm-gray-300';
        }
      }

      break;
    }
    case 'md': {
      if (selected === 'false') {
        if (state === 'default') {
          return 'icon-check-circle-md-default';
        }
        if (state === 'hover') {
          return 'icon-check-circle-md-hover';
        }
        if (state === 'focused') {
          return 'icon-check-circle-md-focused';
        }
        if (state === 'disabled') {
          return 'icon-check-circle-sm-disabled';
        }
      }

      if (selected === 'true') {
        if (state === 'default' || state === 'hover' || state === 'focused') {
          return 'icon-check-radio-md-primary-600';
        }
        if (state === 'disabled') {
          return 'icon-check-radio-md-gray-300';
        }
      }
      break;
    }
    default: {
      return {};
    }
  }
};

export const iconTypeCheckboxPath = (size, state, selected) => {
  switch (size) {
    case 'sm': {
      if (selected === 'false') {
        if (state === 'default') {
          return 'icon-square-sm-default';
        }
        if (state === 'hover') {
          return 'icon-square-sm-hover';
        }
        if (state === 'focused') {
          return 'icon-square-sm-focused';
        }
        if (state === 'disabled') {
          return 'icon-square-sm-disabled';
        }
      }

      if (selected === 'true') {
        if (state === 'default' || state === 'hover' || state === 'focused') {
          return 'icon-check-square-sm-primary-600';
        }
        if (state === 'disabled') {
          return 'icon-check-square-sm-gray-300';
        }
      }

      break;
    }
    case 'md': {
      if (selected === 'false') {
        if (state === 'default') {
          return 'icon-square-md-default';
        }
        if (state === 'hover') {
          return 'icon-square-md-hover';
        }
        if (state === 'focused') {
          return 'icon-square-md-focused';
        }
        if (state === 'disabled') {
          return 'icon-square-md-disabled';
        }
      }

      if (selected === 'true') {
        if (state === 'default' || state === 'hover' || state === 'focused') {
          return 'icon-check-square-md-primary-600';
        }
        if (state === 'disabled') {
          return 'icon-check-square-md-gray-300';
        }
      }
      break;
    }
    default: {
      return {};
    }
  }
};
