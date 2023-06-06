import PropTypes from 'prop-types';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/misc-icon.css';
import '../../assets/css/misc-icons/category-icons.css';
import '../../assets/css/misc-icons/miscellaneous-icons.css';
import '../../assets/css/misc-icons/feature-icon.css';

export const MiscIcon = () => {
  return (
    <div>
      {getClassIcons('misc-icon-root').map((classIcon) => (
        <div>{RenderIcon(classIcon)}</div>
      ))}
    </div>
  );
};
export const CategoryIcons = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {getClassIcons('misc-category-icon-root').map((classIcon) => (
        <div
          style={{ width: '40px', height: '40px' }}
          className='m-20'
        >
          {RenderIcon(classIcon)}
        </div>
      ))}
    </div>
  );
};
export const MiscellaneousCheckIcons = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '500px' }}>
      {getClassIcons('misc-miscellaneous-icon-root').map((classIcon) => (
        <div
          style={{ width: '40px', height: '40px' }}
          className='m-20'
        >
          {RenderIcon(classIcon)}
        </div>
      ))}
    </div>
  );
};

export const MiscellaneousCheckItemText = ({
  type,
  size,
  color,
  breakpoint,
}) => {
  console.log(color);
  return (
    <div>
      <div>
        <div
          className={`type--${type}-size--${size}-color--${color}-breakpoint--${breakpoint}`}
        >
          <div>{RenderIcon(`type--${type}-size--${size}-color--${color}`)}</div>
          <div className={`check-item-text-${size}-regular`}>
            All features and premium support
          </div>
        </div>
      </div>
    </div>
  );
};

const getTextStyleOfCheckItem = (size) => {
  if (size === 'sm') {
    return 'text-md-regular';
  }
  if (size === 'md' || size === 'lg') {
    return 'text-lg-regular';
  }
  if (size === 'xl') {
    return 'text-xl-regular';
  }
  return '';
};

const RenderIcon = (className) => {
  return (
    <span
      style={{ display: 'inline-block' }}
      className={className}
    ></span>
  );
};
const getSizeOfIcon = (className) => {
  if (className.includes('xs')) {
    return 'misc-icon-size--xs';
  }
  if (className.includes('sm')) {
    return 'misc-icon-size--sm';
  }
  if (className.includes('md')) {
    return 'misc-icon-size--md';
  }
  if (className.includes('lg')) {
    return 'misc-icon-size--lg';
  }
  if (className.includes('xl')) {
    return 'misc-icon-size--xl';
  }
  return '';
};
const getClassIcons = (selectorRoot) => {
  let arrayIcons = [];
  var allCSS = [].slice
    .call(document.styleSheets)
    .reduce(function (prev, styleSheet) {
      if (!styleSheet.href && styleSheet.cssRules) {
        console.log(prev);
        return (
          prev +
          [].slice.call(styleSheet.cssRules).reduce(function (prev, cssRule) {
            console.log(cssRule.selectorText);
            if (cssRule.selectorText?.includes(selectorRoot)) {
              arrayIcons = [...cssRule.parentStyleSheet.cssRules]
                .filter((element) => element.selectorText.includes('::before'))
                .map((element) =>
                  element.selectorText.replace('.', '').replace('::before', '')
                );
            }
          }, '')
        );
      }
    }, '');

  return arrayIcons;
};

MiscellaneousCheckItemText.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['primary', 'gray', 'success']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  type: PropTypes.oneOf(['default', 'line', 'filled']),
};

export const MiscellaneousDotIcon = ({ size, icon }) => {
  return (
    <>
      <icon className={`${iconDot(size, icon)}`} />
    </>
  );
};

MiscellaneousDotIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export const iconDot = (size, icon) => {
  if (size === 'sm') {
    return 'dot-sm-success-500';
  }
  if (size === 'md') {
    return 'dot-md-success-500';
  }
  if (size === 'lg') {
    return 'dot-lg-success-500';
  }
  if (icon) {
    return icon;
  }
};

export const FeatureIcon = ({ size, color, theme, icon }) => {
  return (
    <>
      {theme === 'glass' ? (
        <>
          <div
            className={`feature-icon-size--${size}-color--${color}-theme--${theme}`}
          >
            {/* <div
              className={`icon-glass-size--${size}-color--${color}-theme--${theme}`}
            >
              <icon
                className={[
                  `${featureIcon(icon)}`,
                  `icon-feature-size--${size}`,
                  `${featureColorIcon(theme, color)}`,
                ].join(' ')}
              />
            </div>

            <div
              className={`icon-background-glass-size--${size}-color--${color}-theme--${theme}`}
            /> */}
          </div>
        </>
      ) : (
        <div
          className={`feature-icon-size--${size}-color--${color}-theme--${theme}`}
        >
          <icon
            className={[
              `${featureIcon(icon)}`,
              `icon-feature-size--${size}`,
              `${featureColorIcon(theme, color)}`,
            ].join(' ')}
          />
        </div>
      )}
    </>
  );
};

FeatureIcon.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  color: PropTypes.oneOf(['primary', 'gray', 'error', 'warning', 'success']),
  theme: PropTypes.oneOf([
    'light-circle',
    'light-circle-outline',
    'dark-circle',
    'light-square',
    'mid-square',
    'dark-square',
    'glass',
  ]),
};

export const featureIcon = (icon) => {
  if (icon) {
    return icon;
  } else {
    return 'icon-alert-circle';
  }
};

export const featureColorIcon = (theme, color) => {
  if (
    theme === 'dark-circle' ||
    theme === 'mid-square' ||
    theme === 'dark-square' ||
    theme === 'glass'
  ) {
    return 'icon-feature-color--base-white';
  } else {
    if (color === 'primary') {
      return 'icon-feature-color--primary';
    }
    if (color === 'gray') {
      return 'icon-feature-color--gray';
    }
    if (color === 'error') {
      return 'icon-feature-color--error';
    }
    if (color === 'warning') {
      return 'icon-feature-color--warning';
    }
    if (color === 'success') {
      return 'icon-feature-color--success';
    }
  }
};
