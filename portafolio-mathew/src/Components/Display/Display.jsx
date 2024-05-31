import './Display.css'
import PropTypes from 'prop-types'
const adjustOpacity = (color, percent) => {
  const num = parseInt(color.slice(1), 16),
    R = (num >> 16) & 0xFF,
    G = (num >> 8) & 0xFF,
    B = num & 0xFF;
  const opacity = percent / 200;
  return `rgba(${R}, ${G}, ${B}, ${opacity})`;
};
const Display = ({texto, color, hovercolor, percentage}) => {
  const backgroundColor = adjustOpacity(color, percentage);

  return(
    <div className='contenedor-raise'>
      <div
        className='raise'
        style={{
          '--color': color,
          '--hover': hovercolor,
          '--background-color': adjustOpacity(color, percentage),
          '--percentage': `${percentage}%`
        }}
      >{texto}
      </div>
      <div className='percentage' style={{color: color}}>{percentage}%</div>
    </div>
    
  );
}

Display.propTypes = {
  texto: PropTypes.string
}


export default Display