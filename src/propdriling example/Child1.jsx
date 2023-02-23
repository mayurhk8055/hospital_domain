import React, { Component } from 'react'
import Child2 from './Child2'

 class Child1 extends Component {
  render() {
    return (
      <div>
        <h4> this is child 1 comp : {this.props.msg}</h4>
        <Child2 msg={this.props.msg} />
      </div>
    )
  }
}

export default Child1
