import React, { Component } from "react";
import Todo from "./Todo";
import Filters from "./Filters";
class TodoList extends Component {
  render() {
    const { todos, actions, filter } = this.props;
    return (
      <div>
        <h3>TODOs ({visibleTodos.length})</h3>
        <Filters
          filters={filters}
          toggleHideCompleted={actions.toggleHideCompleted}
        />
        {visibleTodos.map(todo => (
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
