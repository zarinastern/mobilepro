import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});

  }


  addTodo = (event) => {
    event.preventDefault();
    const newTodo ={ date:this.state.date, description:this.state.description };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

removeTodo(item){
  const newItems = this.state.todos.filter(newTodo=> {
    return newTodo !==item
  });

  this.setState ({
    todos: [...newItems]
  })

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <div><label>Description:</label>
            <input type="text" name='description' onChange={this.inputChanged} value={this.state.description}/>
            </div>

            <div className='well'><label>Date:</label>
            <input type="date" name='date' onChange={this.inputChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
            </div>
          </form>

          <hr/>

        </div>

<table className="table">


<tr><th>Date</th><th>Description</th></tr>



{this.state.todos.map((item, index) => <td class='well' id="fixed" class="row" key={index}>
<td class="col-md-1">{item.date}</td><td id="desc" class="col-md-1">{item.description}</td>
<td className="text-right"><button onClick={(e) => this.removeTodo(item)} type="button" className="btn btn-default btn-sm">Remove</button></td></td>)}


              </table>
      </div>
    );
  }
}

export default App;
