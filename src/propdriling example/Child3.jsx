import React, { Component } from 'react'

export class Child3 extends Component {
  render() {
    return (
      <div>
         <h4> this is child 3 : {this.props.msg}</h4>
         
      </div>
    )
  }
}

export default Child3
