import React, { Component } from "react";
import Todo from "./todo";
import NewForm from "./NewToDoForm";
import "./TodoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.Create = this.Create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  Create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  update(id, updateTask) {
    const updateTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    this.setState({ todos: updateTodo });
  }
  toggleCompletion(id) {
    const updateTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updateTodo });
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List!<span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <NewForm createTodo={this.Create} />
      </div>
    );
  }
}

export default ToDoList;
