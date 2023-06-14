import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';

export const XAxis = ({ text, data, breakpoint }) => {
  const dataXAxis = [
    {
      name: '7 days',
      children: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    {
      name: '30 days',
      children: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30],
    },
    {
      name: '12 months',
      children: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  ];
  return (
    <div className={`component-xAxis-breakpoint--${breakpoint}`}>
      {dataXAxis
        .filter((item) => item.name === data)
        .map(({ children }) =>
          children.map((value) => (
            <span
              className={`text-xs-regular`}
              style={{ color: 'var(--gray-600)' }}
            >
              {value}
            </span>
          ))
        )}
    </div>
  );
};

XAxis.propTypes = {
  data: PropTypes.oneOf(['7 days', '30 days', '12 months']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  text: PropTypes.string,
};
