import { Alert } from './Alert';

export default {
  title: 'Application Components/Alerts & Notifications/ Alert',
  component: Alert,
  tags: ['autodocs'],
};

const Alerts = (args) => <Alert {...args} />;
export const alert = Alerts.bind({});
alert.args = {
  color: 'primary',
  breakpoint: 'default',
  text: 'We’ve just released a new feature',
  subText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
};
alert.argTypes = {
  text: { table: { disable: true } },
  subText: { table: { disable: true } },
};
