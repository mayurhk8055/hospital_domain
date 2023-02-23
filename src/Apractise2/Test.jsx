import React, { Component } from 'react'

export class Test extends Component {
    constructor() {
      super()
    
     console.log("construtor");
    }
    
    componentDidMount()
    {
        console.log("mount");
    }
    render() {
        console.log("render");
    return (
      <div>
        
      </div>
    )
  }
}

export default Test
