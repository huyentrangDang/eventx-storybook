import PropTypes from 'prop-types';
import '../../../assets/css/metric.css';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';

export const Change = ({ icon, text, trend }) => {
  return (
    <div className={`change-in-metric`}>
      <icon
        className={[
          icon
            ? icon
            : trend === 'positive'
            ? `icon-arrow-up`
            : 'icon-arrow-down',
          `icon-change-in-metric-trend--${trend}`,
        ].join(' ')}
      />
      <span
        className={[
          `text-sm-medium`,
          `text-change-in-metric-trend--${trend}`,
        ].join(' ')}
      >
        {text ? text : '100%'}
      </span>
    </div>
  );
};

Change.propTypes = {
  trend: PropTypes.oneOf(['positive', 'negative']),
};
