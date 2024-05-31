import Displayimage from "./Displayimage";
export default {
  title: 'Components/Displayimage',
  component: Displayimage,
  decorators: [(Story) => (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Story />
    </div>
  )],
};

const Template = (args) => <Displayimage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://www.ceupe.com/images/easyblog_articles/3089/empresa.jpg',
  text: 'Nombre Empresa',
  color:'#bdbdbd', 
  hovercolor: '#f3f3f3'
};