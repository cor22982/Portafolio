import ButtonInfo from "./ButtonInfo";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default {
  title: 'Components/ButtonInfo',
  component: ButtonInfo,
  decorators: [(Story) => (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Story />
    </div>
  )],
};

const Template = (args) => <ButtonInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  titulo: 'Direccion', 
  value: 'Pinares zona 18',
  iconin: faGithub
};