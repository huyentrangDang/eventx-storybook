import { RadarChart } from './RadarChart';
export default {
  title: 'Application Components/Charts/Radar Chart/Radar Chart',
  component: RadarChart,
  tags: ['autodocs'],
};

const RadarCharts = (args) => <RadarChart {...args} />;
export const radarChart = RadarCharts.bind({});
radarChart.args = {
  legend: 'false',
};
