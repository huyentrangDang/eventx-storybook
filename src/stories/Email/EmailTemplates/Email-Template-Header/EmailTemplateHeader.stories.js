import { EmailTemplateHeader } from "./EmailTemplateHeader";
export default {
  title: "Email/Email Templates/Email Template Header",
  component: EmailTemplateHeader,
  tags: ["autodocs"],
};
const emailTemplate = (args) => <EmailTemplateHeader {...args} />;

export const emailTemplateHeader = emailTemplate.bind({});
emailTemplateHeader.args = {
  type: "left-aligned",
  links: "false",
};
