import { FileUploadIcon } from './FileUploadIcon';

export default {
  title: 'Application Components/File Upload/File Upload Icon',
  component: FileUploadIcon,
  tags: ['autodocs'],
};

const FileUploadIcons = (args) => <FileUploadIcon {...args} />;
export const fileUploadIcon = FileUploadIcons.bind({});
fileUploadIcon.args = {
  fileType: 'document',
  state: 'default',
};
