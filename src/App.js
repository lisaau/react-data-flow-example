import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import { updatedCopy, replaceElement } from "./immutable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        hideCompleted: false
      },
      todos: [
        {
          text: "Download create-react-app",
          created: new Date(),
          isCompleted: true,
          id: 1
        },
        {
          text: "Learn about one-way data flow in React",
          created: new Date(),
          isCompleted: false,
          id: 2
        },
        {
          text: "Learn Zoom breakout rooms",
          created: new Date(),
          isCompleted: false,
          id: 3
        }
      ]
    };
  }
  render() {
    const actions = {
      toggleTodoCompletion: (todoId, isCompleted) => {
        // Keep it all immutable ftw (not required for React to work)
        // (my Twitter handle is @immutabill for a reason)
        const { todos } = this.state;
        const idx = todos.findIndex(todo => todo.id === todoId);
        const todo = todos[idx];
        const updatedTodo = updatedCopy(todo, "isCompleted", !todo.isCompleted);
        const updatedTodos = replaceElement(todos, idx, updatedTodo);
        // Calling .setState **is required** for React to know it needs to update
        this.setState({ todos: updatedTodos });
      }
    };
    return (
      <TodoList
        filters={this.state.filters}
        todos={this.state.todos}
        actions={actions}
      />
    );
  }
}

export default App;
