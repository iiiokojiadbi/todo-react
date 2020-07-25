import React from "react";
import './../blocks/button/button.css';

const Button = ({ type = "outline-success", icon = '', text = null }) => {
  return (
    <button type="button" className={ `btn btn-${ type } button` }>
      { text ? text : <i className={ `fa fa-${ icon }` } aria-hidden="true" /> }
    </button>
  )
}

export default Button;