import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/common.css';
import '../../assets/css/breadcrumb.css';
import '../../assets/css/breadcrumb-icon.css';
import '../../assets/css/page-header.css';
import { Button } from '../../components/button/Button';
import { ButtonGroupBase } from '../../components/button-group-base/ButtonGroupBase';
import '../../assets/css/button-group.css';

export const SectionFooter = ({ type, buttonGroup, breakpoint }) => {
  const BUTTONS = [
    {
      hierarchy: 'tertiaryGray',
      text: 'Tertiary',
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

  const BUTTON_GROUP_DESKTOP = [
    {
      current: 'true',
      icon: 'false',
      state: 'default',
      text: '12 months',
    },
    {
      current: 'false',
      icon: 'false',
      state: 'default',
      text: '30 days',
    },
    {
      current: 'false',
      icon: 'false',
      state: 'default',
      text: '7 days',
    },
    {
      current: 'false',
      icon: 'leading',
      state: 'default',
      text: 'Custom',
      iconLeading: 'icon-plus-gray500',
    },
  ];

  const BUTTON_GROUP_MOBILE = [
    {
      current: 'true',
      icon: 'false',
      state: 'default',
      text: '12m',
    },
    {
      current: 'false',
      icon: 'false',
      state: 'default',
      text: '30d',
    },
    {
      current: 'false',
      icon: 'false',
      state: 'default',
      text: '7d',
    },
    {
      current: 'false',
      icon: 'only',
      state: 'default',
      iconOnly: 'icon-plus-gray500',
    },
  ];

  return (
    <>
      <div
        className={`section-footer-type--${type}-buttonGroup--${buttonGroup}-breakpoint--${breakpoint}`}
      >
        <div className={`divider-page-header-breakpoint--desktop`} />

        <div
          className={`content-section-footer-type--${type}-buttonGroup--${buttonGroup}-breakpoint--${breakpoint}`}
        >
          {buttonGroup === 'true' && (
            <div className={`button-group`}>
              {breakpoint === 'desktop'
                ? BUTTON_GROUP_DESKTOP?.map(
                    ({ current, state, text, iconLeading, iconOnly, icon }) => (
                      <ButtonGroupBase
                        current={current}
                        icon={icon}
                        state={state}
                        text={text}
                        iconLeading={iconLeading}
                      />
                    )
                  )
                : BUTTON_GROUP_MOBILE?.map(
                    ({ current, state, text, iconOnly, icon }) => (
                      <ButtonGroupBase
                        current={current}
                        icon={icon}
                        state={state}
                        text={text}
                        iconOnly={iconOnly}
                      />
                    )
                  )}
            </div>
          )}

          <Button
            size={'md'}
            hierarchy={'linkGray'}
            icon={'default'}
            destructive={'false'}
            state={'default'}
            text={'Learn more'}
            showIconLeading={'false'}
            showiconTrailing={'false'}
          />

          <div className={`action-section-footer`}>
            {breakpoint === 'desktop' && (
              <span className={[`text-sm-medium`, `color-gray-700`].join(' ')}>
                Your account will be automatically charged
              </span>
            )}
            {BUTTONS.map(({ hierarchy, text }) => (
              <Button
                size={'md'}
                hierarchy={hierarchy}
                icon={'default'}
                destructive={'false'}
                state={'default'}
                text={text}
                showIconLeading={'false'}
                showiconTrailing={'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

SectionFooter.propTypes = {
  type: PropTypes.oneOf(['section', 'card']),
  buttonGroup: PropTypes.oneOf(['true', 'false']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
