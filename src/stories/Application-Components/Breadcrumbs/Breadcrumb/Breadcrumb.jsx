import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/common.css';
import '../../../assets/css/breadcrumb.css';
import '../../../assets/css/breadcrumb-icon.css';
import { BreadcrumbButtonBase } from '../_UnpublishedBaseComponents/BreadcrumbButtonBase';

export const Breadcrumbs = ({
  divider,
  type,
  breakpoint,
  textFirst,
  textDestination,
}) => {
  return (
    <>
      {type === 'text' && (
        <div className={`breadcrumbs-type--${type}-breakpoint--${breakpoint}`}>
          <BreadcrumbButtonBase
            current={'false'}
            type={'text'}
            icon={'true'}
            state={'default'}
          />
          <div className={`${iconPath(divider)}`} />
          <BreadcrumbButtonBase
            current={'false'}
            type={'text'}
            icon={'false'}
            state={'default'}
            text={textFirst}
          />
          <div className={`${iconPath(divider)}`} />
          <BreadcrumbButtonBase
            current={'false'}
            type={'text'}
            icon={'false'}
            state={'default'}
            text={'...'}
          />
          <div className={`${iconPath(divider)}`} />
          <BreadcrumbButtonBase
            current={'true'}
            type={'text'}
            icon={'false'}
            state={'default'}
            text={textDestination}
          />
        </div>
      )}

      {type !== 'text' && (
        <div className={`breadcrumbs-type--${type}`}>
          <div className={`tabs-type--${type}-breakpoint--${breakpoint}`}>
            <BreadcrumbButtonBase
              current={'false'}
              type={
                type === 'text-with-line'
                  ? 'text'
                  : type === 'button-gray-with-border'
                  ? 'button-gray'
                  : type
              }
              icon={'true'}
              state={'default'}
            />
            <div className={`${iconPath(divider)}`} />
            <BreadcrumbButtonBase
              current={'false'}
              type={
                type === 'text-with-line'
                  ? 'text'
                  : type === 'button-gray-with-border'
                  ? 'button-gray'
                  : type
              }
              icon={'false'}
              state={'default'}
              text={textFirst}
            />
            <div className={`${iconPath(divider)}`} />
            <BreadcrumbButtonBase
              current={'false'}
              type={
                type === 'text-with-line'
                  ? 'text'
                  : type === 'button-gray-with-border'
                  ? 'button-gray'
                  : type
              }
              icon={'false'}
              state={'default'}
              text={'...'}
            />
            <div className={`${iconPath(divider)}`} />
            <BreadcrumbButtonBase
              current={'true'}
              type={
                type === 'text-with-line'
                  ? 'text'
                  : type === 'button-gray-with-border'
                  ? 'button-gray'
                  : type
              }
              icon={'false'}
              state={'default'}
              text={textDestination}
            />
          </div>
        </div>
      )}
    </>
  );
};

Breadcrumbs.propTypes = {
  divider: PropTypes.oneOf(['chevron', 'slash']),
  type: PropTypes.oneOf([
    'button-gray',
    'button-primary',
    'text',
    'text-with-line',
    'button-gray-with-border',
  ]),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  textFirst: PropTypes.string,
  textDestination: PropTypes.string,
};
export const iconPath = (divider) => {
  if (divider === 'chevron') {
    return 'icon-chevron-right';
  }
  if (divider === 'slash') {
    return 'icon-slash-divider';
  }
};
