import { SectionHeader } from './SectionHeader';

export default {
  title: 'Application Components/Section Headers',
  component: SectionHeader,
  tags: ['autodocs'],
};

const SectionHeaders = (args) => <SectionHeader {...args} />;
export const section_header = SectionHeaders.bind({});
section_header.args = {
  tabs: 'false',
  type: 'buttons',
  breakpoint: 'desktop',
  actions: 'true',
  supportingText: 'true',
  dropdownIcon: 'true',
  divider: 'true',
};
section_header.argTypes = {
  actions: { table: { disable: true } },
  supportingText: { table: { disable: true } },
  dropdownIcon: { table: { disable: true } },
  divider: { table: { disable: true } },
};
