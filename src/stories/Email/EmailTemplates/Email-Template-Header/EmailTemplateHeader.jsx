import PropTypes from "prop-types";
import "../../../assets/css/email-template-header.css";

export const EmailTemplateHeader = ({ type, links }) => {
  return (
    <>
      {links === "false" ? (
        <div className={`email-template-header-type--${type}-links--${links}`}>
          <icon className={`logo-eventCHI`} />
        </div>
      ) : (
        <></>
      )}
      {links !== "false" && (
        <div className={`email-template-header-type--${type}-links--${links}`}>
          <icon className={`logo-eventCHI`} />
          {links === "true" && (
            <div
              className={`link-socialLinks-email-template-header-type--${type}-links--${links}`}
            >
              <a href="#home" className="link-email-template-header">
                Home
              </a>
              <a href="#blog" className="link-email-template-header">
                Blog
              </a>
              <a href="#tutorial" className="link-email-template-header">
                Toturials
              </a>
              <a href="#support" className="link-email-template-header">
                Support
              </a>
            </div>
          )}
          {links === "social" && (
            <div
              className={`link-socialLinks-email-template-header-type--${type}-links--${links}`}
            >
              {type === "left-aligned" && (
                <span className="link-email-template-header">Login</span>
              )}

              <icon className="twitter_gray900" />
              <icon className="facebook_gray900" />
              <icon className="instagram_gray900" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

EmailTemplateHeader.propTypes = {
  type: PropTypes.oneOf(["center-aligned", "left-aligned"]),
  links: PropTypes.oneOf(["true", "false", "social"]),
};
