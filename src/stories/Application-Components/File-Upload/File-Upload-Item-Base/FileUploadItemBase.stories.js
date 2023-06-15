import { FileUploadItemBase } from './FileUploadItemBase';

export default {
  title: 'Application Components/File Upload/File Upload Item Base',
  component: FileUploadItemBase,
  tags: ['autodocs'],
};

const FileUploadItemBases = (args) => <FileUploadItemBase {...args} />;
export const fileUploadItemBase = FileUploadItemBases.bind({});
fileUploadItemBase.args = {
  type: 'progress-bar',
  icon: 'document',
  state: 'in-progress',
};

fileUploadItemBase.argTypes = {
  text: { table: { disable: true } },
  supportText: { table: { disable: true } },
  textAction: { table: { disable: true } },
};
