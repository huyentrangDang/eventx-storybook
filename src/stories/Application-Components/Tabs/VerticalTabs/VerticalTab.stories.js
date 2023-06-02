import { VerticalTabs } from './VerticalTab';

export default {
  title: 'Application Components/Tabs/Vertical Tabs',
  component: VerticalTabs,
  tags: ['autodocs'],
  args: {
    type: 'button-primary',
    size: 'sm',
    breakpoint: 'desktop',
  },
};

const VerticalTab = (args) => <VerticalTabs {...args} />;
export const vertical_tab = VerticalTab.bind({});
