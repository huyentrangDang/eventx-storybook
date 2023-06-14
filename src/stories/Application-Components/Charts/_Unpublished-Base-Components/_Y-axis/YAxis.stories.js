import { YAxis } from './YAxis';

export default {
  title: 'Application Components/Charts/_Unpublished Base Components/_YAxis',
  component: YAxis,
  tags: ['autodocs'],
};

const YAxiss = (args) => <YAxis {...args} />;
export const yAxis = YAxiss.bind({});
yAxis.args = {
  text: '1,000',
  label: 'false',
};
yAxis.argTypes = {};
