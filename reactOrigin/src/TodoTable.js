import React, { Component } from 'react';

class TodoTable extends Component {

  constructor(props)
    {
        super(props);
        this.state = {todos: []}
}


render() {
  return (

    <div className ="App" >

<table className="table">

<tbody>

<tr><th >Date</ th><th >Description</ th></tr >
{this.props.todos.map ((item, index) => <tr id="fixed" className="row" key={index }>
   <td className="col-md-1">{ item.date}</td>
    <td className="col-md-1">{ item.description }</td>
    <td className="text-right"><button onClick={this.props.delete} id={index} type="button" className="btn btn-default btn-sm">Remove</button></td></tr> )}

    </tbody>

    </table>

    </div>
  );
}
}



export default TodoTable;
