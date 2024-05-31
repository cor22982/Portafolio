import './Displayimage.css'
import PropTypes from 'prop-types'
const Displayimage = ({imageUrl, text, color, hovercolor}) => {
  return (
    <div 
      className="image-with-text-container" 
      style={{
        '--lcolor': color,
        '--lhovercolor': hovercolor
      }}>
      <div className="image-container">
        <img src={imageUrl} alt="Imagen" />
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}
Displayimage.propTypes = {
  imageUrl: PropTypes.string,
  text: PropTypes.string
}

export default Displayimage