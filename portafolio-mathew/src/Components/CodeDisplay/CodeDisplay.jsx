import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import './CodeDisplay.css';

const CodeDisplay = ({ additionalText, textocopy }) => {
  const code = textocopy;
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000); // Cambia a false después de 2 segundos
        console.log("Copiado");
      })
      .catch((err) => console.error('Error al copiar código: ', err));
  };

  return (
    <div className='contenido-code'>
      <p className='text-cod'>{additionalText}</p>
      <pre className='text-code'>{code}</pre>
      <br />
      <button onClick={handleCopy} className='btn-copy'>
        <FontAwesomeIcon icon={copy ? faCheck : faCopy} />
      </button>
    </div>
  );
};

export default CodeDisplay;
