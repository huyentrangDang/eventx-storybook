import { ButtonSocial } from "./Button-Social"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Buttons/Button Social',
  component: ButtonSocial,
  tags: ['autodocs'],

}
export const button_icon_primary = {
  args: {
    social: 'google',
    supportText: 'true',
    theme: 'brand',
    state: 'default'



  }
}