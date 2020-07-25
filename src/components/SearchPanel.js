import React from 'react';
import SearchInput from './SearchInput';
import StatusFilter from './StatusFilter';
import './../blocks/search-panel/search-panel.css';

const SearchPanel = () => {
  
  return (
    <div className='search-panel'>
      <SearchInput />
      <StatusFilter />
    </div>
  );
};

export default SearchPanel;