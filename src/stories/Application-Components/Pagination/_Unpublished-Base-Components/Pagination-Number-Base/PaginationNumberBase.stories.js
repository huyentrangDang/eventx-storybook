import { PaginationNumberBase } from './PaginationNumberBase'

export default {
  title: 'Application Components/Pagination/_Unpublished Base Components/Pagination Number Base',
  component: PaginationNumberBase,
  tags: ['autodocs'],
};

const PaginationNumberBases = (args) => <PaginationNumberBase {...args} />;
export const paginationNumberBase = PaginationNumberBases.bind({});
paginationNumberBase.args = {
  shape: 'circle',
  state: 'focused',
  text: '1'
};
paginationNumberBase.argTypes = {
  shape: {
    options: ["circle", "square"],
    control: { type: 'radio' },
  },
  state: {
    options: ["focused", "hover-active", "default"],
    control: { type: 'radio' },
  },
}
