import React from 'react';
import './../blocks/app-header/app-header.css';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <h1 className="app-header__title">Todo List</h1>
      <span className="app-header__info">
        {toDo} more to do, {done} done
      </span>
    </div>
  );
};

export default AppHeader;
