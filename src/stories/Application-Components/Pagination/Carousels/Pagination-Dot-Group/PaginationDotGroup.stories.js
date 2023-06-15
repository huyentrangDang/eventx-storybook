import { PaginationDotGroup } from './PaginationDotGroup'

export default {
  title: 'Application Components/Pagination/Carousels/Pagination Dot Group',
  component: PaginationDotGroup,
  tags: ['autodocs'],
};

const PaginationDotGroups = (args) => <PaginationDotGroup {...args} />;
export const paginationDotGroup = PaginationDotGroups.bind({});
paginationDotGroup.args = {
  size: 'md',
  style: 'dot',
  color: 'primary-light',
  framed: 'false',
};

