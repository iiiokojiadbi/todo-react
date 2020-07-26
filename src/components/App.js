import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import AddPanel from './AddPanel';
import AppHeader from './AppHeader';
import TodoList from './TodoList';
import './../blocks/page/page.css';
import './../blocks/app/app.css';

class App extends Component {
  maxId = 1000;

  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ],
    newTodo: '',
  };

  handleDeleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((elem) => elem.id !== id);

      return {
        todoData: newTodoData,
      };
    });
  };

  handleChangeInput = (value) => {
    this.setState({
      newTodo: value,
    });
  };

  handleAddItem = () => {
    const { newTodo } = this.state;
    if (newTodo === '') {
      console.log('Пустое поле!');
      return;
    }
    this.setState(({ todoData }) => {
      const todo = {
        label: newTodo,
        important: false,
        id: this.maxId++,
      };

      return {
        todoData: [...todoData, todo],
        newTodo: '',
      };
    });
  };

  render() {
    const { todoData, newTodo } = this.state;

    return (
      <div className="page">
        <div className="app">
          <AppHeader />
          <SearchPanel />
          <TodoList todos={todoData} onDeleted={this.handleDeleteItem} />
          <AddPanel
            inputText={newTodo}
            changeInput={this.handleChangeInput}
            onAdd={this.handleAddItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
