import { FileUploadBase } from './FileUploadBase';

export default {
  title: 'Application Components/File Upload/File Upload Base',
  component: FileUploadBase,
  tags: ['autodocs'],
};

const FileUploadBases = (args) => <FileUploadBase {...args} />;
export const fileUploadBase = FileUploadBases.bind({});
fileUploadBase.args = {
  state: 'default',
};

fileUploadBase.argTypes = {};
