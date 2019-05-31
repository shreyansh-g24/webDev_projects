// APP.JS //
// Importing modules //
import React from "react";
// import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import "./App.css";

/*
  Controlled Component: 
    this.state.inputvalue = "";
    on input field add event onChange to set this.state.inputvalue equal to event.target.value to keep it updated
    on submit: push that value in todo and reset this.state.inputvalue
    also on input field:  value=this.state.inputvalue so that it would reset too upon submit

  UnControlled Component:
    this.inputvalue = React.createRef(); creating a reference
    also on input field: ref=this.inputvalue passing the input field as a referred objec
    on submit: push the value in this.inputvalue.current.value in todo and reset it to empty string.
*/

// Declaring functions //
class Init extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title is-1 padding">Controlled</h1>
        <AppControlled />
        <hr />
        <h1 className="title is-1 padding">UnControlled</h1>
        <AppUnControlled />
      </div>
    );
  }
}

class AppControlled extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todoInputTitle: "",
      todoInputText: ""
    }
  }

  handleAddTodo = () => {
    if (this.state.todoInputText !== "" && this.state.todoInputTitle !== "") {
      this.setState({
        todos: this.state.todos.concat({
          todoTitle: this.state.todoInputTitle,
          todoText: this.state.todoInputText,
        })
      });
      this.setState({ todoInputTitle: "" });
      this.setState({ todoInputText: "" });
    }
    else alert("Input fields cannot be empty!");
  }

  handleTextChange = (event) => {
    this.setState({ todoInputText: event.target.value });
  }

  handleTitleChange = (event) => {
    this.setState({ todoInputTitle: event.target.value });
  }

  handleDeleteTodo = (event) => {
    let count = 0;
    let temp_todos = this.state.todos.filter((todo) => {
      // Checking if the todo isn't equal to the targetted todo
      let matchBool = (todo.todoTitle !== event.target.dataset.title) || ((todo.todoText !== event.target.dataset.text));
      // if(todo equal to target todo, and count not equal to 1, meaning no todo has been skipped yet, then skip it)
      if (!matchBool && count !== 1) {
        count = 1;
        return (false);
      }
      // returning true by default (todo not equal to the targetted todo)
      return matchBool || Boolean(count);
    });
    this.setState({ todos: temp_todos });
  }

  render() {
    let todos = this.state.todos || [];
    return (
      <div className="container">
        <div className="box">

          <div className="field">
            <div className="control">
              <input onChange={(event) => this.handleTitleChange(event)} className="input is-focused" type="text" placeholder="Todo Title" value={this.state.todoInputTitle} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea onChange={(event) => this.handleTextChange(event)} className="textarea is-focused has-fixed-size" value={this.state.todoInputText} placeholder="Todo Text"></textarea>
            </div>
          </div>

          <button onClick={() => this.handleAddTodo()} className="button is-success">Add Todo</button>

        </div>


        <div className="box">
          <h1 className="title is-3 todoHeading">Todos</h1>

          <ul className="todoContainer">
            {
              todos.map((todo, ind) => {
                return (
                  <li className="todo">
                    <h2 className="title is-4">{todo.todoTitle}</h2>
                    <p className="subtitle">{todo.todoText}</p>
                    <button data-title={todo.todoTitle} data-text={todo.todoText} onClick={(event) => this.handleDeleteTodo(event)} className="button is-danger">Delete</button>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>
    );
  }
}

class AppUnControlled extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
    this.todoInputTitle = React.createRef();
    this.todoInputText = React.createRef();
  }

  handleAddTodo = () => {
    if (this.todoInputText.current.value !== "" && this.todoInputTitle.current.value !== "") {
      this.setState({
        todos: this.state.todos.concat({
          todoTitle: this.todoInputTitle.current.value,
          todoText: this.todoInputText.current.value,
        })
      });
      this.todoInputTitle.current.value = "";
      this.todoInputText.current.value = "";
    }
    else alert("Input fields cannot be empty!");
  }

  handleDeleteTodo = (event) => {
    let count = 0;
    let temp_todos = this.state.todos.filter((todo) => {
      // Checking if the todo isn't equal to the targetted todo
      let matchBool = (todo.todoTitle !== event.target.dataset.title) || ((todo.todoText !== event.target.dataset.text));
      // if(todo equal to target todo, and count not equal to 1, meaning no todo has been skipped yet, then skip it)
      if (!matchBool && count !== 1) {
        count = 1;
        return (false);
      }
      // returning true by default (todo not equal to the targetted todo)
      return matchBool || Boolean(count);
    });
    this.setState({ todos: temp_todos });
  }

  render() {
    let todos = this.state.todos || [];
    return (
      <div className="container">
        <div className="box">

          <div className="field">
            <div className="control">
              <input ref={this.todoInputTitle} className="input is-focused" type="text" placeholder="Todo Title" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea ref={this.todoInputText} className="textarea is-focused has-fixed-size" placeholder="Todo Text"></textarea>
            </div>
          </div>

          <button onClick={() => this.handleAddTodo()} className="button is-success">Add Todo</button>

        </div>


        <div className="box">
          <h1 className="title is-3 todoHeading">Todos</h1>

          <ul className="todoContainer">
            {
              todos.map((todo, ind) => {
                return (
                  <li className="todo">
                    <h2 className="title is-4">{todo.todoTitle}</h2>
                    <p className="subtitle">{todo.todoText}</p>
                    <button data-title={todo.todoTitle} data-text={todo.todoText} onClick={(event) => this.handleDeleteTodo(event)} className="button is-danger">Delete</button>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </div>
    );
  }
}

// Execution //
export default Init;
