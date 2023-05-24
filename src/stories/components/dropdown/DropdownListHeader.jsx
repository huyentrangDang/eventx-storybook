import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/dropdown-list-header.css';

export const DropdownListHeader = ({ text, type, supportText }) => {
  return (
    <>
      {type === 'header' && (
        <div className={[`dropdown-list-header-type--${type}`].join(' ')}>
          <div className='text-button-sm-semibold'>Account menu</div>
        </div>
      )}

      {type === 'avatarGroup' && (
        <div className={[`dropdown-list-header-type--${type}`].join(' ')}>
          <div
            className={[`dropdown-list-header-label-type--${type}`].join(' ')}
          >
            <div className={[`dropdown-list-header-avatar`].join(' ')}>
              <div className='icon-avatar-online'></div>
            </div>
            <div className={[`dropdown-list-header-component-text`].join(' ')}>
              <div className={[`dropdown-list-header-text`].join(' ')}>
                {text}
              </div>
              <div className={[`dropdown-list-header-support-text`].join(' ')}>
                {supportText}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

DropdownListHeader.propTypes = {
  type: PropTypes.oneOf(['header', 'avatarGroup']),
  text: PropTypes.string,
  supportText: PropTypes.string,
};
