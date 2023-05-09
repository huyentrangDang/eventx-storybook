import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/button-close-x.css'
export const ButtonCloseX = ({color, state, size, theme, ...props }) => {

    return (

      <button
        type="button"
        className={['base-button-icon', `button-close-x-size--${size}`, `button-close-x-color--${color}-theme--${theme}-state--${state}`].join(' ')}
      >
        <icon className= {`icon-x-close-size--${size}-color--${color}-theme--${theme}-state--${state}`}></icon>
      </button>
    );
  };
  ButtonCloseX.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.oneOf(['primary', 'gray']),
    theme: PropTypes.oneOf(['dark', 'light']),
    state: PropTypes.oneOf(['default', 'hover', 'focused'])
};