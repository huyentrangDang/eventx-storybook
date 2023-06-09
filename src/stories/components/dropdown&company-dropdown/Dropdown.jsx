import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/dropdown-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/dropdown.css';
import '../../assets/css/button.css';

export const Dropdown = ({ type, open, icon }) => {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const onClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const listItemGroup = [
    {
      text: 'View profile',
      iconHeader: 'icon-user',
      iconShortcut: 'shortcut-user',
    },
    {
      text: 'Settings',
      iconHeader: 'icon-setting',
      iconShortcut: 'shortcut-setting',
    },
    {
      text: 'Keyboard shortcuts',
      iconHeader: 'icon-zap',
      iconShortcut: 'shortcut-zap',
    },
    {
      text: 'Company profile',
      iconHeader: 'icon-home-line',
      iconShortcut: 'shortcut-home-line',
    },
    {
      text: 'Team',
      iconHeader: 'icon-users',
      iconShortcut: 'shortcut-users',
    },
    {
      text: 'Invite colleagues',
      iconHeader: 'icon-user-plus',
      iconShortcut: 'shortcut-user-plus',
    },
    {
      text: 'Changelog',
      iconHeader: 'icon-layers-two',
      iconShortcut: 'shortcut-layers-two',
    },
    {
      text: 'Slack Community',
      iconHeader: 'icon-message-smile-circle',
      iconShortcut: 'shortcut-KS',
    },
    {
      text: 'Support',
      iconHeader: 'icon-help-cicrle',
      iconShortcut: 'shortcut-user-plus',
    },
    {
      text: 'API',
      iconHeader: 'icon-container',
      iconShortcut: 'shortcut-A',
    },
    {
      text: 'Log out',
      iconHeader: 'icon-logout',
      iconShortcut: 'shortcut-logout',
    },
  ];

  return (
    <>
      <div className={`dropdown`}>
        {type === 'button' && (
          <button
            type='button'
            className={`dropdown-button`}
            // onClick={onClick}
          >
            <div className={`text-button-sm-semibold`}>Account</div>
            {openDropdown ? (
              <icon className={icon ? icon : `icon-chevron-down`} />
            ) : (
              <icon className={icon ? icon : `icon-chevron-up`} />
            )}
          </button>
        )}

        {type === 'icon' && (
          <button
            type='button'
            className={`button-dropdown-icon`}
          >
            <icon
              className={icon ? icon : `icon-dots-vertical`}
              // onClick={onClick}
            />
          </button>
        )}

        {type === 'avatar' && (
          <button
            type='button'
            className={`button-dropdown-icon`}
          >
            <icon
              className={icon ? icon : `icon-avatar-dropdown`}
              // onClick={onClick}
            />
          </button>
        )}

        {open === 'true' && (
          <div
            className={`menu-dropdown`}
            id='menu-dropdown'
          >
            <div className={`dropdown-list-header`}>
              <div className={`avatar-label-group`}>
                <div className={[`avatar`, `avatar-header`].join(' ')}>
                  <div className={`online-indicator`}></div>
                </div>
                <div className={`text-and-support-text`}>
                  <div className={`text`}>Olivia Rhye</div>
                  <div className={`support-text`}>olivia@untitledui.com</div>
                </div>
              </div>
            </div>
            <div className={`menu-items`}>
              <div className={`list-item-group`}>
                {listItemGroup
                  .slice(0, 3)
                  .map(({ text, iconHeader, iconShortcut }, index) => {
                    return (
                      <button
                        type='button'
                        className={`dropdown-list-item`}
                      >
                        <div className={`dropdown-list-item-content`}>
                          <div className={`dropdown-list-item-icon-and-text`}>
                            <div
                              className={`dropdown-list-item-${iconHeader}`}
                            />
                            <div className={`dropdown-list-item-text`}>
                              {text}
                            </div>
                          </div>
                          <div
                            className={`dropdown-list-item-${iconShortcut}`}
                          />
                        </div>
                      </button>
                    );
                  })}
              </div>
              <div className={`list-item-group`}>
                {listItemGroup
                  .slice(3, 6)
                  .map(({ text, iconHeader, iconShortcut }, index) => {
                    return (
                      <button
                        type='button'
                        className={`dropdown-list-item`}
                      >
                        <div className={`dropdown-list-item-content`}>
                          <div className={`dropdown-list-item-icon-and-text`}>
                            <div
                              className={`dropdown-list-item-${iconHeader}`}
                            />
                            <div className={`dropdown-list-item-text`}>
                              {text}
                            </div>
                          </div>
                          <div
                            className={`dropdown-list-item-${iconShortcut}`}
                          />
                        </div>
                      </button>
                    );
                  })}
              </div>
              <div className={`list-item-group`}>
                {listItemGroup
                  .slice(6, 10)
                  .map(({ text, iconHeader, iconShortcut }, index) => {
                    return (
                      <button
                        type='button'
                        className={`dropdown-list-item`}
                      >
                        <div className={`dropdown-list-item-content`}>
                          <div className={`dropdown-list-item-icon-and-text`}>
                            <div
                              className={`dropdown-list-item-${iconHeader}`}
                            />
                            <div className={`dropdown-list-item-text`}>
                              {text}
                            </div>
                          </div>
                          <div
                            className={`dropdown-list-item-${iconShortcut}`}
                          />
                        </div>
                      </button>
                    );
                  })}
              </div>

              <div className={`list-item-group`}>
                {listItemGroup
                  .slice(-1)
                  .map(({ text, iconHeader, iconShortcut }, index) => {
                    return (
                      <button
                        type='button'
                        className={`dropdown-list-item`}
                      >
                        <div className={`dropdown-list-item-content`}>
                          <div className={`dropdown-list-item-icon-and-text`}>
                            <div
                              className={`dropdown-list-item-${iconHeader}`}
                            />
                            <div className={`dropdown-list-item-text`}>
                              {text}
                            </div>
                          </div>
                          <div
                            className={`dropdown-list-item-${iconShortcut}`}
                          />
                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  open: PropTypes.oneOf(['false', 'true']),
  type: PropTypes.oneOf(['button', 'avatar', 'icon']),
};

Dropdown.defaultProps = {};
