import React, { Component } from 'react'

export class AddNewBtn extends Component {
  render() {
    return (
      <div>
      
        <button onClick={()=>this.props.a(false)}>Add post button </button>
      </div>
    )
  }
}

export default AddNewBtn
