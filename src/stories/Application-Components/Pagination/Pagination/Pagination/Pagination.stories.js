import { Pagination } from './Pagination'

export default {
  title: 'Application Components/Pagination/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

const paginations = (args) => <Pagination {...args} />;
export const pagination = paginations.bind({});
pagination.args = {
  type: "page-default",
  shape: 'square',
  breakpoint: 'desktop' 
};

