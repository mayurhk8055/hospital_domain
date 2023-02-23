import React, { Component } from 'react'

export class AddPButton extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.updateFlag(false)}>ADD NEW POST</button>
      </div>
    )
  }
}

export default AddPButton
