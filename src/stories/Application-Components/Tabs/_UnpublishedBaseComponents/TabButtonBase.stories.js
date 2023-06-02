import { TabButtonBase } from './TabButtonBase';

export default {
  title:
    'Application Components/Tabs/_Unpublished Base Components/Tab Button Base',
  component: TabButtonBase,
  tags: ['autodocs'],
  args: {
    current: 'false',
    size: 'sm',
    type: 'button-primary',
    fullWidth: 'false',
    badge: 'false',
    state: 'default',
    text: 'My details',
    textBadge: '2',
  },
};

const TabButtonBases = (args) => <TabButtonBase {...args} />;
export const tab_button_base = TabButtonBases.bind({});
