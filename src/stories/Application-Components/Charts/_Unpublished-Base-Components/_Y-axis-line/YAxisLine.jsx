import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';

export const YAxisLine = ({ text, label }) => {
  return (
    <div className={`yAxis-line-label--${label}`}>
      {label === 'true' && (
        <span className={[`text-xs-regular`, `text-yAxis-line`].join(' ')}>
          {text ? text : '1,000'}
        </span>
      )}
      <div className={`divider`} />
    </div>
  );
};

YAxisLine.propTypes = {
  text: PropTypes.string,
  label: PropTypes.oneOf(['true', 'false']),
};
