import { FileUpload } from './FileUpload';

export default {
  title: 'Application Components/File Upload/File Upload',
  component: FileUpload,
  tags: ['autodocs'],
};

const FileUploads = (args) => <FileUpload {...args} />;
export const fileUpload = FileUploads.bind({});
fileUpload.args = {
  filesQueued: 'false',
  type: 'progress-bar',
  state: 'default',
  breakpoint: 'desktop',
};

fileUpload.argTypes = {};
