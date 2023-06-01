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
import { Dropdown } from '../../components/dropdown&company-dropdown/Dropdown';
import { ButtonGroup } from '../../components/button-group/ButtonGroup';

export const SectionHeader = ({ tabs, type, breakpoint }) => {
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
        className={`section-header-tabs--${tabs}-type--${type}-breakpoint--${breakpoint}`}
      >
        <div
          className={`content-section-header-tabs--${tabs}-type--${type}-breakpoint--${breakpoint}`}
        >
          <div className={`text-and-support-text-card-header`}>
            <span className={`text-card-header`}>Team members</span>
            <span className={`support-text-card-header`}>
              Manage your team members and their account permissions here.
            </span>
          </div>

          {(type === 'search' || type === 'searchAndactions') && (
            <InputDropdown
              type={'search'}
              state={'placeholder'}
            />
          )}

          {type === 'button-group' ? (
            <ButtonGroup
              icon={'false'}
              text={'Text'}
              current={'false'}
              state={'default'}
            />
          ) : type === 'search' && breakpoint === 'mobile' ? (
            ''
          ) : (
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
          )}

          <div className={`dropdown-section-header-breakpoint--${breakpoint}`}>
            <Dropdown
              type={'icon'}
              open={'false'}
            />
          </div>
        </div>
        <div className={`divider-page-header-breakpoint--${breakpoint}`} />
      </div>
    </>
  );
};

SectionHeader.propTypes = {
  tabs: PropTypes.oneOf(['true', 'false']),
  type: PropTypes.oneOf([
    'buttons',
    'search',
    'button-group',
    'searchAndactions',
  ]),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
