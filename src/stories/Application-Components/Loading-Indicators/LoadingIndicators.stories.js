import { LoadingIndicator } from './LoadingIndicators';

export default {
  title: 'Application Components/Loading Indicators',
  component: LoadingIndicator,
  tags: ['autodocs'],
};

const LoadingIndicators = (args) => <LoadingIndicator {...args} />;
export const loadingIndicators = LoadingIndicators.bind({});
loadingIndicators.args = {
  size: 'sm',
  style: 'line-simple',
  text: 'Loading...',
};
loadingIndicators.argTypes = {
  text: {
    table: {
      disable: true,
    },
  },
};
