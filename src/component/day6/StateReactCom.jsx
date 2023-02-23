import React, { Component } from 'react'

 class StateReactCom extends Component {
    constructor() {
      super()
    //   with variable
        this.user ='Guest'
        // with state
    
      this.state = {
         user:"Guest"
      }
    }

    changeUserName(){
        console.log("button clicked");
        this.user = 'admin'
        console.log(this.user);
    }
    changeUserNamewithState(){
        this.setState({
            user:'admin'
        })
        console.log("button from state cliked");
    }

    
  render() {
        console.log("component render");
    return (
      <div>
        <h4>user from variable: {this.user}</h4>
        <button onClick={this.changeUserName.bind(this)}>Change user</button>
        <br />

        <h4>user from state: {this.state.user}</h4>
        <button onClick={this.changeUserNamewithState.bind(this)}>change user with state</button>


      </div>
    )
  }
}

export default StateReactCom
