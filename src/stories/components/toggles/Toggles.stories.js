import { Toggles } from './Toggles';
export default {
  title: 'Toggles/Toggles',
  component: Toggles,
  tags: ['autodocs'],
};
const Toggle = (args) => <Toggles {...args} />;

export const toggle = Toggle.bind({});
toggle.args = {
  pressed: 'false',
  size: 'sm',
  state: 'default',
  showText: 'false',
  text: 'Remember me',
  supportingText: 'Save my login details for next time.',
};

toggle.argTypes = {
  text: {
    control: 'text',
    if: { arg: 'showText', eq: 'true' },
  },
  supportingText: {
    control: 'text',
    if: { arg: 'showText', eq: 'true' },
  },
};
