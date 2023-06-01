import { Breadcrumbs } from './Breadcrumb';

export default {
  title: 'Application Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

const Breadcrumb = (args) => <Breadcrumbs {...args} />;
export const breadcrumb = Breadcrumb.bind({});
breadcrumb.args = {
  divider: 'chevron',
  type: 'text',
  breakpoint: 'desktop',
  textFirst: 'Settings',
  textDestination: 'Team',
};
breadcrumb.argTypes = {
  textFirst: { table: { disable: true } },
  textDestination: { table: { disable: true } },
};
