import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import './../blocks/panel/panel.css';

export default class AddPanel extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
  };

  render() {
    const { inputText, changeInput, onAdd } = this.props;

    return (
      <form className="panel" onSubmit={this.handleSubmit}>
        <Input
          inputText={inputText}
          searchText="What need to be done"
          changeInput={changeInput}
        />
        <Button submit type="warning" text="Add todo" handleClick={onAdd} />
      </form>
    );
  }
}
