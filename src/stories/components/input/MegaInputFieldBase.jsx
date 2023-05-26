import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/unpublished-base.css';
import '../../assets/css/mega-icon.css';

export const MegaInputFieldBase = ({ state, size }) => {
  return (
    <>
      <div className={`input-field-base-size--${size}-state--${state}`}>
        <icon className={`mega-size--${size}-state--${state}`} />
      </div>
    </>
  );
};

MegaInputFieldBase.propTypes = {
  state: PropTypes.oneOf(['placeholder', 'focused', 'disabled', 'filled']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

MegaInputFieldBase.defaultProps = {};
