import { AvatarUser } from './AvatarUser';

export default {
  title: 'Components/Avatar/Avatar User',
  component: AvatarUser,
  tags: ['autodocs'],
};

const Avatar_User = (args) => <AvatarUser {...args} />;
export const avatar_users = Avatar_User.bind({});
avatar_users.args = {};
avatar_users.argTypes = {};
