import PropTypes from 'prop-types';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import '../../../assets/css/chart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

export const RadarChart = ({ legend, axisLabels, chartStyle, breakpoint }) => {
  const options = {
    chart: {
      polar: true,
      type: 'area',
    },
    title: {
      text: '',
      x: -80,
    },
    pane: {
      size: '80%',
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },
    yAxis: {
      categories: [2, 4, 6, 8, 10],
      labels: {
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: '2px 8px',
          background: '#F2F4F7',
          borderRadius: 16,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          fontWeight: 500,
          color: '#344054',
          textAlign: 'center',
        },
      },
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
    },
    credits: {
      enabled: false,
    },
    legend: {
      align: legend === 'right' ? 'right' : 'center',
      verticalAlign: legend === 'right' ? 'top' : 'middle',
      layout: 'vertical',
      y: legend === 'right' ? 0 : 175 ,
      enabled: legend === 'false' ? false : true,
    },
    series: [
      {
        data: [8, 6, 6, 2, 4, 10, 4],
        pointPlacement: 'on',
        color: '#E83C70',
      },
      {
        data: [4, 10, 2, 6, 2, 8, 10],
        pointPlacement: 'on',
        color: '#EE46BC',
      },
      {
        data: [6, 8, 4, 8, 6, 6, 8],
        pointPlacement: 'on',
        color: '#0BA5EC',
      },
    ],
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className={`hight-charts`}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

RadarChart.propTypes = {
  legend: PropTypes.oneOf(['false', 'right', 'bottom']),
};
