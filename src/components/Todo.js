import React, { Component } from "react";

class Todo extends Component {
  render() {
    const classes = ["todo"];
    const { id, isCompleted, text } = this.props.todo;
    if (isCompleted) {
      classes.push("completed");
    }
    const onToggle = () => {
      this.props.toggleTodoCompletion(id);
    };
    return (
      <div className={classes.join(" ")}>
        <label>
          <input type="checkbox" checked={isCompleted} onChange={onToggle} />
          {text}
        </label>
      </div>
    );
  }
}

export default Todo;
