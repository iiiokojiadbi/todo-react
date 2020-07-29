import React from 'react';
import './../blocks/button/button.css';

const Button = ({
  submit = false,
  type = 'outline-success',
  icon = '',
  text = null,
  isActive = false,
  handleClick,
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn btn-${type} button ${isActive && 'active'}`}
      onClick={handleClick}
    >
      {text ? text : <i className={`fa fa-${icon}`} aria-hidden="true" />}
    </button>
  );
};

export default Button;
