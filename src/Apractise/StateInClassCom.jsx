import React, { Component } from 'react'

export class StateInClassCom extends Component {
    constructor() {
      super()
    
      this.state = {
         msg:"hello world",
         name:"mayur",
         company:"sigma"
      }
    }
    changeState(){
        this.setState({
            msg:"welcome"
        },
        ()=> console.log(this.state.msg)
        
        )
    }
  render() {
    const {msg,name,company} = this.state
    return (
      <div>
        {msg}
        <h2>{name}</h2>
       <h2> {company}</h2>
        <button onClick={()=>this.changeState()}>change msg</button>
      </div>
    )
  }
}

export default StateInClassCom
