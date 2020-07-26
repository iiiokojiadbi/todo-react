import React from 'react';
import Input from './Input';
import StatusFilter from './StatusFilter';
import './../blocks/panel/panel.css';

const SearchPanel = () => {
  return (
    <div className="panel">
      <Input searchText="Type to search" />
      <StatusFilter />
    </div>
  );
};

export default SearchPanel;
