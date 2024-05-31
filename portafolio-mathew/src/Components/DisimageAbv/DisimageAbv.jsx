import './DisimageAbv.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DisimageAbv = ({ link, imageUrl, text, color, hovercolor }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`image-with-text-container-abv ${clicked ? 'clicked' : ''}`}
      onClick={handleClick}
      style={{
        '--llcolor': color,
        '--llhovercolor': hovercolor
      }}
    >
      <div className="image-container-abv">
        <img src={imageUrl} alt="Imagen" />
      </div>
      <div className="text-container-low" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ textDecoration: 'none', textAlign: 'center', margin: '0', textDecorationLine: 'none' }}>{text}</p>
      </div>
    </a>
  );
};

DisimageAbv.propTypes = {
  link: PropTypes.string,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  hovercolor: PropTypes.string
};

export default DisimageAbv;
