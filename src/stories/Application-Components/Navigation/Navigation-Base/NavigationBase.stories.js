import { NavigationBase } from './NavigationBase';

export default {
  title: 'Application Components/Navigation/Navigation Base',
  component: NavigationBase,
  tags: ['autodocs'],
};

const NavigationBases = (args) => <NavigationBase {...args} />;
export const navigation_base = NavigationBases.bind({});
navigation_base.args = {
  current: 'false',
  color: 'primary',
  theme: 'light',
  state: 'default',
  dot: 'true',
  icon: 'true',
  badge: 'true',
  dropdown: 'true',
  iconSwap: 'bar-chart',
  text: 'Dashboard',
  textBage: 10,
};
navigation_base.argTypes = {
  dot: { table: { disable: true } },
  icon: { table: { disable: true } },
  badge: { table: { disable: true } },
  dropdown: { table: { disable: true } },
  iconSwap: { table: { disable: true } },
  text: { table: { disable: true } },
  textBage: { table: { disable: true } },
};
