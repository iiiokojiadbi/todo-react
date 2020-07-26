import React, { Component } from 'react';

export default class TodoListItem extends Component {
  handleLabelClick = () => {
    console.log(`Done: ${this.props.label}`);
  };

  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 900 : null,
    };

    return (
      <span
        className="list__label"
        style={style}
        onClick={this.handleLabelClick}
      >
        {label}
      </span>
    );
  }
}
