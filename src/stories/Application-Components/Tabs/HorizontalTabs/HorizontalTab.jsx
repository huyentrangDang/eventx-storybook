import PropTypes from 'prop-types';
import '../../../assets/css/tab-button-base.css';
import '../../../assets/css/color.css';
import '../../../assets/css/typography.css';
import '../../../assets/css/tab.css';
import { TabButtonBase } from '../_UnpublishedBaseComponents/TabButtonBase';
import { InputDropdown } from '../../../components/input-dropdown/InputDropdown';

export const HorizontalTabs = ({ type, size, fullWidth, breakpoint }) => {
  const TAB_NO_FULL_WIDTH = [
    {
      current: 'true',
      badge: 'false',
      state: 'default',
      text: 'My details',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Profile',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Password',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Team',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Plan',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Billing',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Email',
    },
    {
      current: 'false',
      badge: 'true',
      state: 'default',
      text: 'Notifications',
      textBadge: '2',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Integrations',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'API',
    },
  ];
  const TAB_FULL_WIDTH = [
    {
      current: 'true',
      badge: 'false',
      state: 'default',
      text: 'My details',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Profile',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Password',
    },
    {
      current: 'false',
      badge: 'true',
      state: 'default',
      text: 'Team',
      textBadge: '2',
    },
    {
      current: 'false',
      badge: 'false',
      state: 'default',
      text: 'Plan',
    },
  ];
  return (
    <>
      {breakpoint === 'desktop' && (
        <div
          className={`horizontal-tab-type--${type}-size--${size}-fullWidth--${fullWidth}-breakpoint--${breakpoint}`}
        >
          {(type === 'underline' || type === 'underline-filled') && (
            <div
              className={`tabs-type--${type}-size--${size}-fullWidth--${fullWidth}-breakpoint--${breakpoint}`}
            >
              {fullWidth === 'true' &&
                TAB_FULL_WIDTH.splice(0, 4).map(
                  ({ current, badge, state, text, textBadge }) => (
                    <TabButtonBase
                      current={current}
                      size={size}
                      type={type}
                      fullWidth={fullWidth}
                      badge={badge}
                      state={state}
                      text={text}
                      textBadge={textBadge}
                    />
                  )
                )}
              {fullWidth === 'false' &&
                TAB_NO_FULL_WIDTH.map(
                  ({ current, badge, state, text, textBadge }) => (
                    <TabButtonBase
                      current={current}
                      size={size}
                      type={type}
                      fullWidth={fullWidth}
                      badge={badge}
                      state={state}
                      text={text}
                      textBadge={textBadge}
                    />
                  )
                )}
            </div>
          )}

          {(type === 'button-primary' ||
            type === 'button-gray' ||
            type === 'button-white-border') &&
            (fullWidth === 'true'
              ? TAB_FULL_WIDTH.map(
                  ({ current, badge, state, text, textBadge }) => (
                    <TabButtonBase
                      current={current}
                      size={size}
                      type={
                        type === 'button-white-border' ? 'button-white' : type
                      }
                      fullWidth={fullWidth}
                      badge={badge}
                      state={state}
                      text={text}
                      textBadge={textBadge}
                    />
                  )
                )
              : fullWidth === 'false' &&
                TAB_NO_FULL_WIDTH.map(
                  ({ current, badge, state, text, textBadge }) => (
                    <TabButtonBase
                      current={current}
                      size={size}
                      type={
                        type === 'button-white-border' ? 'button-white' : type
                      }
                      fullWidth={fullWidth}
                      badge={badge}
                      state={state}
                      text={text}
                      textBadge={textBadge}
                    />
                  )
                ))}
        </div>
      )}

      {breakpoint === 'mobile' && (
        <div
          className={`horizontal-tab-type--${type}-breakpoint--${breakpoint}`}
        >
          <InputDropdown
            type={'default'}
            state={'default'}
            text={'My details'}
          />
        </div>
      )}
    </>
  );
};

HorizontalTabs.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf([
    'button-gray',
    'button-primary',
    'underline',
    'underline-filled',
    'button-white-border',
  ]),
  fullWidth: PropTypes.oneOf(['true', 'false']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
