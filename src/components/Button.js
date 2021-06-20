import React from 'react';
import '../styles/clearbutton.css';

const Button = ({
  active,
  hover,
  onHover,
  classname,
  src,
  alt,
  onClick,
  ...props
}) => {
  return active ? (
    <div
      role={props.role ? props.role : ''}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick ? onClick : null}
      className={`${classname} ${hover ? 'hover' : ''}`}
    >
      <img src={`${window.location.origin}/${src}`} alt={alt}></img>
    </div>
  ) : null;
};

export default Button;
