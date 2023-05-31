import PropTypes from "prop-types";
import "../../assets/css/progress-circle.css";

export const ProgressCircle = ({ size, shape, label }) => {
  return (
    <>
      <div
        className={`progress-circle-size--${size}-shape--${shape}-label--${label}`}
      >
        {size === "xxs" && (
          <>
            {label === "false" ? (
              <div>
                <span
                  className={[
                    `text-sm-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <icon className={`line-size--${size}-shape--${shape}`} />
                <icon className={`background-size--${size}-shape--${shape}`} />
              </div>
            ) : (
              <div>
                <span
                  className={[
                    `text-xs-medium-progress-circle`,
                    `label-size--${size}-shape--${shape}`,
                  ].join(" ")}
                >
                  Users
                </span>
                <span
                  className={[
                    `text-sm-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <icon className={`line-size--${size}-shape--${shape}`} />
                <icon className={`background-size--${size}-shape--${shape}`} />
              </div>
            )}
          </>
        )}

        {size === "xs" && (
          <>
            {label === "false" ? (
              <>
                <span
                  className={[
                    `display-xs-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            ) : (
              <>
                {" "}
                <span
                  className={[
                    `display-xs-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <span
                  className={[
                    `text-xs-medium-progress-circle`,
                    `label-size--${size}-shape--${shape}`,
                  ].join(" ")}
                >
                  Active Users
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            )}
          </>
        )}

        {size === "sm" && shape === "half-circle" && (
          <>
            <div
              className={`group3-progress-circle-size--${size}-shape--${shape}-label--${label}`}
            >
              {" "}
              {label === "true" ? (
                <>
                  <span
                    className={[
                      `display-sm-medium-progress-circle`,
                      `text-size--${size}-shape--${shape}--label--${label}`,
                    ].join(" ")}
                  >
                    40%
                  </span>
                  <span
                    className={[
                      `text-xs-medium-progress-circle`,
                      `label-size--${size}-shape--${shape}`,
                    ].join(" ")}
                  >
                    Active Users
                  </span>
                </>
              ) : (
                <span
                  className={[
                    `display-sm-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}--label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
              )}
            </div>
            <div>
              <icon className={`line-size--${size}-shape--${shape}`} />
              <icon className={`background-size--${size}-shape--${shape}`} />
            </div>
          </>
        )}

        {size === "sm" && shape === "circle" && (
          <>
            {label === "false" ? (
              <>
                <span
                  className={[
                    `display-sm-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            ) : (
              <>
                {" "}
                <span
                  className={[
                    `display-sm-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <span
                  className={[
                    `text-xs-medium-progress-circle`,
                    `label-size--${size}-shape--${shape}`,
                  ].join(" ")}
                >
                  Active Users
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            )}
          </>
        )}
        {size === "md" && (
          <>
            {label === "false" ? (
              <>
                <span
                  className={[
                    `display-md-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            ) : (
              <>
                {" "}
                <span
                  className={[
                    `display-md-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <span
                  className={[
                    `text-sm-medium-progress-circle`,
                    `label-size--${size}-shape--${shape}`,
                  ].join(" ")}
                >
                  Active Users
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            )}
          </>
        )}
        {size === "lg" && (
          <>
            {label === "false" ? (
              <>
                <span
                  className={[
                    `display-lg-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            ) : (
              <>
                {" "}
                <span
                  className={[
                    `display-lg-medium-progress-circle`,
                    `text-size--${size}-shape--${shape}-label--${label}`,
                  ].join(" ")}
                >
                  40%
                </span>
                <span
                  className={[
                    `text-sm-medium-progress-circle`,
                    `label-size--${size}-shape--${shape}`,
                  ].join(" ")}
                >
                  Active Users
                </span>
                <div>
                  <icon className={`line-size--${size}-shape--${shape}`} />
                  <icon
                    className={`background-size--${size}-shape--${shape}`}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

ProgressCircle.propTypes = {
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg"]),
  shape: PropTypes.oneOf(["circle", "half-circle"]),
  label: PropTypes.oneOf(["true", "false"]),
};
