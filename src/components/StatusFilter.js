import React from 'react';
import Button from './Button';

const StatusFilter = () => {
  return (
    <div className="btn-group" role="group">
      <Button text="All" type="outline-dark" isActive="active" />
      <Button text="Active" type="outline-dark" />
      <Button text="Done" type="outline-dark" />
    </div>
  );
};

export default StatusFilter;
