import PropTypes from 'prop-types';
import '../../../assets/css/metric.css';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import { MetricItem } from '../Metric-Item/MetricItem';

export const MetricGroup = ({ actions, type, breakpoint }) => {
  const metricItems = [
    {
      textHeading: 'View 24 hours',
      textNumber: '2,000',
    },
    {
      textHeading: 'View 7 hours',
      textNumber: '4,000',
    },
    {
      textHeading: 'View 30 hours',
      textNumber: '8,000',
    },
  ];
  return (
    <div className={`metric-group-breakpoint--${breakpoint}`}>
      {metricItems.map(({ textHeading, textNumber }) => (
        <MetricItem
          actions={actions}
          type={type}
          breakpoint={breakpoint}
          textHeading={textHeading}
          textNumber={textNumber}
        />
      ))}
    </div>
  );
};

MetricGroup.propTypes = {
  actions: PropTypes.oneOf(['true', 'false']),
  type: PropTypes.oneOf(['simple', 'icon01', 'icon02']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
