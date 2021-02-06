import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './materialize.min.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy milk'},
      {id: 2, content: 'Wash clothes'}
    ]
  }

  deleteTodo = (id) =>{
    console.log(id)
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    });

    this.setState({
      todos
    })

  }

  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    
    this.setState({
      todos
    })
    console.log(this.state.todos)
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}


export default App;
