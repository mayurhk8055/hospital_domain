import React, { Component } from 'react'

export class StateReactCompo extends Component {
    constructor(props) {
      super(props)

      this.user ='firefox'
    
      this.state = {
         msg1:"welcome"
      }
    }
    changeVariable(){
        this.user='rahul'
        document.writeln(this.user);
    }
    changeState(){
        this.setState({
            msg1:"rushi"
        })
    }
  render() {
    return (
      <div>
        <h2>{this.user}</h2>
        <button onClick={this.changeVariable.bind(this)}>change variable</button>
        <div>
            {this.state.msg1}
            <button onClick={this.changeState.bind(this)}>change state</button>
        </div>
      </div>
    )
  }
}

export default StateReactCompo
