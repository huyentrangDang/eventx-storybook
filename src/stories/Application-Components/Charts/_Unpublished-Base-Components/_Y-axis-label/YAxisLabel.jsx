import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';

export const YAxisLabel = ({ text }) => {
  return (
    <div className={`yAxis-label`}>
      <span
        className={`text-xs-medium`}
        style={{ color: 'var(--gray-600)' }}
      >
        {text}
      </span>
    </div>
  );
};

YAxisLabel.propTypes = {
  text: PropTypes.string,
};
