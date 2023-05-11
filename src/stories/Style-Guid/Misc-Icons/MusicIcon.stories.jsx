import { CategoryIcons, MiscIcon, MiscellaneousCheckIcons, MiscellaneousCheckItemText, MiscellaneousIcons } from "./MiscIcon"


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Style Guid/Misc Icon',
  component: MiscellaneousCheckItemText,
  tags: ['autodocs'],

}

export const featureIcon = () =>{
  return MiscIcon();
}

export const categoryIcons = () =>{
  return CategoryIcons();
}
export const miscellaneousCheckIcon = () =>{
  return MiscellaneousCheckIcons();
}
export const miscellaneousCheckItemText = {
  args: {
    type: "default",
    size: "sm",
    color: 'primary',
    breakpoint: 'desktop',

  }
}
export const miscellaneousStarIcon = () =>{
  return MiscellaneousCheckIcons();
}