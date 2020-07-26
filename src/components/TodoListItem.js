import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const { label, important } = this.props;
    const style = {
      color: important ? 'tomato' : 'black',
    };
    return <span style={style}>{label}</span>;
  }
}
