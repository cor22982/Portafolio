import DisimageAbv from "./DisimageAbv";
export default {
  title: 'Components/DisimageAbv',
  component: DisimageAbv,
  decorators: [(Story) => (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Story />
    </div>
  )],
};

const Template = (args) => <DisimageAbv {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://raw.githubusercontent.com/cor22982/Proyecto_Restaurante/main/Fronted/proyecto_restaurante/src/assets/Captura.PNG',
  text: 'Nombre proyecto',
  color:'#bdbdbd', 
  hovercolor: '#f3f3f3',
  link: 'https://jefersoncalderon2019036.github.io/portafolio/'
};