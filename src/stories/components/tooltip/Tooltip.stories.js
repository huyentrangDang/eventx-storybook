import { Tooltips } from './Tooltip';
export default {
  title: 'Tooltips/Tooltip',
  component: Tooltips,
  tags: ['autodocs'],
};
// const Tooltip = (args) => <Tooltips {...args} />;

export const tooltip = Tooltips.bind({});
tooltip.args = {
  theme: 'light',
  arrow: 'none',
  showSupportingText: 'false',
  text: 'This is a tooltip',
  supportingText:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.',
};
