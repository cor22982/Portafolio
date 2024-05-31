import CodeDisplay from "./CodeDisplay";
export default {
  title: 'Components/CodeDisplay',
  component: CodeDisplay,
  decorators: [(Story) => (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Story />
    </div>
  )],
};

const Template = (args) => <CodeDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  additionalText: 'texto',
  textocopy: '0'
};