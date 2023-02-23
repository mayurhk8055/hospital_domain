import React, { Component } from 'react'
import Child3 from './Child3'

export class Child2 extends Component {
  render() {
    return (
      <div>
         <h3> this is child2 : </h3>
         <Child3 msg={this.props.msg} />
      </div>
    )
  }
}

export default Child2
 