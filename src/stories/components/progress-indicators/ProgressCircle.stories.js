import { ProgressCircle } from './ProgressCircle';
export default {
  title: 'Components/Progress Indicators/Progress Circle',
  component: ProgressCircle,
  tags: ['autodocs'],
};

export const progressCircle = ProgressCircle.bind({});
progressCircle.args = {
  size: 'xxs',
  shape: 'circle',
  label: 'false',
};
