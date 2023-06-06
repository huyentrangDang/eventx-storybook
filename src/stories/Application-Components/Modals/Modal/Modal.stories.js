import { Modals } from './Modal';

export default {
  title: 'Application Components/Modals/Modals',
  component: Modals,
  tags: ['autodocs'],
};

const Modal = (args) => <Modals {...args} />;
export const modal = Modal.bind({});
modal.args = {
  type: 'stacked-with-2-item',
  breakpoint: 'desktop',
  xCloseButton: 'true',
  show11: 'true',
  show43: 'false',
};
modal.argTypes = {
  xCloseButton: { table: { disable: true } },
  show11: { table: { disable: true } },
  show43: { table: { disable: true } },
  breakpoint: { table: { disable: true } },
};
