import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/button-social.css'


export const ButtonSocial = ({social, supportText, theme, state}) => {

    return (

      <button
        type="button"
        className={['base-button-icon', `button-social--${social}-supportText--${supportText}-theme--${theme}-state--${state}`].join(' ')}
      >
      <span class={`${social}-${theme}`}></span>
      {supportText === 'true' && <span class="social-text">Sign in with {social.charAt(0).toUpperCase() + social.slice(1)}</span>}
      </button>
    );
  };
  ButtonSocial.propTypes = {
  social: PropTypes.oneOf(['google', 'facebook', 'apple']),
  supportText: PropTypes.oneOf(['true','false']),
  theme: PropTypes.oneOf(['brand', 'color', 'color-with-brand']),
  state: PropTypes.oneOf(['default', 'hover', 'focused'])
};
