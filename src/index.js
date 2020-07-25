import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/AppHeader';
import AppHeader from "./components/AppHeader";
import TodoList from "./components/TodoList";

const App = () => {
  
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
