import { Change } from './Change';

export default {
  title: 'Application Components/Metrics/_Unpublished Base Components',
  component: Change,
  tags: ['autodocs'],
};

const Changes = (args) => <Change {...args} />;
export const change = Changes.bind({});
change.args = {
  trend: 'positive',
};

change.argTypes = {};
