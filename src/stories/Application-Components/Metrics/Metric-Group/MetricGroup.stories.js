import { MetricGroup } from './MetricGroup';

export default {
  title: 'Application Components/Metrics/Metric Group',
  component: MetricGroup,
  tags: ['autodocs'],
};

const MetricGroups = (args) => <MetricGroup {...args} />;
export const metricGroup = MetricGroups.bind({});
metricGroup.args = {
  actions: 'false',
  type: 'simple',
  breakpoint: 'desktop',
};

metricGroup.argTypes = {
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
