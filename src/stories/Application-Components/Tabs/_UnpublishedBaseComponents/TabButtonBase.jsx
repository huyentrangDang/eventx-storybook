import PropTypes from 'prop-types';
import '../../../assets/css/tab-button-base.css';
import '../../../assets/css/color.css';
import '../../../assets/css/typography.css';

export const TabButtonBase = ({
  current,
  size,
  type,
  fullWidth,
  badge,
  state,
  text,
  textBadge,
}) => {
  return (
    <>
      <div
        className={`tab-button-current--${current}-size--${size}-type--${type}-fullWidth--${fullWidth}-badge--${badge}-state--${state}`}
      >
        <span
          className={[
            `${pathColorText(current, type, badge, state, size)}`,
            `${pathSizeText(size)}`,
          ].join(' ')}
        >
          {text}
        </span>
        {badge === 'true' && (
          <div
            className={[`${pathBadge(current, type, badge, state, size)}`].join(
              ' '
            )}
          >
            <span className={[`${pathSizeTextBadge(size)}`].join(' ')}>
              {textBadge}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

TabButtonBase.propTypes = {
  current: PropTypes.oneOf(['true', 'false']),
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf([
    'button-gray',
    'button-primary',
    'button-white',
    'underline',
    'underline-filled',
  ]),
  fullWidth: PropTypes.oneOf(['true', 'false']),
  badge: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['default', 'hover', 'focus']),
  text: PropTypes.string,
  textBadge: PropTypes.string,
};

export const pathSizeText = (size) => {
  if (size === 'sm') {
    return 'text-sm-semibold';
  }
  if (size === 'md') {
    return 'text-md-semibold';
  }
};

export const pathColorText = (current, type, badge, state, size) => {
  switch (current) {
    case 'false': {
      if (state === 'default' || state === 'focus') {
        return 'color-gray-500';
      }
      if (state === 'hover') {
        if (type === 'button-gray' || type === 'button-white') {
          return 'color-gray-700';
        }
        if (
          type === 'button-primary' ||
          type === 'underline' ||
          type === 'underline-filled'
        ) {
          return 'color-primary-700';
        }
      }

      break;
    }
    case 'true': {
      if (
        type === 'button-primary' ||
        type === 'underline' ||
        type === 'underline-filled'
      ) {
        return 'color-primary-700';
      }
      if (type === 'button-gray' || type === 'button-white') {
        return 'color-gray-700';
      }

      break;
    }
    default: {
      return {};
    }
  }
};

export const pathBadge = (current, type, badge, state, size) => {
  switch (size) {
    case 'sm': {
      return 'badge-tab-button-size--sm';
    }
    case 'md': {
      if (current === 'false') {
        if (state === 'default' || state === 'focus') {
          return 'badge-tab-button-size--md-color-gray';
        }
        if (state === 'hover') {
          if (
            type === 'button-primary' ||
            type === 'underline' ||
            type === 'underline-filled'
          ) {
            return 'badge-tab-button-size--md-color-primary';
          }
          return 'badge-tab-button-size--md-color-gray';
        }
      }
      if (current === 'true') {
        if (
          type === 'button-primary' ||
          type === 'underline' ||
          type === 'underline-filled'
        ) {
          return 'badge-tab-button-size--md-color-primary';
        }
        return 'badge-tab-button-size--md-color-gray';
      }

      break;
    }
    default: {
      return {};
    }
  }
};

export const pathSizeTextBadge = (size) => {
  if (size === 'sm') {
    return 'text-xs-medium';
  }
  if (size === 'md') {
    return 'text-sm-medium';
  }
};
