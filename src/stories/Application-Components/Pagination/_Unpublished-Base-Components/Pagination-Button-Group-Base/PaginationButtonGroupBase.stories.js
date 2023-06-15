import { PaginationButtonGroupBase } from './PaginationButtonGroupBase'

export default {
  title: 'Application Components/Pagination/_Unpublished Base Components/Pagination Button Group Base',
  component: PaginationButtonGroupBase,
  tags: ['autodocs'],
};

const paginationButtonGroupBases = (args) => <PaginationButtonGroupBase {...args} />;
export const paginationButtonGroupBase = paginationButtonGroupBases.bind({});
paginationButtonGroupBase.args = {
  icon: 'leading',
  state: 'focused',
  text: '1'
};

