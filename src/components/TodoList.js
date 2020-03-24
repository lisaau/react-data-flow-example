import React, { Component } from "react";
import Todo from "./Todo";
import Filters from "./Filters";
class TodoList extends Component {
  render() {
    const { todos, actions, filters } = this.props;
    let visibleTodos = todos;
    if (filters.completedHidden) {
      visibleTodos = visibleTodos.filter(todo => !todo.isCompleted);
    }
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
            toggleTodoCompletion={actions.toggleTodoCompletion}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
