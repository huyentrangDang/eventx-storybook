import { HeaderNavigation } from './HeaderNavigation';

export default {
  title: 'Application Components/Navigation/Header Navigation',
  component: HeaderNavigation,
  tags: ['autodocs'],
};

const HeaderNavigations = (args) => <HeaderNavigation {...args} />;
export const header_navigation = HeaderNavigations.bind({});
header_navigation.args = {
  open: 'false',
  style: 'dualTier',
  color: 'gray',
  theme: 'light',
  breakpoint: 'desktop',
  textBalance: '$11,527.20',
  textBag: 5,
};
header_navigation.argTypes = {
  iconSwap: { table: { disable: true } },
  style: { table: { disable: true } },
  color: { table: { disable: true } },
  breakpoint: { table: { disable: true } },
  textBalance: { table: { disable: true } },
  textBag: { table: { disable: true } },
};
