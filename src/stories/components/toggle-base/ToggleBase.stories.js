import { ToggleBase } from './ToggleBase';
export default {
  title: 'Components/Toggles/Toggle Base',
  component: ToggleBase,
  tags: ['autodocs'],
};

const ToggleBases = (args) => <ToggleBase {...args} />;

export const toggleBase = ToggleBases.bind({});
toggleBase.args = {
  pressed: 'false',
  size: 'sm',
  theme: 'dark',
  state: 'default',
};
