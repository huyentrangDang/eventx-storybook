import { StepIconBase } from '../Step-Icon-Base/StepIconBase';

export default {
    title: 'Application Components/ Progress Steps/Step Icon Base',
  component: StepIconBase,
  tags: ['autodocs'],
};

const StepIconBases = (args) => <StepIconBase {...args} />;
export const stepIconBase = StepIconBases.bind({});
stepIconBase.args = {
    status: 'complete',
    size: 'sm',
    theme: 'light',
    state: 'default'
};
stepIconBase.argTypes = {};

