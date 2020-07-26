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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    newTodo: '',
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }

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
    const todo = this.createTodoItem(newTodo);
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, todo],
        newTodo: '',
      };
    });
  };

  handleToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const [oldTodo] = todoData.filter((todo) => todo.id === id);
      const newTodo = { ...oldTodo, important: !oldTodo.important };
      const newTodoList = todoData.map((todo) =>
        todo.id === id ? newTodo : todo
      );

      return {
        todoData: newTodoList,
      };
    });
  };

  handleToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const [oldTodo] = todoData.filter((todo) => todo.id === id);
      const newTodo = { ...oldTodo, done: !oldTodo.done };
      const newTodoList = todoData.map((todo) =>
        todo.id === id ? newTodo : todo
      );

      return {
        todoData: newTodoList,
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
          <TodoList
            todos={todoData}
            onDeleted={this.handleDeleteItem}
            onToggleImportant={this.handleToggleImportant}
            onToggleDone={this.handleToggleDone}
          />
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
