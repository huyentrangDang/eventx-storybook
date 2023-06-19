import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import '../../../assets/css/chart.css';
import { Radar } from '@ant-design/plots';

export const RadarChart = ({ legend, arrRadarChart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const mockItem = [
    {
      item: 'Mon',
      user: 'Serial 1',
      score: 800,
    },
    {
      item: 'Mon',
      user: 'Serial 2',
      score: 600,
    },
    {
      item: 'Mon',
      user: 'Serial 3',
      score: 400,
    },
    {
      item: 'Tue',
      user: 'Serial 1',
      score: 600,
    },
    {
      item: 'Tue',
      user: 'Serial 2',
      score: 800,
    },
    {
      item: 'Tue',
      user: 'Serial 3',
      score: 1000,
    },
    {
      item: 'Wed',
      user: 'Serial 1',
      score: 600,
    },
    {
      item: 'Wed',
      user: 'Serial 2',
      score: 400,
    },
    {
      item: 'Wed',
      user: 'Serial 3',
      score: 200,
    },
    {
      item: 'Thu',
      user: 'Serial 1',
      score: 200,
    },
    {
      item: 'Thu',
      user: 'Serial 2',
      score: 800,
    },
    {
      item: 'Thu',
      user: 'Serial 3',
      score: 600,
    },
    {
      item: 'Fri',
      user: 'Serial 1',
      score: 400,
    },
    {
      item: 'Fri',
      user: 'Serial 2',
      score: 600,
    },
    {
      item: 'Fri',
      user: 'Serial 3',
      score: 200,
    },
    {
      item: 'Sat',
      user: 'Serial 1',
      score: 1000,
    },
    {
      item: 'Sat',
      user: 'Serial 2',
      score: 600,
    },
    {
      item: 'Sat',
      user: 'Serial 3',
      score: 800,
    },
    {
      item: 'Sun',
      user: 'Serial 1',
      score: 400,
    },
    {
      item: 'Sun',
      user: 'Serial 2',
      score: 800,
    },
    {
      item: 'Sun',
      user: 'Serial 3',
      score: 1000,
    },
  ];

  const asyncFetch = () => {
    setData(arrRadarChart?.length > 0 ? arrRadarChart : mockItem);
  };

  const config = {
    data,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    tooltip: false,
    meta: {
      score: {
        min: 0,
        max: 1000,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
      label: {
        style: {
          fill: '#475467',
          fontSize: 14,
          fontWeight: 500,
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '20px',
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
      },
      label: {
        style: {
          fill: '#344054',
          fontWeight: 500,
          fontSize: 12,
          fontFamily: 'Lato',
          fontStyle: 'normal',
          lineHeight: '18px',
        },
      },
    },
    color: ['#E83C70', '#0BA5EC', '#EE46BC'],
    areaStyle: {
      fillOpacity: 0.1,
    },
    legend: {
      visible: legend === 'false' ? false : true,
      position: legend === 'right' ? 'right' : 'bottom',
      marker: {
        symbol: 'circle',
      },
    },
    area: {},
  };

  return <Radar {...config} />;
};

RadarChart.propTypes = {
  legend: PropTypes.oneOf(['false', 'right', 'bottom']),
};
