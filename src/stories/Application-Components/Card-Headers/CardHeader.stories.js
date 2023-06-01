import { CardHeader } from './CardHeader';

export default {
  title: 'Application Components/Card Headers',
  component: CardHeader,
  tags: ['autodocs'],
};

const CardHeaders = (args) => <CardHeader {...args} />;
export const card_header = CardHeaders.bind({});
card_header.args = {
  avatar: 'false',
  badge: 'true',
  accentLine: 'false',
  breakpoint: 'desktop',
  actions: 'true',
  supportingText: 'true',
  dropdownIcon: 'true',
  divider: 'true',
};
card_header.argTypes = {
  actions: { table: { disable: true } },
  supportingText: { table: { disable: true } },
  dropdownIcon: { table: { disable: true } },
  divider: { table: { disable: true } },
};
