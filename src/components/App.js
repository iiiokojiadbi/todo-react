import React from 'react';
import SearchPanel from './SearchPanel';
import AppHeader from './AppHeader';
import TodoList from './TodoList';
import './../blocks/app/app.css';

const App = () => {
  
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ]
  
  return (
    <div className='app'>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData } />
    </div>
  )
}

export default App;