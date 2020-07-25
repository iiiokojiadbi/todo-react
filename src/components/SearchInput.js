import React from 'react';

const SearchInput = () => {
  
  const searchText = 'Type to search';
  
  return (
    <input className='form-control' type='text' placeholder={ searchText } />
  )
}

export default SearchInput;