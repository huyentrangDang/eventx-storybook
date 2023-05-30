import { Avatar } from './Avatar';

export default {
  title: 'Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

const avatar = (args) => <Avatar {...args} />;
export const avatars = avatar.bind({});
avatars.args = {
  text: 'false',
  size: 'xs',
  placeholder: 'false',
  state: 'default',
  statusIcon: 'false',
};
avatars.argTypes = {};
