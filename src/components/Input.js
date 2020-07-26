import React from 'react';
import './../blocks/input/input.css';

const Input = ({ searchText }) => {
  return (
    <input
      className="form-control input"
      type="text"
      placeholder={searchText}
    />
  );
};

export default Input;
