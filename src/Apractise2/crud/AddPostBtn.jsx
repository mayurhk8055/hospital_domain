import React, { Component } from 'react'

export class AddPostBtn extends Component {
  render() {
    return (
      <div className='btn'>
        <button onClick={()=>this.props.changeFlag(false)}>add post button </button>
      </div>
    )
  }
}

export default AddPostBtn
