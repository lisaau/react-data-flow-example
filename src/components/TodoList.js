import React, { Component } from "react";
import Todo from "./Todo";
class TodoList extends Component {
  render() {
    const { todos, actions, filter } = this.props;
    return (
      <div>
        <h3>TODOs ({todos.length})</h3>
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodoCompleted={actions.updateTodoCompleted}
            filter={filter}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
