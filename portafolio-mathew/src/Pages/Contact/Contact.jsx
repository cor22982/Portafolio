import './Contact.css'
import ButtonInfo from '../../Components/ButtonInfo/ButtonInfo';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
 
  
  return (
    <div className='background-contact'>
      <div className='contact-content'>
        <div className='contact-title'>Contactos</div>
      </div>
      <ButtonInfo 
        iconin={faPhone} 
        titulo="Telefono:" 
        value= "38731207" 
        color="#21a1f1"
        hovercolor= "#61dbfb"></ButtonInfo>

      <ButtonInfo 
        iconin={faLocationDot} 
        titulo="Direccion:" 
        value= "Pinares del Norte zona 18" 
        color="#F1C40F" 
        hovercolor= "#FCF3CF "></ButtonInfo>
       <ButtonInfo 
        iconin={faEnvelope} 
        titulo="Correo:" 
        value= "mathewcordero100@hotmail.com" 
        color="#64fa00" 
        hovercolor= "#D5F5E3"></ButtonInfo>
      <ButtonInfo 
        iconin={ faGithub} 
        titulo="Github:" 
        value= "cor22982" 
        color="#f3f3f3"
        hovercolor= "#bdbdbd"></ButtonInfo>
    </div>
  );
}
export default Contact;
