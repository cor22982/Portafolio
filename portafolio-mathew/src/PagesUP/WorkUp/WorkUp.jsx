import Displayimage from '../../Components/Displayimage/Displayimage';
import './WorkUp.css'
import CodeDisplay from '../../Components/CodeDisplay/CodeDisplay';
const WorkUp = () => {

  const workData = [
    { texto: "DESARROLLADOR FRONTED\n\nNorOriente Express | Diciembre 2021 - Hoy en dia\n\n- Desarrollo de aplicaciones de escritorio y moviles\n\n- Desarrollo de reporteria",
      color: "#4faaff", 
      hovercolor: "#64b2fa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNj6NsjJzXRwM3wWcgZbGjZcXeiwmAj3EEA&s"
    },
    { texto: "DIGITADOR\n\nUniversidad del Valle | Julio 2022 - Mayo 2023 \n\n- Desarrollo de Reporteria\n\n- Mantenimiento impresoras 3D y cortadoras laser",
      color: "#64fa00", 
      hovercolor: "#f4f4f2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQvWMfpfPCvpGXpgFFbWUJanx3Aiol7swwA&s"
    }

  ];

  const contacts = [
    {
      text: "Cecilia Marsicovetere (Supervisora Universidad del Valle)", 
      number: "+502 5966 1019"
    },
    {
      text: "Angela Revolorio (Supervisora NorOriente Express)", 
      number: "+502 5576 2696"
    }
  ] 
  return (
    <div className='workup-cont'>
      <h1 className="code-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Experiencia Laboral:</h1>
        {workData.map((work, index) => (
          <Displayimage
          key={index}
            imageUrl={work.image}
            text={work.texto}
            color={work.color}
            hovercolor={work.hovercolor}
          ></Displayimage>
        ))}
        <h1 className="code-text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        Referencias Laborales:</h1>
        {contacts.map((contact, index) => (
          <CodeDisplay key={index} additionalText={contact.text} textocopy={contact.number}></CodeDisplay>
        ))

        }

        
    </div>
  );
}

export default WorkUp