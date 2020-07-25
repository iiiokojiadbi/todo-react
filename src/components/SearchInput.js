import React from 'react';
import './../blocks/search-input/search-input.css';

const SearchInput = () => {
  
  const searchText = 'Type to search';
  
  return (
    <input className='form-control search-input' type='text' placeholder={ searchText } />
  )
}

export default SearchInput;