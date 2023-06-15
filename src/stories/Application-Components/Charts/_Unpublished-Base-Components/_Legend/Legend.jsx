import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';

export const Legend = ({ orientation, background, text }) => {
  return (
    <div className={`legend-orientation--${orientation}`}>
      <div className={`legend-series`}>
        <div className={`dot-legend-series`}>
          <icon
            className={`dot-inner-legend-series`}
            style={{ background: 'var(--primary-600)' }}
          />
        </div>
        <span
          className={`text-sm-regular`}
          style={{ color: 'var(--gray-600)' }}
        >
          {text}
        </span>
      </div>
      <div className={`legend-series`}>
        <div className={`dot-legend-series`}>
          <icon
            className={`dot-inner-legend-series`}
            style={{ background: 'var(--primary-400)' }}
          />
        </div>
        <span
          className={`text-sm-regular`}
          style={{ color: 'var(--gray-600)' }}
        >
          {text}
        </span>
      </div>
      <div className={`legend-series`}>
        <div className={`dot-legend-series`}>
          <icon
            className={`dot-inner-legend-series`}
            style={{ background: 'var(--primary-800)' }}
          />
        </div>
        <span
          className={`text-sm-regular`}
          style={{ color: 'var(--gray-600)' }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

Legend.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  text: PropTypes.string,
};
