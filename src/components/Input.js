import React from 'react';
import './../blocks/input/input.css';

const Input = ({ inputText = '', searchText, changeInput }) => {
  const handleInputChange = (evt) => {
    changeInput(evt.target.value);
  };

  return (
    <input
      className="form-control input"
      type="text"
      placeholder={searchText}
      onChange={handleInputChange}
      value={inputText}
    />
  );
};

export default Input;
