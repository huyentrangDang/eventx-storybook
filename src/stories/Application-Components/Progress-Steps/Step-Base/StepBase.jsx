import React from "react";
import PropTypes from "prop-types";
import "../../../assets/css/color.css";
import "../../../assets/css/text.css";
import "../../../../App.css";
import "../../../assets/css/step-base.css";
import { StepIconBase } from "../Step-Icon-Base/StepIconBase";

export const StepBase = ({
  status,
  size,
  theme,
  type,
  state,
  text,
  supporttingText,
}) => {
  return (
    <>
      {theme === "light" && (
        <>
          {type === "iconOnly" && (
            <div
              className={`container-step-base-theme--${theme}-type--${type}-size--${size}`}
            >
              <StepIconBase
                status={status}
                size={size}
                theme={"light"}
                state={state}
              />
            </div>
          )}
          {type === "top" && (
            <div
              className={`container-step-base-theme--${theme}-type--${type}-size--${size}`}
            >
              <StepIconBase
                status={status}
                size={size}
                theme={"light"}
                state={state}
              />
              <div className={`content-step-base-size--${size}`}>
                <span
                  className={[
                    size === "sm" ? `text-sm-semibold` : `text-md-semibold`,
                    status === "current"
                      ? "color-primary-700"
                      : "color-gray-700",
                    `App`,
                  ].join(" ")}
                >
                  {text}
                </span>
                <span
                  className={[
                    size === "sm" ? `text-sm-regular` : `text-md-regular`,
                    status === "current"
                      ? "color-primary-600"
                      : "color-gray-600",
                    `App`,
                  ].join(" ")}
                >
                  {supporttingText}
                </span>
              </div>
            </div>
          )}
          {type === "textLine" && size === "lg" && status === "complete" && (
            <div
              className={`container-step-base-theme--${theme}-type--${type}-size--${size}`}
            >
              <div className={`content-step-base-size--${size}-type--${type}`}>
                <span
                  className={[`text-md-semibold`, "color-gray-700", `App`].join(
                    " "
                  )}
                >
                  {text}
                </span>
                <span
                  className={[`text-md-regular`, "color-gray-600", `App`].join(
                    " "
                  )}
                >
                  {supporttingText}
                </span>
              </div>
            </div>
          )}
          {type === "iconLeft" && (
            <div
              className={`container-step-base-theme--${theme}-type--${type}-size--${size}`}
            >
              <div className="connector-wrap-step-base">
                <StepIconBase
                  status={status}
                  size={size}
                  theme={"light"}
                  state={state}
                />
                <span
                  className={[
                    `connector-step-base-size--${size}`,
                    status === "complete"
                      ? `step-base-bg-primary600`
                      : `step-base-bg-gray200`,
                  ].join(" ")}
                ></span>
              </div>
              <div
                className={`text-supportingText-step-base-state--${state}-size--${size}`}
              >
                <span
                  className={[
                    size === "sm" ? `text-sm-semibold` : `text-md-semibold`,
                    status === "current"
                      ? "color-primary-700"
                      : "color-gray-700",
                    `App`,
                  ].join(" ")}
                >
                  {text}
                </span>
                <span
                  className={[
                    size === "sm" ? `text-sm-regular` : `text-md-regular`,
                    status === "current"
                      ? "color-primary-600"
                      : "color-gray-600",
                    `App`,
                  ].join(" ")}
                >
                  {supporttingText}
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

StepBase.propTypes = {
  status: PropTypes.oneOf(["current", "complete", "incomplete"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  theme: PropTypes.oneOf(["light"]),
  type: PropTypes.oneOf(["top", "iconOnly", "textLine", "iconLeft"]),
  state: PropTypes.oneOf(["default", "hover", "focused"]),
  text: PropTypes.string,
  supporttingText: PropTypes.string,
};
