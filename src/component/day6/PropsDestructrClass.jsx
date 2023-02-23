import React, { Component } from 'react'

 class PropsDestructrClass extends Component {
  render() {
    const {name, city, company} = this.props

    return (
      <div>
        <h1>props Destructuing in class component</h1>
        <h3>Name : {name}</h3>
        <h3>City ; {city}</h3>
        <h3> Company : {company}</h3>
        
      </div>
    )
  }
}

export default PropsDestructrClass
