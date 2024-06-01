import ButtonInfo from "../../Components/ButtonInfo/ButtonInfo";
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
const ContactsUp = () => {
  function openWindow(link) {
    if (typeof link === 'string' && link.trim() !== '') {
      window.open(link, '_blank'); 
    } else {
      console.error('El enlace proporcionado no es válido');
    }
  }

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        console.log("Copiado");
      })
      .catch((err) => console.error('Error al copiar código: ', err));
  }

  const correo = "mathewcordero100@hotmail.com"
  const telefono = "38731207"
  const direc = "Pinares del Norte zona 18"

  return (
    <div>
      <div className='workup-cont'>
        <h1 className="code-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Contactame por : </h1>  
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center', marginTop: '50px'}}>
        <ButtonInfo 
          iconin={faPhone} 
          titulo="Telefono" 
          value= {telefono}
          color="#21a1f1"
          hovercolor= "#61dbfb"
          onclick={() => handleCopy(telefono)}></ButtonInfo>
        <ButtonInfo 
          iconin={faLocationDot} 
          titulo="Direccion" 
          value= {direc}
          color="#F1C40F" 
          hovercolor= "#FCF3CF "
          onclick={() => handleCopy(direc)}></ButtonInfo>
       <ButtonInfo 
          iconin={faEnvelope} 
          titulo="Correo" 
          value= {correo}
          color="#64fa00" 
          hovercolor= "#D5F5E3"
          onclick={() => handleCopy(correo)}></ButtonInfo>
      <ButtonInfo 
        iconin={faGithub} 
        titulo="Github" 
        value= "cor22982" 
        color="#f3f3f3"
        hovercolor= "#bdbdbd"
        onclick={() => openWindow('https://github.com/cor22982')}></ButtonInfo>

      <ButtonInfo 
        iconin={faLinkedin} 
        titulo="Linkedin" 
        value= "Mathew Cordero" 
        color="#0992d6"
        hovercolor= "#61dbfb"
        onclick={() => openWindow('https://www.linkedin.com/in/mathew-cordero-1b898722b/')}></ButtonInfo>
      <ButtonInfo 
        iconin={faFacebook} 
        titulo="Facebook" 
        value= "Mathew Cordero" 
        color="#0992d6"
        hovercolor= "#61dbfb"
        onclick={() => openWindow('https://www.facebook.com/profile.php?id=100082343597886')}></ButtonInfo>
      </div>
    </div>
    
  );
}

export default ContactsUp