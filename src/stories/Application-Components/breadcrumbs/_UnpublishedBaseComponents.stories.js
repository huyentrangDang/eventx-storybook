import { BreadcrumbButtonBase } from './BreadcrumbButtonBase';

export default {
  title: 'Application Components/_Unpublished Base Components',
  component: BreadcrumbButtonBase,
  tags: ['autodocs'],
};

const BreadcrumbButtonBases = (args) => <BreadcrumbButtonBase {...args} />;
export const breadcrumbButtonBase = BreadcrumbButtonBases.bind({});
breadcrumbButtonBase.args = {
  current: 'false',
  type: 'text',
  icon: 'true',
  state: 'default',
  text: 'Projects',
};
breadcrumbButtonBase.argTypes = {
  text: { table: { disable: true } },
};
