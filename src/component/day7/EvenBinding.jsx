import React, { Component } from 'react'

class EvenBinding extends Component {
    
    constructor() {
      super()
    
      this.state = {
         msg:'welcome'
      }
    }
    changemsg(){
        this.setState({
            msg:'hello rahul'
        })
        console.log(this);
    }
    changerender(){
        this.setState({
            msg: 'hello mayur'
        })
    }
    
    render() {
    return (
      <div>
        <h1> Event Binding</h1>
        {this.state.msg}
        {/* Binding event handler in render method */}
        <button onClick={this.changerender.bind(this)}>change with render</button>
        <br />
        {/* Binding event handler using arrow function */}
        <button onClick={()=>this.changemsg()}> click me </button>
      </div>
    )
  }
}

export default EvenBinding
