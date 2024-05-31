
import './TypingEffect.css';
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

const TextAnimate = ({steps}) => {
  
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const current =steps[textIndex];
      let updatedText = isDeleting ? current.slice(0, charIndex - 1) : current.slice(0, charIndex + 1);
      setCurrentText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % steps.length);
        setCharIndex(0);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, steps]);

  return (
    <div className="code-container">
      <p className="code-text">{currentText}</p>
    </div>
  );
}

TextAnimate.propTypes = {
  steps: PropTypes.array
}


export default TextAnimate