import React, { Component } from 'react';
import classnames from 'classnames';

export default class TodoListLabel extends Component {
  state = {
    done: false,
  };

  handleLabelClick = () => {
    this.setState({
      done: !this.state.done,
    });
  };

  render() {
    const { label, important = false } = this.props;
    const { done } = this.state;
    const classes = classnames({
      list__label: true,
      list__label_done: done,
    });

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 900 : null,
    };

    return (
      <span className={classes} style={style} onClick={this.handleLabelClick}>
        {label}
      </span>
    );
  }
}
