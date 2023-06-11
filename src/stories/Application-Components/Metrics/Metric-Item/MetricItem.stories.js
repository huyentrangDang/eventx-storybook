import { MetricItem } from './MetricItem';

export default {
  title: 'Application Components/Metrics/Metric Item',
  component: MetricItem,
  tags: ['autodocs'],
};

const MetricItems = (args) => <MetricItem {...args} />;
export const metricItem = MetricItems.bind({});
metricItem.args = {
  actions: 'false',
  type: 'simple',
  breakpoint: 'desktop',
  dropdownIcon: 'true',
  supportText: 'false',
};

metricItem.argTypes = {
  dropdownIcon: {
    table: {
      disable: true,
    },
  },
  supportText: {
    table: {
      disable: true,
    },
  },
};
