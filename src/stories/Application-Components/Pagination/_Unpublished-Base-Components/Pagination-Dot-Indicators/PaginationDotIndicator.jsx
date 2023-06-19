import PropTypes from 'prop-types';
import '../../../../assets/css/pagination/pagination-dot-indicator.css';
import '../../../../assets/css/text.css';

export const PaginationDotIndicators = ({
  current,
  style,
  size,
  color,
  iconDot,
}) => {
  return (
    <div
      className={[
        `pagination-dot-indicator-style--${style}--size--${size}`,
        `pagination-dot-indicator-current--${current}--color--${color}`,
        iconDot,
      ].join(' ')}
    ></div>
  );
};

PaginationDotIndicators.propTypes = {
  current: PropTypes.oneOf(['true', 'false']),
  style: PropTypes.oneOf(['line', 'dot']),
  size: PropTypes.oneOf(['md', 'lg']),
  color: PropTypes.oneOf([
    'gray-light',
    'gray-dark',
    'primary-light',
    'primary-dark',
  ]),
};
