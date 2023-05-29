import { EmailTemplateFooter } from "./EmailTemplateFooter";
export default {
  title: "Email/Email Templates/Email Template Footer",
  component: EmailTemplateFooter,
  tags: ["autodocs"],
};
const emailFooter = (args) => <EmailTemplateFooter {...args} />;

export const emailTemplateFooter = emailFooter.bind({});
emailTemplateFooter.args = {
  type: "left-aligned",
  actions: "false",
};
