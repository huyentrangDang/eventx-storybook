import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/common.css';
import '../../assets/css/page-header.css';
import { Badges } from '../../components/Badges/Badges';
import { Button } from '../../components/button/Button';
import { Dropdown } from '../../components/dropdown&company-dropdown/Dropdown';
import { Avatar } from '../../components/avatar/Avatar';

export const CardHeader = ({ avatar, badge, breakpoint, accentLine }) => {
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
      <div
        className={`card-header-avatar--${avatar}-badge--${badge}-accentLine--${accentLine}-breakpoint--${breakpoint}`}
      >
        <div
          className={`content-card-header-avatar--${avatar}-badge--${badge}-accentLine--${accentLine}-breakpoint--${breakpoint}`}
        >
          {avatar === 'false' && (
            <div className={`text-and-support-text-card-header`}>
              <div className={`text-and-badge-card-header`}>
                <span className={`text-card-header`}>Team members</span>
                {badge === 'true' && (
                  <Badges
                    size={'sm'}
                    icon={'false'}
                    color={'gray'}
                    outline={'false'}
                    text={'10/20 seats'}
                  />
                )}
              </div>
              <span className={`support-text-card-header`}>
                Manage your team members and their account permissions here.
              </span>
            </div>
          )}
          {avatar === 'true' && (
            <div className='avatar-and-text-card-header'>
              <Avatar
                size={breakpoint === 'desktop' ? 'xl' : 'lg'}
                placeholder={'false'}
                text={'false'}
                statusIcon={'false'}
                state={'default'}
              />
              <div
                className={`text-and-support-text-card-header-avatar--${avatar}`}
              >
                <div className={`text-and-badge-card-header`}>
                  <span className={`text-card-header`}>Team members</span>
                  {badge === 'true' && (
                    <Badges
                      size={'sm'}
                      icon={'false'}
                      color={'gray'}
                      outline={'false'}
                      text={'10/20 seats'}
                    />
                  )}
                </div>
                <span className={`support-text-card-header`}>
                  Manage your team members and their account permissions here.
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

          {(accentLine === 'false' ||
            (accentLine === 'true' && breakpoint === 'mobile')) && (
            <div className={`card-header-dropdown-breakpoint--${breakpoint}`}>
              <Dropdown
                type={'icon'}
                open={'false'}
              />
            </div>
          )}
        </div>
        <div className={`divider-page-header-breakpoint--${breakpoint}`} />
      </div>
    </>
  );
};

CardHeader.propTypes = {
  avatar: PropTypes.oneOf(['true', 'false']),
  badge: PropTypes.oneOf(['true', 'false']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  accentLine: PropTypes.oneOf(['true', 'false']),
};
export const iconPath = () => {};
