import React, { Component } from 'react'

 class ReactStateClassCom extends Component {
    constructor() {
      super()
    
      this.state = {
          msg:'welcome',
          name:"ramesh",
          city:"pune"
      }
    }

    changeMesg(){
        this.setState(
            {
                msg:" farewell",
            },
            ()=>console.log(this.state.msg)
        )
    }
    
  render() {
    const {msg,name,city}=this.state
    return (
      <div>
        <h1>React state</h1>
        {msg}
        <h2>Name: {name}</h2>
        <h2>City :{city}</h2>
      </div>
    )
  }
}

export default ReactStateClassCom
