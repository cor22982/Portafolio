import React from 'react';
import toolimage from '../../assets/herramientas.png';
import './Tools.css';

const Tools = () => {
  const icons = [
    'https://skillicons.dev/icons?i=js',
    'https://skillicons.dev/icons?i=html',
    'https://skillicons.dev/icons?i=css',
    'https://skillicons.dev/icons?i=react',
    'https://skillicons.dev/icons?i=express',
    'https://skillicons.dev/icons?i=nginx',
    'https://skillicons.dev/icons?i=postgres',
    'https://skillicons.dev/icons?i=java'
  ];
  
  return (
    <div className='contenedor-profile'>
      <img src={toolimage} className='image-tool' alt='Tools' />
      <div className='contenedor-total'>
        <div className='iconos'>
          {icons.map((icon, index) => (
            <img src={icon} key={index} className='logo-image' alt={`icon-${index}`} />
          ))}
        </div>
        <p className="text-over-image-i">Conocimientos</p>     
      </div>
    </div> 
  );
}

export default Tools;

