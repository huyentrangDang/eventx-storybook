import { VerifycationCode } from './VerifycationCode';

export default {
  title: 'Input/Verifycation Code',
  component: VerifycationCode,
  tags: ['autodocs'],
};

const Verifycation_Code = (args) => <VerifycationCode {...args} />;
export const verifycation_code = Verifycation_Code.bind({});
verifycation_code.args = {
  size: 'sm',
  digits: 4,
  label: 'Secure code',
  hintText: 'This is a hint text to help user.',
};
verifycation_code.argTypes = {};
