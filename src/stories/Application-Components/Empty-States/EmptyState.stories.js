import { EmptyState } from './EmptyState';

export default {
  title: 'Application Components/Empty States/ Empty State',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    text: { table: { disable: true } },
    subText: { table: { disable: true } },
  },
};

const EmptyStates = (args) => <EmptyState {...args} />;
export const emptyState = EmptyStates.bind({});
emptyState.args = {
  icon: 'featured-icon',
  color: 'primary',
  size: 'sm',
  text: 'No projects found',
  subText:
    'Your search “Landing page design” did not match any projects. Please try again.',
};
