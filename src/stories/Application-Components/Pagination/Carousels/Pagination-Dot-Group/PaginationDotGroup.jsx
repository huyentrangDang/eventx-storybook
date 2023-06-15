import PropTypes from 'prop-types';
import '../../../../assets/css/pagination/carousel.css';
import '../../../../assets/css/text.css';
import { PaginationDotIndicators } from './../../_Unpublished-Base-Components/Pagination-Dot-Indicators/PaginationDotIndicator';

export const PaginationDotGroup = ({
  framed,
  style,
  size,
  color,
  numberElement,
}) => {
  return (
    <>
      {framed === 'false' && (
        <div
          className={[
            `pagination-dot-group-size--${size}-style--${style}-framed--${framed}`,
          ].join(' ')}
        >
          {Array.from(new Array(numberElement ? numberElement : 3)).map(
            (_, index) => (
              <PaginationDotIndicators
                current={index === 0 ? 'true' : 'false'}
                style={style}
                size={size}
                color={color}
              />
            )
          )}
        </div>
      )}

      {framed === 'true' && (
        <div
          className={[
            `pagination-dot-group-size--${size}-style--${style}-framed--${framed}`,
            `pagination-dot-group-color--${color}-framed--${framed}`,
          ].join(' ')}
        >
          {Array.from(new Array(numberElement ? numberElement : 3)).map(
            (_, index) => (
              <PaginationDotIndicators
                current={index === 0 ? 'true' : 'false'}
                style={style}
                size={size}
                color={color === 'primary-light' ? 'primary-dark' : color}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

PaginationDotGroup.propTypes = {
  size: PropTypes.oneOf(['md', 'lg']),
  style: PropTypes.oneOf(['line', 'dot']),
  color: PropTypes.oneOf([
    'gray-light',
    'gray-dark',
    'primary-light',
    'primary-dark',
  ]),
  framed: PropTypes.oneOf(['true', 'false']),
};
