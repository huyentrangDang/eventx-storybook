import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';

export const XAxisLabel = ({ text }) => {
  return (
    <div className={`xAxis-label`}>
      <span
        className={`text-xs-medium`}
        style={{ color: 'var(--gray-600)' }}
      >
        {text}
      </span>
    </div>
  );
};

XAxisLabel.propTypes = {
  text: PropTypes.string,
};
