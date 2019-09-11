import React, { Component } from "react";
import "./NewTodoForm.css";
import uuid from "uuid/v4";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({
      task: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} className="TodoForm">
        <label htmlFor="task">NEW TODO</label>
        <input
          id="task"
          type="text"
          placeholder="Add new todo"
          name="task"
          value={this.state.task}
          onChange={this.onChange}
        />
        <button>Add to Do</button>
      </form>
    );
  }
}

export default NewForm;
