import React from 'react';
import Input from './Input';
import Button from './Button';
import './../blocks/panel/panel.css';

const AddPanel = () => {
  return (
    <div className="panel">
      <Input searchText="Type to add todo" />
      <Button type="warning" text="Add todo" />
    </div>
  );
};

export default AddPanel;
