import React, { Component } from 'react'
import Child1 from './Child1'

 class PropDriling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"welcome react js"
      }
    }
    
  render() {
    return (
      <div>
        <h2> this is parent comp : {this.state.msg}</h2>
        <Child1 msg={this.state.msg}/>
      </div>
    )
  }
}

export default PropDriling
