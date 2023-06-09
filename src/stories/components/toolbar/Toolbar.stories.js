import { Toolbar } from './Toolbar';

export default {
  title: 'Components/Input/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
};

const Toolbars = (args) => <Toolbar {...args} />;
export const toolbar = Toolbars.bind({});
toolbar.args = {
  breakpoint: 'mobile',
};
toolbar.argTypes = {};
