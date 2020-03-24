import React, { Component } from "react";
import Todo from "./Todo";
import Filters from "./Filters";
class TodoList extends Component {
  render() {
    const { todos, actions, filters } = this.props;
    return (
      <div>
        <h3>TODOs ({todos.length})</h3>
        <Filters hideCompleted={filters.hideCompleted} />
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodoCompletion={actions.toggleTodoCompletion}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
