import React, { Component } from 'react'

import Input from "./Input";
import Container from "./Container";
import './App.css'


export default class App extends Component {

  state = {
    todo : ["do exercise","study react"],
    currentState : ""
  }

  handleCurrentState = (value) => {
    this.setState({currentState : value})
  }

  moveTodo = () => {
    let tempArray = [...this.state.todo]
    tempArray.push(this.state.currentState)
    this.setState({todo : tempArray})
    this.setState({currentState : ""})

    // this.setState({todo : this.state.todo.push(this.state.currentState)}) ye baat galata hao
  }  

  handleDelete = (value) => {
    let tempArray = [...this.state.todo]
    let index = tempArray.indexOf(value)
    tempArray.splice(index,1)
    this.setState({todo : tempArray})
  }

  render() {
    return (
      <div>
        <Input handleCurrentState={this.handleCurrentState} moveTodo={this.moveTodo} currentState={this.state.currentState}/>
        <Container todo={this.state.todo} handleDelete = {this.handleDelete}/>
      </div>
    )
  }
}
