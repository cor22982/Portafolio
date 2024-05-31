import imagestudy from '../../assets/study.png'
const Study = () => {
  return (
    <div className='contenedor-profile'>
      <img src={imagestudy} className='image-tool' alt='Tools' style={{border: '2px solid white'}}/>
      <div className='contenedor-total'>
        <p className="text-over-image-p">Proyectos</p>   
      </div>
    </div>
  );
}

export default Study