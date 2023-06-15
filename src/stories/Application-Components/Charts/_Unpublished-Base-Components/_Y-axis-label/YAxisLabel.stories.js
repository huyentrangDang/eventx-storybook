import { YAxisLabel } from './YAxisLabel';

export default {
  title:
    'Application Components/Charts/_Unpublished Base Components/_YAxisLabel',
  component: YAxisLabel,
  tags: ['autodocs'],
};

const YAxisLabels = (args) => <YAxisLabel {...args} />;
export const yAxisLabel = YAxisLabels.bind({});
yAxisLabel.args = {
  text: 'Month',
};
yAxisLabel.argTypes = {};
