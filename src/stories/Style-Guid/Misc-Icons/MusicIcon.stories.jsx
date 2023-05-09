import { CategoryIcons, MiscCategoryIcons, MiscIcon } from "./MiscIcon"


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Style Guid/Misc Icon',
  component: MiscIcon,
  tags: ['autodocs'],
  argTypes: {}
}
export const featureIcon = () =>{
  return MiscIcon();
}

export const categoryIcons = () =>{
  return CategoryIcons();
}
export const miscellaneousIcon = () =>{
  return CategoryIcons();
}
