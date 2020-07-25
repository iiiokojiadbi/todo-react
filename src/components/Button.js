import React from 'react';
import './../blocks/button/button.css';

const Button = ({ type = 'outline-success', icon = '', text = null }) => {
  return (
    <button type="button" role="button" className={ `btn btn-${ type } button` } data-toggle="button"
            aria-pressed="false">
      { text ? text : <i className={ `fa fa-${ icon }` } aria-hidden="true" /> }
    </button>
  );
};

export default Button;