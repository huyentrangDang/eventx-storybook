import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/common.css';
import '../../../assets/css/typography.css';
import '../../../assets/css/color.css';
import '../../../assets/css/navigation/header-navigation.css';
import '../../../assets/css/navigation/navigation-icon.css';
import '../../../assets/css/page-header.css';
import { NavigationButton } from '../Navigation-Button/NavigationButton';
import { TagCount } from '../../../components/tag/TagCount';
import { CompanyDropdown } from '../../../components/dropdown&company-dropdown/CompanyDropdown';
import { NavigationBase } from '../Navigation-Base/NavigationBase';
import { Toggles } from '../../../components/toggles/Toggles';
import { LogoCompany } from '../../../Style-Guid/Logos/Logo.stories';

export const HeaderNavigation = ({
  open,
  style,
  color,
  theme,
  breakpoint,
  textBalance,
  textBag,
}) => {
  const ITEM_SUB_NAVIGATION = [
    {
      current: 'true',
      text: 'Dashboard',
    },
    {
      current: 'false',
      text: 'Access',
    },
    {
      current: 'false',
      text: 'Crew',
    },
    {
      current: 'false',
      text: 'Payments',
    },
    {
      current: 'false',
      text: 'Tickets',
    },
    {
      current: 'false',
      text: 'Coupons',
    },
    {
      current: 'false',
      text: 'Finance',
    },
  ];
  return (
    <>
      <div
        className={[
          `navigation-header-open--${open}-theme--${theme}-breakpoint--${breakpoint}`,
        ].join(' ')}
      >
        <div style={{ width: '100%' }}>
          <div className={`wrapper-navigation-header`}>
            <div className={[`container-navigation-header`].join(' ')}>
              <div className={[`content-navigation-header`].join(' ')}>
                {theme === 'light' ? (
                  <LogoCompany darkMode={'false'} />
                ) : (
                  <LogoCompany darkMode={'true'} />
                )}
              </div>
              <div className={[`content-navigation-header`].join(' ')}>
                <div className={`balance-navigation-header-theme--${theme}`}>
                  <span className={[`text-sm-semibold`].join(' ')}>
                    {textBalance}
                  </span>
                </div>
                <div className={`action-navigation-header`}>
                  <div className={`button-navigation-header-theme--${theme}`}>
                    <NavigationButton
                      current={'false'}
                      size={'md'}
                      color={theme === 'light' ? 'primary' : 'gray'}
                      theme={theme}
                      state={'default'}
                    />
                  </div>

                  <div className={`tag-count-navigation-header`}>
                    <TagCount
                      size={'sm'}
                      text={textBag}
                      color={'var(--base-white)'}
                      background={'var(--error-600)'}
                    />
                  </div>
                </div>
                <CompanyDropdown
                  open={'false'}
                  textCompany={'Crania'}
                  subTextCompany={'Organizer'}
                  colorTextCompany={
                    theme === 'dark' ? 'var(--base-white)' : 'var(--gray-700)'
                  }
                  colorSubTextCompany={
                    theme === 'dark' ? 'var(--gray-500)' : 'var(--gray-600)'
                  }
                />
                <div className={`logout-navigation-header-theme--${theme}`}>
                  <NavigationButton
                    current={'false'}
                    size={'md'}
                    color={theme === 'light' ? 'primary' : 'gray'}
                    theme={theme}
                    state={'default'}
                    iconSwap={
                      theme === 'light' ? 'power-gray-500' : 'power-gray-300'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {open === 'true' && (
          <>
            <div className={`divider-verticaline-theme--${theme}`} />
            <div style={{ width: '100%' }}>
              <div className={`wrapper-navigation-header`}>
                <div
                  className={[`container-navigation-header-open--${open}`].join(
                    ' '
                  )}
                >
                  <div className={`event-sub-navigation`}>
                    <CompanyDropdown
                      open={'false'}
                      avatarCompany={'logo-dreamscape'}
                      textCompany={'Dreamscape'}
                      iconClose={
                        theme === 'light'
                          ? 'chevron-down-gray-500'
                          : 'chevron-down-gray-300'
                      }
                      colorTextCompany={
                        theme === 'light'
                          ? 'var(--gray-900)'
                          : 'var(--base-white)'
                      }
                      borderRadiusAvatar={8}
                    />
                    <div className={`divider-horizontation-theme--${theme}`} />
                    <div className={`sub-navigation-header-navigation`}>
                      {ITEM_SUB_NAVIGATION.map(({ current, text }) => (
                        <NavigationBase
                          current={current}
                          color={'gray'}
                          theme={theme}
                          state={'default'}
                          dot={'false'}
                          icon={'false'}
                          badge={'false'}
                          dropdown={'false'}
                          text={text}
                        />
                      ))}
                    </div>
                  </div>
                  <Toggles
                    pressed={'false'}
                    size={'sm'}
                    showText={'true'}
                    state={'default'}
                    text={'Admin mode'}
                    colorText={theme === 'dark' && 'var(--base-white)'}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

HeaderNavigation.propTypes = {
  open: PropTypes.oneOf(['true', 'false']),
  style: PropTypes.oneOf(['dualTier']),
  color: PropTypes.oneOf(['gray']),
  theme: PropTypes.oneOf(['light', 'dark']),
  breakpoint: PropTypes.oneOf(['desktop']),
  textBalance: PropTypes.string,
  textBag: PropTypes.number,
};
