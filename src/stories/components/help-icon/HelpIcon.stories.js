import { HelpIcon } from './HelpIcon';
export default {
  title: 'Components/Tooltips/HelpIcon',
  component: HelpIcon,
  tags: ['autodocs'],
};

export const helpIcon = HelpIcon.bind({});
helpIcon.args = {
  open: 'false',
  supportingText: 'false',
  tootltip: 'top-no-arrow',
};
