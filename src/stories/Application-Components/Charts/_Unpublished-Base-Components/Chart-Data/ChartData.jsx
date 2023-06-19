import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../../../../assets/css/text.css';
import '../../../../assets/css/color.css';
import '../../../../assets/css/icon.css';
import '../../../../assets/css/chart.css';
import { Area } from '@ant-design/plots';

export const ChartData = ({
  legend,
  axisLabels,
  chartStyle,
  breakpoint,
  xAxis,
  yAxis,
  arrChartData,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json'
    )
      .then((response) => response.json())
      .then((json) => setData(arrChartData?.length > 0 ? arrChartData : json))
      .catch((error) => {});
  };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    tooltip: false,
    xAxis: {
      label: {
        style: {
          fill: '#475467',
          fontSize: 12,
          fontWeight: 400,
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          textAlign: 'center',
        },
      },
      title: {
        text: axisLabels === 'true' ? 'Month' : '',
        style: {
          fontWeight: 500,
          fontSize: 12,
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          fill: '#475467',
        },
      },
      visible: xAxis === 'true' ? true : false,
    },
    yAxis: {
      label: {
        style: {
          fill: '#344054',
          fontWeight: 400,
          fontSize: 12,
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          textAlign: 'right',
        },
      },
      title: {
        text: axisLabels === 'true' ? 'Active users' : '',
        style: {
          fontWeight: 500,
          fontSize: 12,
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
          fill: '#475467',
        },
      },
      visible: yAxis === 'true' ? true : false,
      grid: {
        line: {
          style: {
            stroke: '#F2F4F7',
            lineWidth: 1,
          },
        },
      },
    },
    color: ['#EA5284', '#EA5284', '#EA5284'],
    areaStyle: {
      fillOpacity: 0.1,
    },
    legend: {
      visible: legend === 'false' ? false : true,
      position: legend === 'top' ? 'top-right' : 'right',
      marker: {
        symbol: 'circle',
      },
    },
  };

  return (
    // <div className={`hight-charts`}>
    //   {breakpoint === 'mobile' && (
    //     <HighchartsReact
    //       highcharts={Highcharts}
    //       options={optionsMobile}
    //     />
    //   )}

    //   {breakpoint === 'desktop' && (
    //     <HighchartsReact
    //       highcharts={Highcharts}
    //       options={optionsDesktop}
    //     />
    //   )}
    // </div>
    <Area
      {...config}
      style={{ width: breakpoint === 'desktop' ? '100%' : 700 }}
    />
  );
};

ChartData.propTypes = {
  legend: PropTypes.oneOf(['false', 'right', 'top']),
  axisLabels: PropTypes.oneOf(['true', 'false']),
  chartStyle: PropTypes.oneOf(['line']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  xAxis: PropTypes.oneOf(['true', 'false']),
  yAxis: PropTypes.oneOf(['true', 'false']),
};
