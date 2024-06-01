import './ButtonInfo.css'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ButtonInfo = ({iconin, titulo, value, color, hovercolor, onclick}) => {
  return (
    <div className='contenido-botoninfo' style={{'--tcolor': color, '--thovcolor': hovercolor}}>
      <button className='icon-button' onClick={onclick}>
        <FontAwesomeIcon icon={iconin} />
      </button>
      <div className='contenido-letras'>
        <p className='titulo'>{titulo}</p>
        <p className='contenido-t'>{value}</p>
      </div>
    </div>
  );
}

ButtonInfo.propTypes = {
  iconin: PropTypes.object,
  titulo: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  hovercolor: PropTypes.string,
  onclick: PropTypes.func
}
export default ButtonInfo