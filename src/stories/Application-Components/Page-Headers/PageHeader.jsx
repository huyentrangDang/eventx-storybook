import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/common.css';
import '../../assets/css/breadcrumb.css';
import '../../assets/css/breadcrumb-icon.css';
import '../../assets/css/page-header.css';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumb/Breadcrumb';
import { Button } from '../../components/button/Button';
import { InputDropdown } from '../../components/input-dropdown/InputDropdown';
import { Avatar } from '../../components/avatar/Avatar';
import { AvatarProfilePhoto } from '../../components/avatar/AvatarProfilePhoto';

export const PageHeader = ({ style, breakpoint }) => {
  const hierarchys = [
    {
      hierarchy: 'tertiaryGray',
      text: 'Tertiary',
    },
    {
      hierarchy: 'secondaryColor',
      text: 'Secondary',
    },
    {
      hierarchy: 'secondaryGray',
      text: 'Secondary',
    },
    {
      hierarchy: 'primary',
      text: 'Primary',
    },
  ];
  return (
    <>
      {style !== 'banner-avatar' && (
        <div
          className={`page-header-style--${style}-breakpoint--${breakpoint}`}
        >
          {breakpoint === 'desktop' && (
            <Breadcrumbs
              divider={'chevron'}
              type={'button-gray'}
              breakpoint={breakpoint}
              textFirst={'Settings'}
              textDestination={'Team'}
            />
          )}
          {breakpoint === 'mobile' && (
            <Button
              size={'md'}
              hierarchy={'linkGray'}
              icon={'default'}
              destructive={'false'}
              state={'default'}
              showIconLeading={'true'}
              showiconTrailing={'false'}
              text={'Back'}
              iconLeading={'icon-arrow-left-gray-600'}
            />
          )}
          <div
            className={`content-page-header-style--${style}-breakpoint--${breakpoint}`}
          >
            {style === 'simple' && (
              <div className={`text-and-supportText-page-header`}>
                <span className={`text-page-header-breakpoint--${breakpoint}`}>
                  Team members
                </span>
                <span className={`supportText-page-header`}>
                  Manage your team members and their account permissions here.
                </span>
              </div>
            )}
            {style === 'avatar' && (
              <div className={`avatar-page-header-breakpoint--${breakpoint}`}>
                <Avatar
                  size={breakpoint === 'desktop' ? '2xl' : 'xl'}
                  placeholder={'false'}
                  text={'false'}
                  statusIcon={'false'}
                  state={'default'}
                />
                <div className={`text-and-supportText-page-header`}>
                  <span
                    className={`text-page-header-breakpoint--${breakpoint}`}
                  >
                    Olivia Rhye
                  </span>
                  <span className={`supportText-page-header`}>
                    olivia@untitledui.com
                  </span>
                </div>
              </div>
            )}

            <div className={`action-page-header`}>
              {breakpoint === 'desktop' &&
                hierarchys.map(({ hierarchy, text }) => (
                  <Button
                    size={'md'}
                    hierarchy={hierarchy}
                    icon={'default'}
                    destructive={'false'}
                    state={'default'}
                    showIconLeading={'false'}
                    showiconTrailing={'false'}
                    text={text}
                  />
                ))}
              {breakpoint === 'mobile' &&
                hierarchys.slice(2, 4).map(({ hierarchy, text }) => (
                  <Button
                    size={'md'}
                    hierarchy={hierarchy}
                    icon={'default'}
                    destructive={'false'}
                    state={'default'}
                    showIconLeading={'false'}
                    showiconTrailing={'false'}
                    text={text}
                  />
                ))}
            </div>

            <InputDropdown
              type={'search'}
              state={'placeholder'}
            />
          </div>
          <div className={`divider-page-header-breakpoint--${breakpoint}`} />
        </div>
      )}

      {style === 'banner-avatar' && breakpoint === 'desktop' && (
        <div
          className={`page-header-style--${style}-breakpoint--${breakpoint}`}
        >
          <div
            className={`container-image-wrapper-page-header-breakpoint--${breakpoint}`}
          >
            <div className={`image-wrapper-page-header`}></div>
          </div>
          <div className={`container-page-header-breakpoint--${breakpoint}`}>
            <div className={`avatar-and-content-page-header`}>
              <AvatarProfilePhoto
                placeholder={'false'}
                text={'false'}
                size={'lg'}
                verified={true}
              />
              <div
                className={`content-page-header-style--${style}-breakpoint--${breakpoint}`}
              >
                {breakpoint === 'desktop' && (
                  <Breadcrumbs
                    divider={'chevron'}
                    type={'button-gray'}
                    breakpoint={breakpoint}
                    textFirst={'Settings'}
                    textDestination={'Team'}
                  />
                )}
                <div className={`heading-page-header`}>
                  <div className={`text-and-supportText-page-header`}>
                    <span
                      className={`text-page-header-breakpoint--${breakpoint}`}
                    >
                      Olivia Rhye
                    </span>
                    <span className={`supportText-page-header`}>
                      olivia@untitledui.com
                    </span>
                  </div>
                  <div className={`action-page-header`}>
                    {breakpoint === 'desktop' &&
                      hierarchys.map(({ hierarchy, text }) => (
                        <Button
                          size={'md'}
                          hierarchy={hierarchy}
                          icon={'default'}
                          destructive={'false'}
                          state={'default'}
                          showIconLeading={'false'}
                          showiconTrailing={'false'}
                          text={text}
                        />
                      ))}
                    {breakpoint === 'mobile' &&
                      hierarchys.slice(2, 4).map(({ hierarchy, text }) => (
                        <Button
                          size={'md'}
                          hierarchy={hierarchy}
                          icon={'default'}
                          destructive={'false'}
                          state={'default'}
                          showIconLeading={'false'}
                          showiconTrailing={'false'}
                          text={text}
                        />
                      ))}
                  </div>
                  <InputDropdown
                    type={'search'}
                    state={'placeholder'}
                  />
                </div>
              </div>
            </div>
            <div className={`divider-page-header-style--${style}`} />
          </div>
        </div>
      )}

      {style === 'banner-avatar' && breakpoint === 'mobile' && (
        <div
          className={`page-header-style--${style}-breakpoint--${breakpoint}`}
        >
          <div className={`image-and-header-page-headers`}>
            <div
              className={`container-image-wrapper-page-header-breakpoint--${breakpoint}`}
            >
              <div className={`image-wrapper-page-header`}></div>
            </div>
            <div className={`container-page-header-breakpoint--${breakpoint}`}>
              <div
                className={`content-page-header-style--${style}-breakpoint--${breakpoint}`}
              >
                <AvatarProfilePhoto
                  placeholder={'false'}
                  text={'false'}
                  size={'md'}
                  verified={true}
                />
                <div className={`text-and-supportText-page-header`}>
                  <span
                    className={`text-page-header-breakpoint--${breakpoint}`}
                  >
                    Olivia Rhye
                  </span>
                  <span className={`supportText-page-header`}>
                    olivia@untitledui.com
                  </span>
                </div>
                <div className={`button-style--${style}`}>
                  <Button
                    size={'md'}
                    hierarchy={'linkGray'}
                    icon={'default'}
                    destructive={'false'}
                    state={'default'}
                    showIconLeading={'true'}
                    showiconTrailing={'false'}
                    text={'Back'}
                    iconLeading={'icon-arrow-left-gray-600'}
                  />
                </div>
              </div>
              <div className={`action-page-header`}>
                {hierarchys.slice(2, 4).map(({ hierarchy, text }) => (
                  <Button
                    size={'md'}
                    hierarchy={hierarchy}
                    icon={'default'}
                    destructive={'false'}
                    state={'default'}
                    showIconLeading={'false'}
                    showiconTrailing={'false'}
                    text={text}
                  />
                ))}
              </div>
              <InputDropdown
                type={'search'}
                state={'placeholder'}
              />
              <div className={`divider-page-header-style--${style}`} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PageHeader.propTypes = {
  style: PropTypes.oneOf([
    'simple',
    'avatar',
    'banner-avatar',
    // 'banner-avatar-centered',
    // 'banner-simple',
    // 'banner-simple-centered',
  ]),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
