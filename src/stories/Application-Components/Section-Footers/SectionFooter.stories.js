import { SectionFooter } from './SectionFooter';

export default {
  title: 'Application Components/Section Footers',
  component: SectionFooter,
  tags: ['autodocs'],
};

const SectionFooters = (args) => <SectionFooter {...args} />;
export const section_footer = SectionFooters.bind({});
section_footer.args = {
  type: 'section',
  buttonGroup: 'true',
  breakpoint: 'desktop',
};
section_footer.argTypes = {};
