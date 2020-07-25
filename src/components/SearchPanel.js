import React from 'react';
import SearchInput from './SearchInput'
import Button from './Button';

const SearchPanel = () => {
  
  return (
    <React.Fragment>
      <SearchInput />
      <div className="btn-group" role="group">
        <Button text={ 'All' } />
        <Button text={ 'Active' } />
        <Button text={ 'Done' } />
      </div>
    </React.Fragment>
  )
}

export default SearchPanel;