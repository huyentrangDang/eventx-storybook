import {
  CategoryIcons,
  FeatureIcon,
  MiscIcon,
  MiscellaneousCheckIcons,
  MiscellaneousCheckItemText,
  MiscellaneousDotIcon,
  MiscellaneousIcons,
} from './MiscIcon';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Style Guid/Misc Icon',
  component: MiscellaneousCheckItemText,
  tags: ['autodocs'],
};

// export const featureIcon = () => {
//   return MiscIcon();
// };

export const categoryIcons = () => {
  return CategoryIcons();
};
export const miscellaneousCheckIcon = () => {
  return MiscellaneousCheckIcons();
};
export const miscellaneousCheckItemText = {
  args: {
    type: 'default',
    size: 'sm',
    color: 'primary',
    breakpoint: 'desktop',
  },
};
export const miscellaneousStarIcon = () => {
  return MiscellaneousCheckIcons();
};

const miscellaneousDotIcon = (args) => <MiscellaneousDotIcon {...args} />;
export const miscellaneous_Dot_Icon = miscellaneousDotIcon.bind({});
miscellaneous_Dot_Icon.args = {
  size: 'sm',
};
miscellaneous_Dot_Icon.argTypes = {
  size: {
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },
  color: { table: { disable: true } },
  breakpoint: { table: { disable: true } },
  type: { table: { disable: true } },
};

const featureIcon = (args) => <FeatureIcon {...args} />;
export const feature_Icon = featureIcon.bind({});
feature_Icon.args = {
  size: 'sm',
  color: 'primary',
  theme: 'light-circle',
};
feature_Icon.argTypes = {
  color: {
    control: 'radio',
    options: ['primary', 'gray', 'error', 'warning', 'success'],
  },
  theme: {
    control: 'radio',
    options: [
      'light-circle',
      'light-circle-outline',
      'dark-circle',
      'light-square',
      'mid-square',
      'dark-square',
      'glass',
    ],
  },
  breakpoint: { table: { disable: true } },
  type: { table: { disable: true } },
};
