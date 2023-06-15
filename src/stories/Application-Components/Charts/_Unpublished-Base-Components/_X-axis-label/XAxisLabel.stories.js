import { XAxisLabel } from './XAxisLabel';

export default {
  title:
    'Application Components/Charts/_Unpublished Base Components/_XAxisLabel',
  component: XAxisLabel,
  tags: ['autodocs'],
};

const XAxisLabels = (args) => <XAxisLabel {...args} />;
export const xAxisLabel = XAxisLabels.bind({});
xAxisLabel.args = {
  text: 'Month',
};
xAxisLabel.argTypes = {};
