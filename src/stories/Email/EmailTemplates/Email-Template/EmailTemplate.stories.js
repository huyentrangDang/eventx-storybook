import { EmailTemplate } from "./EmailTemplate";
export default {
  title: "Email/Email Templates/Email Template",
  component: EmailTemplate,
  tags: ["autodocs"],
};
const emailTemplates = (args) => <EmailTemplate {...args} />;

export const emailTemplate = emailTemplates.bind({});
emailTemplate.args = {
  type: "simple-welcome-01",
};
