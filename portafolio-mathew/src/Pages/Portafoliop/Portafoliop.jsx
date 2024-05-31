import './Portafoliop.css'
import portafolioi from '../../assets/portafolio-i.png'
const Portafolio = () => {
  return (
    <div className='contenedor-profile'>
      <img src={portafolioi} className='image-tool' alt='Tools' style={{border: '2px solid white'}}/>
      <div className='contenedor-total'>
        <p className="text-over-image-p">Proyectos</p>   
      </div>
    </div>
  );
}

export default Portafolio