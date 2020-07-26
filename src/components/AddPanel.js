import React from 'react';
import Input from './Input';
import Button from './Button';
import './../blocks/panel/panel.css';

const AddPanel = ({ inputText, changeInput, onAdd }) => {
  return (
    <div className="panel">
      <Input
        inputText={inputText}
        searchText="Type to add todo"
        changeInput={changeInput}
      />
      <Button type="warning" text="Add todo" handleClick={onAdd} />
    </div>
  );
};

export default AddPanel;
