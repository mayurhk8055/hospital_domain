import React, { Component } from 'react'
import ClassChild from './ClassChild'

export class ErrorBond extends Component {
  render() {
    if(true)
    {
        throw new Error("custom error")
    }
    return (
      <div>
        <h1> Error boundries</h1>
        <ErrorBond>
            <ClassChild/>
        </ErrorBond>
        
      </div>
    )
  }
}

export default ErrorBond
