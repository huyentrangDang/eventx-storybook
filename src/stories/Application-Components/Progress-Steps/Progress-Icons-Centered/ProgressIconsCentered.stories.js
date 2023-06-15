import { ProgressIconsCentered } from '../Progress-Icons-Centered/ProgressIconsCentered';

export default {
  title: 'Application Components/ Progress Steps/Progress Icons Centered',
  component: ProgressIconsCentered,
  tags: ['autodocs'],
};

const ProgressIconsCentereds = (args) => <ProgressIconsCentered {...args} />;
export const progressIconsCentered = ProgressIconsCentereds.bind({});
progressIconsCentered.args = {
  size: 'lg',
  step: '3',
  theme: 'light',
  breakpoint: 'mobile',
};
progressIconsCentered.argTypes = {
  items: {
    table: {
      disable: true,
    },
  },
};
