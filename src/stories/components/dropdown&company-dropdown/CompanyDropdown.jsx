import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/dropdown-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/dropdown.css';
import '../../assets/css/button.css';
import '../../assets/css/scrollbar.css';

export const CompanyDropdown = ({
  open,
  avatarCompany,
  textCompany,
  subTextCompany,
  colorTextCompany,
  colorSubTextCompany,
  iconOpen,
  iconClose,
  borderRadiusAvatar,
}) => {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const onClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const listItemGroup = [
    {
      text: 'EventCHI',
      supportText: 'Organizer',
      iconAvatar: 'evenchi',
    },
    {
      text: 'Crania',
      supportText: 'Organizer',
      iconAvatar: 'crania',
    },
    {
      text: 'Zestif',
      supportText: 'Artist',
      iconAvatar: 'zestif',
    },
  ];

  return (
    <>
      <div className={`dropdown`}>
        <button
          type='button'
          className={`company-dropdowns`}
          // onClick={onClick}
        >
          <div className={`avatar-label-group`}>
            <div
              className={[`avatar-company-dropdowns`, avatarCompany].join(' ')}
              style={{ borderRadius: borderRadiusAvatar }}
            ></div>
            <div className={`text-and-support-text`}>
              <div
                className={`text`}
                style={{ color: colorTextCompany }}
              >
                {textCompany}
              </div>
              <div
                className={`support-text`}
                style={{ color: colorSubTextCompany }}
              >
                {subTextCompany}
              </div>
            </div>
          </div>

          {open === 'false' ? (
            <icon className={[`${iconPathClose(iconClose)}`].join(' ')} />
          ) : (
            <icon className={[`${iconPathOpen(iconOpen)}`].join(' ')} />
          )}
        </button>

        {open === 'true' && (
          <div
            className={`menu-dropdown-company`}
            id='menu-dropdown-company'
          >
            <div className={`input-field`}>
              <div className={`input`}>
                <div className={`input-content`}>
                  <icon className={`icon-search-refraction`} />
                  <input
                    type='text'
                    placeholder='Search users...'
                    className={`text-input`}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={`menu-items-input`}>
                {listItemGroup.map(
                  ({ text, supportText, iconAvatar }, index) => {
                    return (
                      <button
                        type='button'
                        className={`dropdown-list-item`}
                        index={index}
                      >
                        <div className={`input-dropdown-menu-item-content`}>
                          <div className={`avatar-label-group`}>
                            <div
                              className={[`avatar`, `icon-${iconAvatar}`].join(
                                ' '
                              )}
                            />
                            <div className={`text-and-support-text`}>
                              <div className={`text`}>{text}</div>
                              <div className={`support-text`}>
                                {supportText}
                              </div>
                            </div>
                          </div>
                          <button
                            type='button'
                            className={`button-input`}
                          >
                            <div className={`text-button-lg-semibold`}>
                              Setting
                            </div>
                          </button>
                        </div>
                      </button>
                    );
                  }
                )}
                {/* <div className={`scrollbar-dropdown-company`}>
                  <div className={[`scrollbar-inner`].join(' ')}>
                    <div className={[`scrollbar-bar`].join(' ')} />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

CompanyDropdown.propTypes = {
  open: PropTypes.oneOf(['false', 'true']),
  avatarCompany: PropTypes.string,
  textCompany: PropTypes.string,
  subTextCompany: PropTypes.string,
  iconOpen: PropTypes.string,
  iconClose: PropTypes.string,
};

CompanyDropdown.defaultProps = {};
export const iconPath = (icon, state) => {
  if (icon === 'true') {
    if (state === 'disabled') {
      return 'circle_gray200';
    } else {
      return 'circle_gray700';
    }
  } else {
    return icon;
  }
};

export const iconPathOpen = (iconOpen) => {
  if (iconOpen) {
    return iconOpen;
  } else {
    return 'icon-chevron-up';
  }
};

export const iconPathClose = (iconClose) => {
  if (iconClose) {
    return iconClose;
  } else {
    return 'icon-chevron-down';
  }
};
