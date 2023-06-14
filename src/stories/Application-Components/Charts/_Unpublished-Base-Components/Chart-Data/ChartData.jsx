import PropTypes from 'prop-types';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const ChartData = ({ legend, axisLabels, chartStyle, breakpoint, xAxisValues, yAxisValues }) => {
  const optionsDesktop = {
    chart: {
      type: 'area',
    },
    title: {
      useHTML: true,
      text: '',
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    xAxis: {
      title: {
        useHTML: true,
        text: '<span>Month</span>',
        style: {
          color: '#475467',
          fontWeight: 500,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
        },
        enabled: axisLabels === 'true' ? true : false,
      },
      categories: xAxisValues ? xAxisValues : [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          color: '#475467',
          fontWeight: 400,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          textAlign: 'center',
        },
      },
    },
    yAxis: {
      title: {
        useHTML: true,
        text: '<span>Active users</span>',
        style: {
          color: '#475467',
          fontWeight: 500,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
        },
        enabled: axisLabels === 'true' ? true : false,
      },
      categories: yAxisValues ? yAxisValues : ['0', '200', '400', '600', '800', '1,000'],
      labels: {
        style: {
          color: '#344054',
          fontWeight: 400,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          textAlign: 'right',
        },
        enabled: axisLabels === 'true' ? true : false,
      },
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      series: {},
      //   area: {
      //     // stacking: 'percent',
      //     marker: {
      //       enabled: false,
      //     },
      //   },
      area: {
        marker: {
          enabled: false,
        },
        color: '#E83C70',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
    },
    series: [
      {
        data: [0, 0.2, 0, 0.2, 0.2, 0.5, 0.6, 0.5, 0.7, 1, 1.1, 1.2],
        color: '#C03466',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
      {
        data: [3, 3.1, 3.1, 3, 3.1, 3.2, 3.1, 3.2, 3.2, 3.3, 3.3, 3.5],
        color: '#E83C70',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
      {
        data: [2, 2.1, 2.2, 2.2, 2.2, 2.2, 2.2, 2.1, 2.2, 2.3, 2.4, 2.5],
        color: '#EE6E9B',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout:
        legend === 'top' ? 'horizontal' : legend === 'right' ? 'vertical' : '',
      enabled: legend === 'false' ? false : true,
    },
  };

  const optionsMobile = {
    chart: {
      type: 'area',
      width: 600,
    },
    title: {
      useHTML: true,
      text: '',
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    xAxis: {
      title: {
        useHTML: true,
        text: '<span>Month</span>',
        style: {
          color: '#475467',
          fontWeight: 500,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
        },
        enabled: axisLabels === 'true' ? true : false,
      },
      categories: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'],
      labels: {
        style: {
          color: '#475467',
          fontWeight: 400,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          textAlign: 'center',
        },
      },
    },
    yAxis: {
      title: {
        useHTML: true,
        text: '<span>Active users</span>',
        style: {
          color: '#475467',
          fontWeight: 500,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
        },
        enabled: axisLabels === 'true' ? true : false,
      },
      categories: ['0', '200', '400', '600', '800', '1,000'],
      labels: {
        style: {
          color: '#344054',
          fontWeight: 400,
          fontSize: '12px',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          textAlign: 'right',
        },
        enabled: axisLabels === 'true' ? true : false,
      },
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      series: {},
      //   area: {
      //     // stacking: 'percent',
      //     marker: {
      //       enabled: false,
      //     },
      //   },
      area: {
        marker: {
          enabled: false,
        },
        color: '#E83C70',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
    },
    series: [
      {
        data: [0, 0.1, 0.1, 0.2, 0.1, 0.3, 0.6],
        color: '#C03466',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
      {
        data: [3, 3.2, 3.3, 3.4, 3.2, 3.4, 3.5],
        color: '#E83C70',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
      {
        data: [2, 2.1, 2.1, 2.1, 2, 2.1, 2.4],
        color: '#EE6E9B',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(255, 240, 245, 1)'],
            [1, 'rgba(234, 82, 132, 0)'],
          ],
        },
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      layout:
        legend === 'top' ? 'horizontal' : legend === 'right' ? 'vertical' : '',
      enabled: legend === 'false' ? false : true,
    },
  };

  return (
    <div className={`hight-charts`}>
      {breakpoint === 'mobile' && (
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsMobile}
        />
      )}

      {breakpoint === 'desktop' && (
        <HighchartsReact
          highcharts={Highcharts}
          options={optionsDesktop}
        />
      )}
    </div>
  );
};

ChartData.propTypes = {
  legend: PropTypes.oneOf(['false', 'right', 'top']),
  axisLabels: PropTypes.oneOf(['true', 'false']),
  chartStyle: PropTypes.oneOf(['line']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  xAxisValues: PropTypes.array,
  yAxisValues: PropTypes.array
};
