import PropTypes from 'prop-types';
import '../../assets/css/empty-state.css';
import '../../assets/css/text.css';
import '../../assets/css/color.css';
import { Button } from '../../components/button/Button';

export const EmptyState = ({ icon, color, size, iconSwap, text, subText }) => {
  const arrButton = [
    {
      size: 'lg',
      hierarchy: 'secondaryGray',
      icon: 'default',
      destructive: 'false',
      state: 'default',
      text: 'Clear search',
    },
    {
      size: 'lg',
      hierarchy: 'primary',
      icon: 'default',
      destructive: 'false',
      state: 'default',
      iconLeading: 'icon_plus_base_white',
      text: 'New project',
      showIconLeading: 'true',
    },
  ];

  return (
    <div className='container-empty-state '>
      <div
        className={[`content-empty-state`, `empty-state-size--${size}`].join(
          ' '
        )}
      >
        {icon === 'featured-icon' && (
          <>
            <div
              className={[
                `content-empty-state`,
                `content-empty-state-size--${size}`,
              ].join(' ')}
            >
              <icon
                className={[
                  `${iconEmptyStatePath(icon, color, size)}`,
                  iconSwap,
                ].join(' ')}
              />
              <div
                className={
                  size === 'sm'
                    ? `text-supportingText-empty-state-size--${size}`
                    : `text-supportingText-empty-state`
                }
              >
                <span
                  className={[
                    `text-${size}-semibold`,
                    `text-empty-state`,
                    `color-gray-900`,
                  ].join(' ')}
                >
                  {text}
                </span>
                <span
                  className={[
                    `${size === `lg` ? `text-md-regular` : `text-sm-regular`}`,
                    `text-empty-state`,
                    `color-gray-600`,
                  ].join(' ')}
                >
                  {subText}
                </span>
              </div>
            </div>
          </>
        )}
        <div className='actions-empty-state'>
          {arrButton.map((item) => (
            <Button
              size={item.size}
              hierarchy={item.hierarchy}
              icon={item.icon}
              destructive={item.destructive}
              state={item.state}
              iconLeading={item.iconLeading}
              text={item.text}
              showIconLeading={item.showIconLeading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

EmptyState.propTypes = {
  icon: PropTypes.oneOf(['featured-icon']),
  color: PropTypes.oneOf(['primary', 'gray']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string,
  subText: PropTypes.string,
};

export const iconEmptyStatePath = (icon, color, size) => {
  switch (color) {
    case 'primary': {
      if (icon === 'featured-icon') {
        if (size === 'sm') {
          return 'icon_search_primary50_md';
        } else {
          return 'icon_search_primary50_lg';
        }
      }

      break;
    }
    case 'gray': {
      if (icon === 'featured-icon') {
        if (size === 'sm') {
          return 'icon_search_gray50_md';
        } else {
          return 'icon_search_gray50_lg';
        }
      }
      break;
    }

    default: {
      return {};
    }
  }
};
