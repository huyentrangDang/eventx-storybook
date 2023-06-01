import { PageHeader } from './PageHeader';

export default {
  title: 'Application Components/Page Headers',
  component: PageHeader,
  tags: ['autodocs'],
};

const PageHeaders = (args) => <PageHeader {...args} />;
export const page_header = PageHeaders.bind({});
page_header.args = {
  style: 'simple',
  breakpoint: 'desktop',
  actions: 'true',
  supportingText: 'true',
  breadcrumbs: 'true',
  search: 'true',
  divider: 'true',
};
page_header.argTypes = {
  textFirst: { table: { disable: true } },
  textDestination: { table: { disable: true } },
};
