// import { ButtonGroupBase } from '../button-group-base/ButtonGroupBase';
import { TagXClose } from './TagXClose';
import { TagCount } from './TagCount';
import { TagCheckbox } from './TagCheckbox';
import { Tag } from './Tag';

export default {
  title: 'Tags/Tags',
  component: Tag,
  tags: ['autodocs'],
};

// Tags

const Tags = (args) => <Tag {...args} />;
export const tag = Tags.bind({});
tag.args = {
  text: 'Label',
  size: 'sm',
  icon: 'false',
  action: 'textOnly',
  textTagCount: '5',
  iconCountry: 'country',
  iconAvatar: 'avatar',
  iconDot: 'dot',
  checkbox: 'false',
};
tag.argTypes = {
  textTagCount: {
    control: 'text',
    if: { arg: 'action', eq: 'count' },
  },
  iconCountry: {
    control: 'text',
    if: { arg: 'icon', eq: 'country' },
  },
  iconAvatar: {
    control: 'text',
    if: { arg: 'icon', eq: 'avatar' },
  },
  iconDot: {
    control: 'text',
    if: { arg: 'icon', eq: 'dot' },
  },
};

// Tag-x-close

const TagXCloses = (args) => <TagXClose {...args} />;
export const tag_x_close = TagXCloses.bind({});
tag_x_close.args = {
  size: 'sm',
  state: 'default',
};
tag_x_close.argTypes = {
  icon: { table: { disable: true } },
  action: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  text: { table: { disable: true } },
  textTagCount: { table: { disable: true } },
  state: {
    control: 'radio',
    options: ['default', 'hover', 'focus'],
  },
};

// Tag Count

const TagCounts = (args) => <TagCount {...args} />;
export const tag_count = TagCounts.bind({});
tag_count.args = {
  size: 'sm',
  text: 5,
};
tag_count.argTypes = {
  icon: { table: { disable: true } },
  action: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  textTagCount: { table: { disable: true } },
};

// Tag Checkbox

const TagCheckboxes = (args) => <TagCheckbox {...args} />;
export const tag_checkbox = TagCheckboxes.bind({});
tag_checkbox.args = {
  size: 'sm',
  state: 'default',
  checked: 'false',
};
tag_checkbox.argTypes = {
  state: {
    control: 'radio',
    options: ['default', 'hover', 'focused', 'disbaled'],
  },
  text: { table: { disable: true } },
  checked: {
    control: 'radio',
    options: ['true', 'false'],
  },
  icon: { table: { disable: true } },
  action: { table: { disable: true } },
  checkbox: { table: { disable: true } },
  textTagCount: { table: { disable: true } },
};
