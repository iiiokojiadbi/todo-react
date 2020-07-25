import React from 'react';
import SearchInput from './SearchInput';
import Button from './Button';
import './../blocks/search-panel/search-panel.css';

const SearchPanel = () => {
  
  return (
    <div className='search-panel'>
      <SearchInput />
      <div className='btn-group' role='group'>
        <Button text={ 'All' } />
        <Button text={ 'Active' } />
        <Button text={ 'Done' } />
      </div>
    </div>
  )
}

export default SearchPanel;