import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';
import { AvatarLabelGroup } from './AvatarLabelGroup';
import { AvatarProfilePhoto } from './AvatarProfilePhoto';

export default {
  title: 'Components/Avatar/Avatar',
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
  text: { table: { disable: true } },
  placeholder: { table: { disable: true } },
  state: { table: { disable: true } },
  statusIcon: { table: { disable: true } },
  size: {
    control: 'radio',
    options: ['xs', 'sm', 'md'],
  },
};

const Avatar_Label_Group = (args) => <AvatarLabelGroup {...args} />;
export const avatar_label_group = Avatar_Label_Group.bind({});
avatar_label_group.args = {
  size: 'sm',
  statusIcon: 'false',
  state: 'default',
  text: 'Olivia Rhye',
  supportText: 'olivia@untitledui.com',
};
avatar_label_group.argTypes = {
  placeholder: { table: { disable: true } },
  text: { control: 'text' },
  state: {
    control: 'radio',
    options: ['default', 'hover', 'focused'],
  },
  statusIcon: {
    control: 'radio',
    options: ['false', 'onlineIndicator', 'company', 'verified'],
  },
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg', 'xl'],
  },
};

const Avatar_Profile_Photo = (args) => <AvatarProfilePhoto {...args} />;
export const avatar_profile_photo = Avatar_Profile_Photo.bind({});
avatar_profile_photo.args = {
  text: 'false',
  size: 'sm',
  placeholder: 'false',
  verified: true,
};
avatar_profile_photo.argTypes = {
  state: { table: { disable: true } },
  statusIcon: { table: { disable: true } },
  placeholder: {
    control: 'radio',
    options: ['true', 'false'],
  },
  text: {
    control: 'radio',
    options: ['true', 'false'],
  },
  verified: {
    control: 'boolean',
    options: [true, false],
  },
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },
};
