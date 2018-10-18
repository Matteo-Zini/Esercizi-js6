import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      currentTodo: '',
      todos: []
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }

  onChangeText(event) {
    this.setState({ currentTodo: event.target.value});
  }

  onSubmitText(event) {
    event.preventDefault()
    this.setState({
      currentTodo: '',
      todos: [...this.state.todos,this.state.currentTodo]
    });
  }
  render() {
    return (
      <div>
        <h1>ToDoList</h1>
        <form onSubmit={(event) => this.onSubmitText(event)}>
          <input onChange={(event) => this.onChangeText(event)} type="text" id="dato"></input>
          <button>Submit</button>
        </form>
        <ol>
          {
            this.state.todos.map((todos,index) => <li key={index}>{todos}</li>)
          }
        </ol>
      </div>
    );
  }
}

export default App;
