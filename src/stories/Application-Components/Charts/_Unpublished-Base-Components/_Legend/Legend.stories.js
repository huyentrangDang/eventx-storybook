import { Legend } from './Legend';

export default {
  title: 'Application Components/Charts/_Unpublished Base Components/_Legend',
  component: Legend,
  tags: ['autodocs'],
};

const Legends = (args) => <Legend {...args} />;
export const legend = Legends.bind({});
legend.args = {
  orientation: 'vertical',
  text: 'Series 1',
};
legend.argTypes = {
  text: {
    table: {
      disable: true,
    },
  },
};
