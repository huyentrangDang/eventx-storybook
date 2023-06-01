import { AvatarAddButton } from './AvatarAddButton';
import { AvatarCompanyIcon } from './AvatarCompanyIcon';
import { AvatarImage } from './AvatarImage';
import { AvatarOnlineIndicator } from './AvatarOnlineIndicator';
import { VerifiedTick } from './VerifiedTick';

export default {
  title: 'Components/Avatar/_Unpublished Base Component',
  component: AvatarImage,
  tags: ['autodocs'],
};

const Avatar_Image = (args) => <AvatarImage {...args} />;
export const avatar_image = Avatar_Image.bind({});
avatar_image.args = {
  showSource: 'true',
  source: 'true',
  type: 'square',
};
avatar_image.argTypes = {
  source: {
    table: { disable: true },
  },
};

const Avatar_Online_Indicator = (args) => <AvatarOnlineIndicator {...args} />;
export const avatar_online_indicator = Avatar_Online_Indicator.bind({});
avatar_online_indicator.args = {
  showSource: 'true',
  source: 'true',
  type: 'square',
  size: 'xs',
  online: 'false',
};
avatar_online_indicator.argTypes = {
  source: {
    table: { disable: true },
  },
  showSource: {
    table: { disable: true },
  },
  type: {
    table: { disable: true },
  },
  online: {
    control: 'boolean',
    options: ['true', 'false'],
  },
  size: {
    control: 'radio',
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  },
};

const Avatar_Company_Icon = (args) => <AvatarCompanyIcon {...args} />;
export const avatar_company_icon = Avatar_Company_Icon.bind({});
avatar_company_icon.args = {
  size: 'xs',
};
avatar_company_icon.argTypes = {
  source: {
    table: { disable: true },
  },
  showSource: {
    table: { disable: true },
  },
  type: {
    table: { disable: true },
  },
  size: {
    control: 'radio',
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
  },
};

const Verified_Tick = (args) => <VerifiedTick {...args} />;
export const verified_tick = Verified_Tick.bind({});
verified_tick.args = {
  size: 'xs',
};
verified_tick.argTypes = {
  source: {
    table: { disable: true },
  },
  showSource: {
    table: { disable: true },
  },
  type: {
    table: { disable: true },
  },
  size: {
    control: 'radio',
    options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
  },
};

const Avatar_Add_Button = (args) => <AvatarAddButton {...args} />;
export const avatar_add_button = Avatar_Add_Button.bind({});
avatar_add_button.args = {
  size: 'xs',
  state: 'default',
};
avatar_add_button.argTypes = {
  source: {
    table: { disable: true },
  },
  showSource: {
    table: { disable: true },
  },
  type: {
    table: { disable: true },
  },
  size: {
    control: 'radio',
    options: ['xs', 'sm', 'md'],
  },
  state: {
    control: 'radio',
    options: ['default', 'hover', 'focus', 'disabled'],
  },
};
