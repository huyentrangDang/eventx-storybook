import PropTypes from "prop-types";
import "../../assets/css/toggle-base.css";

export const ToggleBase = ({ pressed, size, state, theme }) => {
  return (
    <div className={`${iconToggleBasePath(pressed, size, state, theme)}`}></div>
  );
};

ToggleBase.propTypes = {
  pressed: PropTypes.oneOf(["true", "false"]),
  size: PropTypes.oneOf(["sm", "md"]),
  theme: PropTypes.oneOf(["light", "dark"]),
  state: PropTypes.oneOf(["default", "hover", "focused", "disabled"]),
};

export const iconToggleBasePath = (pressed, size, state, theme) => {
  switch (size) {
    case "sm": {
      if (theme === "dark") {
        if (pressed === "false") {
          if (state === "default") {
            return "toggle_base_gray400_dark_sm";
          }
          if (state === "hover") {
            return "toggle_base_gray300_dark_sm";
          }
          if (state === "focused") {
            return "toggle_base_gray100_focused_dark_sm";
          }
          if (state === "disabled") {
            return "toggle_base_gray200_disabled_dark_sm";
          }
        } else {
          if (state === "default") {
            return "toggle_base_primary600_default_dark_sm";
          }
          if (state === "hover") {
            return "toggle_base_primary700_dark_sm";
          }
          if (state === "focused") {
            return "toggle_base_primary600_focused_dark_sm";
          }
          if (state === "disabled") {
            return "toggle_base_gray100_disabled_dark_sm";
          }
        }
      } else {
        if (pressed === "false") {
          if (state === "default") {
            return "toggle_base_primary500_light_sm";
          }
          if (state === "hover") {
            return "toggle_base_primary100_light_sm";
          }
          if (state === "focused") {
            return "toggle_base_primary50_light_sm";
          }
          if (state === "disabled") {
            return "toggle_base_gray100_light_unpressed_sm";
          }
        } else {
          if (state === "default") {
            return "toggle_base_primary200_light_sm";
          }
          if (state === "hover") {
            return "toggle_base_primary300_light_hover_sm";
          }
          if (state === "focused") {
            return "toggle_base_primary200_light_focused_sm";
          }
          if (state === "disabled") {
            return "toggle_base_gray100_light_pressed_sm";
          }
        }
      }
      break;
    }
    case "md": {
      if (theme === "dark") {
        if (pressed === "false") {
          if (state === "default") {
            return "toggle_base_gray400_dark_md";
          }
          if (state === "hover") {
            return "toggle_base_gray300_dark_md";
          }
          if (state === "focused") {
            return "toggle_base_gray50_focused_dark_md";
          }
          if (state === "disabled") {
            return "toggle_base_gray200_disabled_dark_unpressed_md";
          }
        } else {
          if (state === "default") {
            return "toggle_base_primary600_default_dark_md";
          }
          if (state === "hover") {
            return "toggle_base_primary700_dark_md";
          }
          if (state === "focused") {
            return "toggle_base_primary600_focused_dark_md";
          }
          if (state === "disabled") {
            return "toggle_base_gray200_disabled_dark_pressed_md";
          }
        }
      } else {
        if (pressed === "false") {
          if (state === "default") {
            return "toggle_base_primary50_light_default_md";
          }
          if (state === "hover") {
            return "toggle_base_primary100_light_md";
          }
          if (state === "focused") {
            return "toggle_base_primary50_light_focused_md";
          }
          if (state === "disabled") {
            return "toggle_base_gray100_light_unpressed_md";
          }
        } else {
          if (state === "default") {
            return "toggle_base_primary200_light_default_md";
          }
          if (state === "hover") {
            return "toggle_base_primary300_light_md";
          }
          if (state === "focused") {
            return "toggle_base_primary200_light_focused_md";
          }
          if (state === "disabled") {
            return "toggle_base_gray100_light_pressed_md";
          }
        }
      }

      break;
    }

    default: {
      return {};
    }
  }
};
