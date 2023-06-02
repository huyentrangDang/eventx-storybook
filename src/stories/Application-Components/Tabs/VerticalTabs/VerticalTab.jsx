import PropTypes from 'prop-types';
import '../../../assets/css/tab-button-base.css';
import '../../../assets/css/color.css';
import '../../../assets/css/typography.css';
import '../../../assets/css/tab.css';
import { TabButtonBase } from '../_UnpublishedBaseComponents/TabButtonBase';
import { InputDropdown } from '../../../components/input-dropdown/InputDropdown';

export const VerticalTabs = ({ type, size, breakpoint }) => {
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
  return (
    <>
      <div
        className={`vertical-tab-type--${type}-size--${size}-breakpoint--${breakpoint}`}
      >
        {breakpoint === 'desktop' &&
          TAB_NO_FULL_WIDTH.map(
            ({ current, badge, state, text, textBadge }) => (
              <TabButtonBase
                current={current}
                size={size}
                type={type === 'button-gray-border' ? 'button-white' : type}
                fullWidth={'false'}
                badge={badge}
                state={state}
                text={text}
                textBadge={textBadge}
              />
            )
          )}

        {breakpoint === 'mobile' && (
          <InputDropdown
            type={'default'}
            state={'default'}
            text={'My details'}
          />
        )}
      </div>
    </>
  );
};

VerticalTabs.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf([
    'button-gray',
    'button-primary',
    'button-gray-border',
  ]),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
