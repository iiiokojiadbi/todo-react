import React from 'react';
import Button from './Button';

const StatusFilter = () => {
  return (
    <div className='btn-group' role='group'>
      <Button text={ 'All' } />
      <Button text={ 'Active' } />
      <Button text={ 'Done' } />
    </div>
  )
}

export default StatusFilter;