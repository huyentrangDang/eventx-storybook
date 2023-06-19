import { XAxis } from './XAxis';

export default {
  title: 'Application Components/Charts/_Unpublished Base Components/_XAxis',
  component: XAxis,
  tags: ['autodocs'],
};

const xAxis = (args) => <XAxis {...args} />;
export const _XAxis = xAxis.bind({});
_XAxis.args = {
  data: '7 days',
  breakpoint: 'desktop',
};
_XAxis.argTypes = {};
