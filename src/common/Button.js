import React from 'react';
import './Button.style.css'

const Button = ({ onClick, children, className = '', ...props }) => {
  return (
    <button onClick={onClick} className={`common-btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
