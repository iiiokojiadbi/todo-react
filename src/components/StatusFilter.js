import React from 'react';
import Button from './Button';

const StatusFilter = () => {
  return (
    <div className='btn-group' role='group'>
      <Button text='All' type='primary' />
      <Button text='Active' type='primary' />
      <Button text='Done' type='primary' />
    </div>
  )
}

export default StatusFilter;