import { HorizontalTabs } from './HorizontalTab';

export default {
  title: 'Application Components/Tabs/Horizontal Tabs',
  component: HorizontalTabs,
  tags: ['autodocs'],
  args: {
    type: 'button-primary',
    size: 'sm',
    fullWidth: 'false',
    breakpoint: 'desktop',
    // text: 'My details',
    // textBadge: '2',
  },
};

const HorizontalTab = (args) => <HorizontalTabs {...args} />;
export const horizontal_tab = HorizontalTab.bind({});
