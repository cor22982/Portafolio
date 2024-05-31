import CustomizedTimeline from "./CustomizedTimeline"

export default {
  title: 'Components/CustomizedTimeline',
  component: CustomizedTimeline,
  decorators: [(Story) => (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Story />
    </div>
  )],
};

const Template = (args) => <CustomizedTimeline {...args} />;

export const Default = Template.bind({});
Default.args = {
 
};