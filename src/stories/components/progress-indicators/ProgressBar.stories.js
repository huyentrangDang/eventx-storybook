import { ProgressBar } from './ProgressBar';

export default {
  title: 'Progress Indicators/Progress Bars',
  component: ProgressBar,
  tags: ['autodocs'],
};

const Progress_Bar = (args) => <ProgressBar {...args} />;
export const progress_bar = Progress_Bar.bind({});
progress_bar.args = {
  progress: '0%',
  label: 'false',
};
progress_bar.argTypes = {};
