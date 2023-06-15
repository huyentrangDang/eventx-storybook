import { YAxisLine } from './YAxisLine';

export default {
  title:
    'Application Components/Charts/_Unpublished Base Components/_YAxisLine',
  component: YAxisLine,
  tags: ['autodocs'],
};

const YAxisLines = (args) => <YAxisLine {...args} />;
export const yAxisLine = YAxisLines.bind({});
yAxisLine.args = {
  text: '1,000',
  label: 'false',
};
yAxisLine.argTypes = {};
