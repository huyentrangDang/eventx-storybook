import { ControlHandle } from './ControlHandle';

export default {
  title: 'Sliders/_Unpublished Base Components',
  component: ControlHandle,
  tags: ['autodocs'],
};

const Control_Handle = (args) => <ControlHandle {...args} />;
export const control_handle = Control_Handle.bind({});
control_handle.args = {
  state: 'default',
  type: 'false',
};
