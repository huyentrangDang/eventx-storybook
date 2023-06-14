import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';
import { YAxisLine } from './../_Y-axis-line/YAxisLine';

export const YAxis = ({ text, label }) => {
  return (
    <div className={`yAxis-label--${label}`}>
      {Array.from(new Array(6)).map(() => (
        <YAxisLine label={label} />
      ))}
    </div>
  );
};

YAxis.propTypes = {
  text: PropTypes.string,
  label: PropTypes.oneOf(['true', 'false']),
};
