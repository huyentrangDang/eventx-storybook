import PropTypes from "prop-types";
import "../../../assets/css/email-template-footer.css";

export const EmailTemplateFooter = ({ type, actions }) => {
  return (
    <>
      {type === "left-aligned" && (
        <div
          className={`email-template-footer-type--${type}-actions--${actions}`}
        >
          {actions === "true" && (
            <div className="text-and-actions-email-template-footer">
              <div
                className={`text-and-supportingText-email-template-footer-type--${type}`}
              >
                <span className="text-email-template-footer-md">
                  Download the app store
                </span>
                <span className={`text-email-template-footer-sm-type--${type}`}>
                  Get the most of Untitled by installing our new mobile app.
                </span>
              </div>
              <div className="actions-email-template-footer">
                <icon className="app_stote" />
                <icon className="google_play" />
              </div>
            </div>
          )}
          <span className={`text-email-template-footer-sm-type--${type}`}>
            This email was sent to{" "}
            <span className="text-color-email-template-footer">
              olivia@untitledui.com
            </span>
            . If you'd rather not receive this kind of email, you can
            <span className="text-color-email-template-footer">
              unsubscribe
            </span>{" "}
            or{" "}
            <span className="text-color-email-template-footer">
              manage your email preferences
            </span>{" "}
            <br />
            <br />© 2077 Untitled UI, 100 Smith Street, Melbourne VIC 3000
          </span>
          <div className={`logo-and-socialIcons-email-template-footer`}>
            <icon className={`logo-eventCHI`} />
            <div className={`socialIcons-email-template-footer-type--${type}`}>
              <icon className="twitter_gray400" />
              <icon className="facebook_gray400" />
              <icon className="instagram_gray400" />
            </div>
          </div>
        </div>
      )}
      {type === "center-aligned" && (
        <div
          className={`email-template-footer-type--${type}-actions--${actions}`}
        >
          {actions === "true" && (
            <div className="text-and-actions-email-template-footer">
              <div
                className={`text-and-supportingText-email-template-footer-type--${type}`}
              >
                <span className="text-email-template-footer-md">
                  Download the app store
                </span>
                <span className={`text-email-template-footer-sm-type--${type}`}>
                  Get the most of Untitled by installing our new mobile app.
                </span>
              </div>
              <div className="actions-email-template-footer">
                <icon className="app_stote" />
                <icon className="google_play" />
              </div>
            </div>
          )}
          <div className={`socialIcons-email-template-footer-type--${type}`}>
            <icon className="twitter_gray400" />
            <icon className="facebook_gray400" />
            <icon className="instagram_gray400" />
          </div>
          <div className={`text-email-template-footer-sm-type--${type}`}>
            Untitled is committed to sustainable building. This email was sent
            with 200% carbon offset. If you’d prefer to not recieve these
            emails, please{" "}
            <span className="text-color-email-template-footer">
              unsubscribe.
            </span>
            <br />
            <br />
            © 2077 Untitled UI
            <br />
            100 Smith Street, Melbourne VIC 3000
          </div>
        </div>
      )}
      {type === "center-aligned-divider" && (
        <div
          className={`email-template-footer-type--center-aligned-divider-actions--true`}
        >
          <div className="divider-email-template-footer"></div>
          {actions === "true" && (
            <>
              <div className="text-and-actions-email-template-footer">
                <div
                  className={`text-and-supportingText-email-template-footer-type--${type}`}
                >
                  <span className="text-email-template-footer-md">
                    Download the app store
                  </span>
                  <span
                    className={`text-email-template-footer-sm-type--${type}`}
                  >
                    Get the most of Untitled by installing our new mobile app.
                  </span>
                </div>
                <div className="actions-email-template-footer">
                  <icon className="app_stote" />
                  <icon className="google_play" />
                </div>
              </div>
              <div className="divider-email-template-footer"></div>
            </>
          )}
          <span className={`text-email-template-footer-sm-type--${type}`}>
            You’re receiving this email because you subscribed to recieve
            marketing emails. If you’d prefer to not recieve these emails,
            please{" "}
            <span className="text-color-email-template-footer">
              unsubscribe.
            </span>
          </span>
          <div
            className={`links-email-template-footer-type--${type}-actions--${actions}`}
          >
            <a className="text-links-email-template-footer" href="#term">
              Terms
            </a>
            <a className="text-links-email-template-footer" href="#privacy">
              Privacy
            </a>
            <a className="text-links-email-template-footer" href="#cookies">
              Cookies
            </a>
            <a className="text-links-email-template-footer" href="#contact_us">
              Contact us
            </a>
          </div>
          <div className={`text-email-template-footer-sm-type--${type}`}>
            © 2077 Untitled UI <br />
            100 Smith Street, Melbourne VIC 3000
          </div>
        </div>
      )}
    </>
  );
};

EmailTemplateFooter.propTypes = {
  type: PropTypes.oneOf([
    "center-aligned-divider",
    "center-aligned",
    "left-aligned",
  ]),
  actions: PropTypes.oneOf(["true", "false"]),
};
