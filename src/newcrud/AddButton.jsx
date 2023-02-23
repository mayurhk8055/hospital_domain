import React, { Component } from 'react'

import './simple.css'
class AddButton extends Component {
  render() {
    return (
      <div className='addbutton'>
        <button onClick={()=>this.props.updatePostFlag(false)}>ADD THE POST</button>
       
      </div>
    )
  }
}

export default AddButton
