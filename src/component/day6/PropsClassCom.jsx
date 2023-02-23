import React, { Component } from 'react'

 class PropsClassCom extends Component {
  render() {
    return (
      <div>
        <h1>Props in class component </h1>
        <h2>{this.props.message}</h2>
        
      </div>
    )
  }
}

export default PropsClassCom
