import React, { Component } from "react";
import TodoList from "./components/TodoList";
import AddToDo from "./components/AddToDo";
import "./App.css";

const STARTER_STATE = {
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
    }
  ],
  showAll: true
};
// import { updatedCopy, replaceElement } from "./immutable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = STARTER_STATE
  }
  render() {
    const actions = {
      updateTodoCompleted: (todoId, isCompleted) => {
        // for immutability. make a copy then modify
        const todosCopy = [].concat(this.state.todos);
        const toModify = todosCopy.find(todo => todo.id === todoId);
        toModify.isCompleted = isCompleted;
        this.setState({ todos: todosCopy });
      },
      filterCompleted: () => {
        this.setState({ showAll: !this.state.showAll });
      },
      addTodo: todo => {
        const todosCopy = [].concat(this.state.todos);
        this.setState({todos: todosCopy.push(todo)})
      }
    };

    console.log(this.state.todos);
    

    return (
      <>
          <label>
              <input type="checkbox" onChange={ () => actions.filterCompleted()} />
              Filter Completed Items
          </label>
          <AddToDo onAdd={todo => actions.addTodo(todo)}/>
          <TodoList todos={this.state.todos} actions={actions} filter={this.state.showAll}/>
      </>
    )
    //   toggleTodoCompletion: todoId => {
    //     // Keep it all immutable ftw (not required for React to work)
    //     // (my Twitter handle is @immutabill for a reason)
    //     const { todos } = this.state;
    //     const idx = todos.findIndex(todo => todo.id === todoId);
    //     const todo = todos[idx];
    //     const updatedTodo = updatedCopy(todo, "isCompleted", !todo.isCompleted);
    //     const updatedTodos = replaceElement(todos, idx, updatedTodo);
    //     // Calling .setState **is required** for React to know it needs to update
    //     this.setState({ todos: updatedTodos });
    //   },
    //   toggleHideCompleted: () => {
    //     this.setState({
    //       filters: { completedHidden: !this.state.filters.completedHidden }
    //     });
    //   }
    // };
    // return (
    //   <TodoList
    //     filters={this.state.filters}
    //     todos={this.state.todos}
    //     actions={actions}
    //   />
    // );
  }
}

export default App;
