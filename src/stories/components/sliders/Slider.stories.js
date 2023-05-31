import { Sliders } from './Slider';

export default {
  title: 'Sliders/Slider',
  component: Sliders,
  tags: ['autodocs'],
};

const Slider = (args) => <Sliders {...args} />;
export const slider = Slider.bind({});
slider.args = {
  label: 'false',
  rightControl: '25%',
  leftControl: '0%',
  onlyRightControl: 'false',
};
slider.argTypes = {
  leftControl: {
    control: 'radio',
    if: { arg: 'onlyRightControl', eq: 'false' },
  },
};
