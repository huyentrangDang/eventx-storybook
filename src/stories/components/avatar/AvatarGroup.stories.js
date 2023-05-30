import { AvatarGroup } from './AvatarGroup';

export default {
  title: 'Avatar/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
};

const Avatar_Group = (args) => <AvatarGroup {...args} />;
export const avatar_group = Avatar_Group.bind({});
avatar_group.args = {
  size: 'xs',
  moreUser: 'true',
  addMore: 'true',
};
avatar_group.argTypes = {
  moreUser: { table: { disable: true } },
  addMore: { table: { disable: true } },
};
