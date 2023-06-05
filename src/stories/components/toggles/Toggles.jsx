import PropTypes from 'prop-types';
import '../../assets/css/toggle.css';
export const Toggles = ({
  pressed,
  size,
  showText,
  text,
  state,
  supportingText,
  colorText,
  colorSupportText,
}) => {
  return (
    <>
      <div
        className={`toggle-pressed--${pressed}-size--${size}-showText--${showText}-state--${state}`}
      >
        <div className={`${iconTogglePath(size, state, pressed)}`}></div>
        {showText === 'true' && (
          <div className={`toggle-text-supportingText-size--${size}`}>
            <div
              className={`text-toggle-size--${size}-medium`}
              style={{ color: colorText }}
            >
              {text}
            </div>
            <div
              className={`supportingText-toggle-size--${size}-medium`}
              style={{ color: colorSupportText }}
            >
              {supportingText}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Toggles.propTypes = {
  pressed: PropTypes.oneOf(['true', 'false']),
  size: PropTypes.oneOf(['sm', 'md']),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  showText: PropTypes.oneOf(['true', 'false']),
  text: PropTypes.string,
  supportingText: PropTypes.string,
};

export const iconTogglePath = (size, state, pressed) => {
  switch (size) {
    case 'sm': {
      if (pressed === 'false') {
        if (state === 'default') {
          return 'toggle_gray400_sm';
        }
        if (state === 'hover') {
          return 'toggle_gray300_sm';
        }
        if (state === 'focused') {
          return 'toggle_gray100_sm_focused';
        }
        if (state === 'disabled') {
          return 'toggle_gray200_sm';
        }
      } else {
        if (state === 'default') {
          return 'toggle_primary600_sm';
        }
        if (state === 'hover') {
          return 'toggle_primary700_sm';
        }
        if (state === 'focused') {
          return 'toggle_primary600_sm_focused';
        }
        if (state === 'disabled') {
          return 'toggle_gray100_sm_disabled';
        }
      }
      break;
    }
    case 'md': {
      if (pressed === 'false') {
        if (state === 'default') {
          return 'toggle_gray400_md';
        }
        if (state === 'hover') {
          return 'toggle_gray300_md';
        }
        if (state === 'focused') {
          return 'toggle_gray50_md';
        }
        if (state === 'disabled') {
          return 'toggle_gray200_md_unpressed';
        }
      } else {
        if (state === 'default') {
          return 'toggle_primary600_md';
        }
        if (state === 'hover') {
          return 'toggle_primary700_md';
        }
        if (state === 'focused') {
          return 'toggle_primary600_md_focused';
        }
        if (state === 'disabled') {
          return 'toggle_gray200_md_pressed';
        }
      }
      break;
    }

    default: {
      return {};
    }
  }
};
