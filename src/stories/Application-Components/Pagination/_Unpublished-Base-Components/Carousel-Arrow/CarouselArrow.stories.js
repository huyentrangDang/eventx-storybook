import { CarouselArrow } from './CarouselArrow'

export default {
  title: 'Application Components/Pagination/_Unpublished Base Components/CarouselArrow',
  component: CarouselArrow,
  tags: ['autodocs'],
};

const carouselArrows = (args) => <CarouselArrow {...args} />;
export const carouselArrow = carouselArrows.bind({});
carouselArrow.args = {
  size: 'md',
  color: 'primary-light-bg',
  chevron: 'left'
};

