import './Work.css'
import workimage from '../../assets/work.png'
const Work = () => {
  const val1 = '° NorOrienteExpress | 3 años \n\nPuesto: Desarrollador Fronted \n\n° Universidad del Valle | 1 año \n\nPuesto: Digitador';
  return (
    <div className='contenedor-profile'>
      <img src={workimage} className='image-tool' alt='Tools' style={{border: '2px solid #f2ff3d'}}/>
      <div className='contenedor-total'>
        <p className="text-over-image-d">Experiencia laboral</p>
        <div className="text-over-image-a">{val1}</div>       
           
      </div>
    </div>
  );
}
export default Work