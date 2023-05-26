import PropTypes from "prop-types";
import "../../assets/css/checkbox-base.css";

export const CheckboxBase = ({ checked, indeterminate, size, type, state }) => {
  return (
    <>
      {checked === "true" ? (
        <>
          {type === "radio" && indeterminate === "false" && (
            <>
              {state === "disabled" ? (
                <button
                  type="button"
                  className={[
                    `checkbox-base-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`,
                  ].join(" ")}
                >
                  <icon
                    className={`icon-checkbox-base-type--${type}-size--${size}-state--${state}`}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className={[
                    `checkbox-base-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`,
                  ].join(" ")}
                >
                  <icon
                    className={`icon-checkbox-base-type--${type}-size--${size} radio-checked`}
                  />
                </button>
              )}
            </>
          )}

          {type === "checkCircle" && indeterminate === "false" && (
            <button
              type="button"
              className={[
                `checkbox-base-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`,
              ].join(" ")}
            >
              <icon
                className={`icon-checkbox-base-type--${type}-size--${size}`}
              />
            </button>
          )}

          {type === "checkbox" && (
            <>
              {state === "disabled" ? (
                <button
                  type="button"
                  className={[
                    `checkbox-base-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`,
                  ].join(" ")}
                >
                  <icon
                    className={`icon-checkbox-base-type--${type}-size--${size}-indeterminate--${indeterminate}-state--${state}`}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className={[
                    `checkbox-base-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`,
                  ].join(" ")}
                >
                  <icon
                    className={`icon-checkbox-base-type--${type}-size--${size}-indeterminate--${indeterminate}`}
                  />
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {indeterminate === "false" && (
            <button
              type="button"
              className={[
                `checkbox-base-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`,
              ].join(" ")}
            ></button>
          )}
        </>
      )}
    </>
  );
};

CheckboxBase.propTypes = {
  checked: PropTypes.oneOf(["true", "false"]),
  indeterminate: PropTypes.oneOf(["true", "false"]),
  size: PropTypes.oneOf(["sm", "md"]),
  type: PropTypes.oneOf(["checkCircle", "radio", "checkbox"]),
  state: PropTypes.oneOf(["default", "hover", "focused", "disabled"]),
};
