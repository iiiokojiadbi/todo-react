import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import AppHeader from './AppHeader';
import TodoList from './TodoList';
import './../blocks/page/page.css';
import './../blocks/app/app.css';

class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
  };

  handleDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((elem) => elem.id !== id);

      return {
        todoData: newTodoData,
      };
    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="page">
        <div className="app">
          <AppHeader />
          <SearchPanel />
          <TodoList todos={todoData} onDeleted={this.handleDeleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
