import { StepBase } from '../Step-Base/StepBase';

export default {
    title: 'Application Components/ Progress Steps/Step Base',
  component: StepBase,
  tags: ['autodocs'],
};

const StepBases = (args) => <StepBase {...args} />;
export const stepBase = StepBases.bind({});
stepBase.args = {
    status: 'complete',
    size: 'lg',
    theme: 'light',
    type: 'top',
    state: 'focused',
    text: 'Your details',
    supporttingText: 'Please provide your name and email'
};
stepBase.argTypes = {};

