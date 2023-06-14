import { ChartData } from './ChartData';

export default {
  title:
    'Application Components/Charts/_Unpublished Base Components/Chart Data',
  component: ChartData,
  tags: ['autodocs'],
};

const ChartDatas = (args) => <ChartData {...args} />;
export const chartData = ChartDatas.bind({});
chartData.args = {
  legend: 'false',
  axisLabels: 'false',
  chartStyle: 'line',
  breakpoint: 'desktop',
};
chartData.argTypes = {
  xAxisValues: {
    table: {
      disable: true
    }
  },
  yAxisValues: {
    table: {
      disable: true
    }
  }
}
