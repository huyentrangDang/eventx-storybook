import PropTypes from "prop-types";
import "../../../assets/css/email-template.css";

export const EmailTemplate = ({ type }) => {
  return (
    <>
      <div className={`email-template-type--${type}`}>
        <div className={`email-template-header-type--${type}`}>
          <icon className={`logo-eventCHI`} />
          {(type === "mockup-01" || type === "video-welcome-02") && (
            <div className="links-and-socialLink-email-template">
              <span className="text-email-template-md">Login</span>
              <div className="social_icons-email-template">
                {" "}
                <icon className="twitter_gray900" />
                <icon className="facebook_gray900" />
                <icon className="instagram_gray900" />
              </div>
            </div>
          )}
          {type === "simple-welcome-01" && (
            <div className="links-email-template">
              <div className="text_link_gray900_email-template">Home</div>
              <div className="text_link_gray900_email-template">Blogs</div>
              <div className="text_link_gray900_email-template">Tutorial</div>
              <div className="text_link_gray900_email-template">Support</div>
            </div>
          )}
        </div>
        <div className={`body-email-template-type--${type}`}>
          {type === "mockup-02" && (
            <>
              <icon className="content-email-template" />
              <div className={`heading-and-body-email-template-type--${type}`}>
                <div className={`heading-email-template-type--${type}`}>
                  Welcome to Untitled!
                </div>
                <div className="text-email-template-lg-regular">
                  Hi Olivia, thanks for checking out Untitled. Get the most of
                  Untitled by installing our new mobile app.
                </div>
              </div>
              <div className="actions-email-template">
                <icon className="app_stote" />
                <icon className="google_play" />
              </div>
              <div className="text-email-template-lg-regular">
                If you have any questions, just reply to this email — we’ll be
                happy to hear from you!
              </div>
            </>
          )}
          {type === "mockup-01" && (
            <>
              <div>
                <icon className="macbook_pro" />
              </div>
              <div className="text-and-actions-email-template">
                <div
                  className={`heading-and-body-email-template-type--${type}`}
                >
                  <div className={`heading-email-template-type--${type}`}>
                    Meet Version 3.0: a clean, modern UI kit for beautiful
                    interfaces
                  </div>
                  <div className="text-email-template-md-regular">
                    We’re glad to have you onboard! You’re already on your way
                    to creating beautiful visual products.
                    <br />
                    <br /> Whether you’re here for your brand, for a cause, or
                    just for fun — welcome! If there’s anything you need, we’ll
                    be here every step of the way. <br />
                    <br />
                    Thanks, <br />
                    The team
                  </div>
                </div>
              </div>
              <div className="actions-email-template">
                <button
                  type="button"
                  className="button-primary600-email-template"
                >
                  <span className="placehoder-email-template"></span>
                  <span className="text-email-template-md-semibold">
                    Download 3.0
                  </span>
                  <icon className="arrow_right" />
                </button>
              </div>
            </>
          )}
          {type === "simple-welcome-02" && (
            <>
              <div className={`heading-and-body-email-template-type--${type}`}>
                <div className={`heading-email-template-type--${type}`}>
                  Welcome to Untitled
                </div>
                <div className="text-email-template-md-regular">
                  We’re excited to welcome you to Untitled and we’re even more
                  excited about what we’ve got planned. You’re already on your
                  way to creating beautiful visual products.
                  <br />
                  <br /> Whether you’re here for your brand, for a cause, or
                  just for fun — welcome! If there’s anything you need, we’ll be
                  here every step of the way.
                </div>
              </div>
              <div className="divider-email-template"></div>
              <div className="link-and-text-email-template">
                <div className="text-email-template-md-medium-underline">
                  Untitled changelog →
                </div>
                <div className="text-email-template-md-regular">
                  Weekly new updates and improvements to Untitled.
                </div>
              </div>
              <div className="divider-email-template"></div>
              <div className="link-and-text-email-template">
                <div className="text-email-template-md-medium-underline">
                  Follow us on Twitter →
                </div>
                <div className="text-email-template-md-regular">
                  Stay up-to-date with the latest announcements and jobs.
                </div>
              </div>
              <div className="divider-email-template"></div>
              <div className="link-and-text-email-template">
                <div className="text-email-template-md-medium-underline">
                  Why we’re building Untitled →
                </div>
                <div className="text-email-template-md-regular">
                  Untitled is a new standard of design system and UI kit.
                </div>
              </div>
              <div className="divider-email-template"></div>
              <div className="text-email-template-md-regular">
                Thanks for signing up. If you have any questions, send us a
                message at hi@untitledui.com or on Twitter. We’d love to hear
                from you.
                <br />
                <br /> — The team
              </div>
              <div className="actions-email-template">
                <button
                  type="button"
                  className="button-primary600-email-template"
                >
                  <span className="placehoder-email-template"></span>
                  <span className="text-email-template-md-semibold">
                    Get started
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
              </div>
            </>
          )}
          {type === "simple-invite" && (
            <>
              <div className="text-email-template-md-regular">
                Hi Olivia, <br />
                <br />
                Alicia has invited you to join the team on Untitled.
              </div>
              <div className="actions-email-template">
                <button
                  type="button"
                  className="button-primary600-email-template"
                >
                  <span className="placehoder-email-template"></span>
                  <span className="text-email-template-md-semibold">
                    Accept the invite
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
              </div>
              <div className="text-email-template-md-regular">
                Thanks, <br />
                The team
              </div>
            </>
          )}
          {type === "simple-verification" && (
            <>
              <div className="text-email-template-md-regular">
                Hi Olivia, <br />
                <br />
                This is your verification code:
              </div>
              <div className="verification_code_input_field_email_template">
                <div className="input_with_label_email_template">
                  <div className="label-email-template"></div>
                  <div className="input-email-template">
                    <div className="mega_input_email_template">
                      <span className="text_mega_input_email_template">3</span>
                    </div>

                    <div className="mega_input_email_template">
                      <span className="text_mega_input_email_template">0</span>
                    </div>
                    <div className="mega_input_email_template">
                      <span className="text_mega_input_email_template">6</span>
                    </div>
                    <div className="mega_input_email_template">
                      <span className="text_mega_input_email_template">6</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-email-template-md-regular">
                This code will only be valid for the next 5 minutes. If the code
                does not work, you can use this login verification link:
              </div>
              <div className="actions-email-template">
                <button
                  type="button"
                  className="button-primary600-email-template"
                >
                  <span className="placehoder-email-template"></span>
                  <span className="text-email-template-md-semibold">
                    Verify email
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
              </div>
              <div className="text-email-template-md-regular">
                Thanks, <br />
                The team
              </div>
            </>
          )}
          {type === "image-welcome" && (
            <>
              <icon className={`image-welcome`} />
              <div className={`heading-and-body-email-template-type--${type}`}>
                <div className={`heading-email-template-type--${type}`}>
                  Hi Olivia,
                </div>
                <div className="text-email-template-md-regular">
                  We’re glad to have you onboard! You’re already on your way to
                  creating beautiful visual products. <br />
                  <br /> Whether you’re here for your brand, for a cause, or
                  just for fun — welcome! If there’s anything you need, we’ll be
                  here every step of the way. <br />
                  <br />
                  Thanks,
                  <br />
                  The team
                </div>
              </div>
              <div className="actions-email-template">
                <button
                  type="button"
                  className="button-primary600-email-template"
                >
                  <span className="placehoder-email-template"></span>
                  <span className="text-email-template-md-semibold">
                    Log in
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
              </div>
            </>
          )}
          {type === "simple-welcome-01" && (
            <>
              <div className="text-email-template-md-regular">
                Hi Olivia, <br />
                <br />
                We’re glad to have you onboard! You’re already on your way to
                creating beautiful visual products. <br />
                <br /> Whether you’re here for your brand, for a cause, or just
                for fun — welcome! If there’s anything you need, we’ll be here
                every step of the way. <br />
                <br />
                Thanks,
                <br />
                The team
              </div>
              <div className="actions-email-template">
                <button
                  type="button"
                  className={`button-primary600-email-template`}
                >
                  <span className="placehoder-email-template"></span>
                  <span className="text-email-template-md-semibold">
                    Log in
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
              </div>
            </>
          )}
          {type === "video-welcome-01" && (
            <>
              {" "}
              <div className="text-email-template-md-regular">
                Hi Olivia,
                <br />
                <br /> Welcome to Untitled! You’re already on your way to
                creating beautiful visual products.
                <br />
                <br /> We’ve created a quick intro video to get you up and
                running as soon as possible. If you have any questions, please
                get in touch.
              </div>
              <icon className="video-player" />
              <div className="text-email-template-md-regular">
                Thanks,
                <br />
                The team
              </div>
            </>
          )}
          {type === "video-welcome-02" && (
            <>
              <div className={`heading-and-body-email-template-type--${type}`}>
                <div className={`heading-email-template-type--${type}`}>
                  How to get up and running as soon as possible
                </div>
                <div className="text-email-template-lg-regular">
                  We’ve created a quick intro video to get you up and running as
                  soon as possible. Don’t hestitate to get in touch.
                </div>
              </div>
              <icon className="video-player" />
              <div className="actions-email-template">
                <button
                  type="button"
                  className={`button-primary600-email-template`}
                >
                  <icon className="play_circle_baseWhite" />
                  <span className="text-email-template-md-semibold">
                    Watch video
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
              </div>
            </>
          )}
          {type === "video-welcome-03" && (
            <>
              <icon className="video-player" />
              <div className={`heading-and-body-email-template-type--${type}`}>
                <div className={`heading-email-template-type--${type}`}>
                  Welcome to Untitled!
                </div>
                <div className="text-email-template-lg-regular">
                  Hi Olivia, thanks for checking out Untitled. Here are a few
                  tips to help you get up and running as soon as possible. If
                  you have any questions, just reply to this email — we’ll be
                  happy to hear from you!
                </div>
              </div>
              <div className="actions-email-template">
                <button
                  type="button"
                  className={`button-baseWhite-email-template`}
                >
                  <icon className="play_circle_gray700" />
                  <span className="text-email-template-md-semibold-gray700">
                    Watch intro
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
                <button
                  type="button"
                  className={`button-primary600-email-template`}
                >
                  <span className="placehoder-email-template"></span>
                  <span className="text-email-template-md-semibold">
                    Log in
                  </span>
                  <span className="placehoder-email-template"></span>
                </button>
              </div>
            </>
          )}
        </div>
        <div className={`email-template-footer-type--${type}`}>
          {(type === "mockup-02" || type === "video-welcome-03") && (
            <>
              <div className="divider-email-template-lg"></div>
              <div className="text-email-template-sm-regular-center">
                You’re receiving this email because you subscribed to recieve
                marketing emails. If you’d prefer to not recieve these emails,
                please unsubscribe.
              </div>
              <div className="links-email-template">
                <a
                  className="text-email-template-sm-regular-underline"
                  href="#terms"
                >
                  Terms
                </a>
                <a
                  className="text-email-template-sm-regular-underline"
                  href="#privacy"
                >
                  Privacy
                </a>
                <a
                  className="text-email-template-sm-regular-underline"
                  href="#cookies"
                >
                  Cookies
                </a>
                <a
                  className="text-email-template-sm-regular-underline"
                  href="#contact_us"
                >
                  Contact us
                </a>
              </div>
              <div className="text-email-template-sm-regular-center">
                © 2077 Untitled UI <br />
                100 Smith Street, Melbourne VIC 3000
              </div>
            </>
          )}
          {(type === "mockup-01" ||
            type === "video-welcome-02" ||
            type === "simple-welcome-02" ||
            type === "simple-invite" ||
            type === "simple-verification" ||
            type === "image-welcome" ||
            type === "simple-welcome-01") && (
            <>
              {type === "mockup-01" && (
                <div
                  className={`text-and-actions-email-template-type--${type}`}
                >
                  <div
                    className={`text_supportingText_email_template-type--${type}`}
                  >
                    <div className="text-email-template-md">
                      Download the app
                    </div>
                    <div className="text-email-template-sm-regular">
                      Get the most of Untitled by installing our new mobile app.
                    </div>
                  </div>
                  <div className="actions-email-template">
                    <icon className="app_stote" />
                    <icon className="google_play" />
                  </div>
                </div>
              )}
              <div className="text-email-template-sm-regular">
                This email was sent to olivia@untitledui.com. If you'd rather
                not receive this kind of email, you can unsubscribe or manage
                your email preferences.
                <br />
                <br /> © 2077 Untitled UI, 100 Smith Street, Melbourne VIC 3000
              </div>
              <div className="logo_and_socialIcons_email_template">
                {" "}
                <icon className={`logo-eventCHI`} />
                <div className={`socialIcons-email-template`}>
                  <icon className="twitter_gray400" />
                  <icon className="facebook_gray400" />
                  <icon className="instagram_gray400" />
                </div>
              </div>
            </>
          )}
          {type === "video-welcome-01" && (
            <>
              {" "}
              <div className={`text-and-actions-email-template-type--${type}`}>
                <div
                  className={`text_supportingText_email_template-type--${type}`}
                >
                  <div className="text-email-template-md">Download the app</div>
                  <div className="text-email-template-sm-regular-center">
                    Get the most of Untitled by installing our new mobile app.
                  </div>
                </div>
                <div className="actions-email-template">
                  <icon className="app_stote" />
                  <icon className="google_play" />
                </div>
              </div>
              <div className={`socialIcon-email-template-type--${type}`}>
                {" "}
                <icon className="twitter_gray400" />
                <icon className="facebook_gray400" />
                <icon className="instagram_gray400" />
              </div>
              <div className="text-email-template-sm-regular-center">
                Untitled is committed to sustainable building. This email was
                sent with 200% carbon offset. If you’d prefer to not recieve
                these emails, please unsubscribe.
                <br />
                <br /> © 2077 Untitled UI
                <br />
                100 Smith Street, Melbourne VIC 3000
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

EmailTemplate.propTypes = {
  type: PropTypes.oneOf([
    "simple-welcome-01",
    "image-welcome",
    "simple-verification",
    "simple-invite",
    "simple-welcome-02",
    "video-welcome-01",
    "video-welcome-02",
    "video-welcome-03",
    "mockup-01",
    "mockup-02",
  ]),
};
