import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/dropdown-listitem.css';
import '../../assets/css/dropdown-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/button-icon.css';

export const DropdownListItem = ({
  icon,
  text,
  checkbox,
  state,
  iconLeading,
}) => {
  return (
    <>
      <button
        type='button'
        className={[`dropdown-listitem`].join(' ')}
      >
        {icon === 'false' ? (
          checkbox === 'false' ? (
            <div
              className={[
                `dropdown-listitem-content-icon--${icon}-checkbox--${checkbox}-state--${state}`,
              ].join(' ')}
            >
              <div className={`text-dropdown-listitem-medium`}> {text}</div>
              <icon className={[`icon-dropdown-shortcut-state--${state}`]} />
            </div>
          ) : (
            <>
              <div
                className={[
                  `dropdown-listitem-content-icon--${icon}-checkbox--${checkbox}-state--${state}`,
                ].join(' ')}
              >
                <div
                  className={[`dropdown-listitem-state--${state}`].join(' ')}
                >
                  <button className={[`checkbox-dropdown-listitem`].join(' ')}>
                    <icon
                      className={[`icon-checkbox-dropdown-state--${state}`]}
                    />{' '}
                  </button>
                  <div className={`text-dropdown-listitem-medium`}> {text}</div>
                </div>
                <icon className={[`icon-dropdown-shortcut-state--${state}`]} />
              </div>
            </>
          )
        ) : checkbox === 'false' ? (
          <div
            className={[
              `dropdown-listitem-content-icon--${icon}-checkbox--${checkbox}-state--${state}`,
            ].join(' ')}
          >
            <div className={[`dropdown-listitem-state--${state}`].join(' ')}>
              <div
                class={[
                  `container-icon-dropdown`,
                  `${iconPath(`${iconLeading}`, `${state}`)}`,
                ].join(' ')}
              />
              <div className={`text-dropdown-listitem-medium`}> {text}</div>
            </div>
            <icon className={[`icon-dropdown-shortcut-state--${state}`]} />
          </div>
        ) : (
          <div
            className={[
              `dropdown-listitem-content-icon--${icon}-checkbox--${checkbox}-state--${state}`,
            ].join(' ')}
          >
            <div className={`text-dropdown-listitem-medium`}> {text}</div>
            <icon className={[`icon-dropdown-shortcut-state--${state}`]} />
          </div>
        )}
      </button>
    </>
  );
};

DropdownListItem.propTypes = {
  icon: PropTypes.oneOf(['false', 'true']),
  checkbox: PropTypes.oneOf(['true', 'false']),
  text: PropTypes.string,
  state: PropTypes.oneOf(['default', 'hover', 'focus', 'disabled']),
  iconLeading: PropTypes.string,
};

DropdownListItem.defaultProps = {};
export const iconPath = (icon, state) => {
  if (icon === 'true') {
    if (state === 'disabled') {
      return 'circle_gray200';
    } else {
      return 'circle_gray700';
    }
  } else {
    return icon;
  }
};
