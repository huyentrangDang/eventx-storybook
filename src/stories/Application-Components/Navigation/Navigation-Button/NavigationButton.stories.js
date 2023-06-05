import { NavigationButton } from './NavigationButton';

export default {
  title: 'Application Components/Navigation/Navigation Button',
  component: NavigationButton,
  tags: ['autodocs'],
};

const NavigationButtons = (args) => <NavigationButton {...args} />;
export const navigation_button = NavigationButtons.bind({});
navigation_button.args = {
  current: 'false',
  size: 'md',
  color: 'primary',
  theme: 'light',
  state: 'default',
  iconSwap: 'bell',
};
navigation_button.argTypes = {
  iconSwap: { table: { disable: true } },
};
