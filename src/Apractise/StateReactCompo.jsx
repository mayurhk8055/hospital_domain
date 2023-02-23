import React, { Component } from 'react'

export class StateReactCompo extends Component {
    constructor() {
      super()
         this.user='welcome'
         
      this.state = {
         msg:"mayur"
      }
    }
    changeUserName(){
        console.log("button Cliked");
        this.user ='admin'
        console.log(this.user);
    }
    
    ChangeVariable(){
        console.log("btn click from variable");
        this.user='javascript'
        console.log(this.user);
    }

    ChangeStateName(){

        this.setState({
            msg:"Rahul"

        })

        console.log("btn Click from state");
    }


  render() {
    console.log("component render");
    return (
      <div>
        <h2>using variable change state: {this.user} </h2>
        <button onClick={this.ChangeVariable.bind(this)}>change variable</button><br />
            <h3>using state {this.state.msg} </h3>
        <button onClick={this.ChangeStateName.bind(this)}>Change state name</button>
      </div>
    )
  }
}

export default StateReactCompo
