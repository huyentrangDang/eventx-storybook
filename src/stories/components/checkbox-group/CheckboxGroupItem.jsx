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
                `container-text-size--${size}`,
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
                  className={`sub-text-checkbox-group-item-size--${size}-selected--${selected}-state--${state}`}
                >
                  {subText1}
                </span>
              </div>
              <span
                className={`sub-text-checkbox-group-item-size--${size}-selected--${selected}-state--${state}`}
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
        ></div>
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
