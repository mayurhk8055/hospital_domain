import React, { Component } from 'react'

export class ClassChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:null
      }
    }
    static getDerivedStateFromError()
    {
        return{error:true}
    }
    
  render() {
    return (
      <div>
        <h1> class child component</h1>
        <h2>{this.state.error}</h2>
        {
            this.state.error ? <h1> custom page error</h1>: <h1>this.props.children</h1>
        }
        
      </div>
    )
  }
}

export default ClassChild
