import { ModalActions } from './ModalActions';

export default {
  title: 'Application Components/Modals/Modal Actions',
  component: ModalActions,
  tags: ['autodocs'],
};

const ModalAction = (args) => <ModalActions {...args} />;
export const modal_action = ModalAction.bind({});
modal_action.args = {
  type: 'horizontal-fill-container',
  dualAction: 'false',
  destructive: 'false',
  checkbox: 'true',
  tertiaryButton: 'true',
  textCheckbox: 'Settings',
};
modal_action.argTypes = {
  checkbox: { table: { disable: true } },
  textCheckbox: { table: { disable: true } },
  tertiaryButton: { table: { disable: true } },
};
