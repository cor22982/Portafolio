import imagestudy from '../../assets/study.png'
import './Study.css'
const Study = () => {
  return (
    <div className='contenedor-profile'>
      <img src={imagestudy} className='image-tool' alt='Tools' style={{border: '2px solid #00f200'}}/>
      <div className='contenedor-total'>
        <p className="text-over-image-s">Estudios</p>   
      </div>
    </div>
  );
}

export default Study