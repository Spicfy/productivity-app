import React from 'react';
import './BeautifulButton.css';

const BeautifulButton = ({ 
  onClick, 
  text, 
  type = 'default', 
  icon = null, 
  disabled = false,
  outline = false
}) => {
  const buttonClass = `beautiful-button ${type !== 'default' ? type : ''} ${outline ? 'outline' : ''}`;
  
  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </button>
  );
};

export default BeautifulButton;