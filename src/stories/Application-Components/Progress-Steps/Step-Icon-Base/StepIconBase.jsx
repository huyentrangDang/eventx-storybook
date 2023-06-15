import React from "react";
import PropTypes from "prop-types";
import "../../../assets/css/step-icon-base.css";

export const StepIconBase = ({ status, size, theme, state }) => {
  return (
    <>
      {theme === "light" && (
        <div
          className={[
            `step-icon-base-status--${status}-theme--${theme}-state--${state}`,
            `container-step-icon-base-size--${size}`,
            `step-icon-base-size--${size}`,
          ].join(" ")}
        >
          <div
            className={[
              `content-step-icon-base-status--${status}-theme--${theme}-state--${state}`,
              `step-icon-base-size--${size}`,
            ].join(" ")}
          >
            {status === "complete" && <icon className={`tick-size--${size}`} />}
            {status === "current" && (
              <icon className={`dot-size--${size}-primary600`} />
            )}
            {status === "incomplete" && (
              <>
                {state === "hover" ? (
                  <icon className={`dot-size--${size}-gray300`} />
                ) : (
                  <icon className={`dot-size--${size}-gray200`} />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

StepIconBase.propTypes = {
  status: PropTypes.oneOf(["current", "complete", "incomplete"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  theme: PropTypes.oneOf(["light"]),
  state: PropTypes.oneOf(["default", "hover", "focused"]),
};
