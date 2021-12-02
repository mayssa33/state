import './App.css';
import React, { Component } from 'react'
import Data from './Data';

export default class App extends Component {
  state={
    todolist:[
      {id:Math.random(),action:"read state",isDone:false},
      {id:Math.random(),action:"read hooks",isDone:false},
      {id:Math.random(),action:"read router",isDone:false},
    ],
    text:''
  }

handleChange = (e) => this.setState({text:e.target.value})

add = (newTask) => this.setState({todolist:[...this.state.todolist,newTask]})

complete = (x) => this.setState({todolist:this.state.todolist.map(el=>el.id===x?{...el,isDone:!el.isDone}:el)})
handleDelete =(i)=>this.setState({todolist:this.state.todolist.filter((el)=>el.id !==i)})
handleSubmit = (e) => {
  e.preventDefault();
  const newTask = {
    id:Math.random(),
    action:this.state.text,
    isDone:false
  }
  this.add(newTask)
  this.setState({text:''})
}




  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h1>Our app</h1>
          <input type="text" placeholder="type something...."  value={this.state.text}  onChange={this.handleChange} />
          {/* <button>Add</button> */}
        </form>
      <Data todo={this.state.todolist}  complete={this.complete} handleDelete={this.handleDelete} />
      </div>
      
    )
  }
}


