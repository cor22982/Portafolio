import './PortaUp.css'
import DisimageAbv from "../../Components/DisimageAbv/DisimageAbv";
const PortaUp = () => {
  const proyects = [
    {
      texto: "Proyecto Administrador de Restaurantes",
      color: "#ff9900", 
      hovercolor: "#ff9900",
      image: "https://raw.githubusercontent.com/cor22982/Proyecto_Restaurante/main/Fronted/proyecto_restaurante/src/assets/Captura.PNG",
      link: "https://github.com/cor22982/Proyecto_Restaurante.git"
    },
    {
      texto: "Blog Personal (Guatepedia)",
      color: "#bdbdbd", 
      hovercolor: "#f3f3f3",
      image: "https://camo.githubusercontent.com/6d8c5f7f50589fad81d890e7754765aa65f29bfcfca19b2017cefacae048bd5b/68747470733a2f2f7374617469632e656c64696172696f2e65732f636c69702f33373436303739332d646164372d346661362d613330302d6165363434353061653539375f31362d392d646973636f7665722d6173706563742d726174696f5f64656661756c745f302e6a7067",
      link: "https://github.com/cor22982/Proyecto-1-My-Blog.git"
    },
    {
      texto: "Proyecto Administrador Renap (Deimos)",
      color: "#4faaff", 
      hovercolor: "#64b2fa",
      image: "https://raw.githubusercontent.com/cor22982/Proyecto_TiempoEspera/main/Scrum/fronted/src/assets/deimoss.ico",
      link: "https://github.com/cor22982/Proyecto_TiempoEspera.git"
    },
    {
      texto: "Reserva de Salones (ReservaUVG)",
      color: "#64fa00", 
      hovercolor: "#f4f4f2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQvWMfpfPCvpGXpgFFbWUJanx3Aiol7swwA&s",
      link: "https://github.com/mathew-cordero/ReservaUVG.git"
    },
    {
      texto: "Creador de Facturas y de Boletas (NorOriente Express)",
      color: "#61dbfb", 
      hovercolor: "#21a1f1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNj6NsjJzXRwM3wWcgZbGjZcXeiwmAj3EEA&s",
      link: "https://github.com/cor22982/PROYECTO-CREADOR-DE-FACTURAS-.git"
    },
    {
      texto: "Calculadora (uso de testing)",
      color: "#61dbfb", 
      hovercolor: "#21a1f1",
      image: "https://raw.githubusercontent.com/cor22982/Laboratorio_Calculadora/main/calculadora/public/calculadora.PNG?token=GHSAT0AAAAAACSMTQNUKJ7E3RTQKYWAQFD4ZSZ32IQ",
      link: "https://github.com/cor22982/Laboratorio_Calculadora.git"
    }

  ] 
  return(
    
    <div className='workup-cont'>
      <h1 className="code-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Proyectos Desarrollados</h1>
      <div className="herramientas">
        {proyects.map((pro, index) => (
           <div key={index} className="tool-item">
            <DisimageAbv
              key={index} 
              link={pro.link}
              imageUrl={pro.image}
              text={pro.texto}
              color={pro.color}
              hovercolor={pro.hovercolor}
            ></DisimageAbv>
            </div>
        ))}
      </div>
    </div>
  );
}

export default PortaUp