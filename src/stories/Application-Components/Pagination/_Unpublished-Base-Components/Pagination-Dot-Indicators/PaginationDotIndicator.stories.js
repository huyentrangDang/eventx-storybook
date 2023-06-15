import { PaginationDotIndicators } from './PaginationDotIndicator'

export default {
  title: 'Application Components/Pagination/_Unpublished Base Components/Pagination Dot Indicators',
  component: PaginationDotIndicators,
  tags: ['autodocs'],
};

const paginationDotIndicator = (args) => <PaginationDotIndicators {...args} />;
export const paginationDotIndicators = paginationDotIndicator.bind({});
paginationDotIndicators.args = {
  current: 'false',
  style: 'dot',
  size: 'md',
  color: 'primary-light'
};

