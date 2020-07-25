import React from 'react';
import './../blocks/app-header/app-header.css';

const AppHeader = () => {
  return (
    <div className='app-header'>
      <h1 className='app-header__title'>My Todo list</h1>
      <span className='app-header__info'>1 more to do, 3 done</span>
    </div>
  )
}

export default AppHeader;