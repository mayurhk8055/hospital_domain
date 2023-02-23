import React, { Component } from 'react'

 class EventBind extends Component {

    constructor() {
      super()
            //  binding event handler with construtor
            this.changeMsg = this.changeMsg.bind(this)
      this.state = {
         name:"Welcome"
      }
    }
    changeMsg(){
        this.setState({
            name : " Ms Dhoni"
        })
    }
    
  render() {
    return (
      <div>
                {this.state.name}
         {/* <h2>bind method : {this.state.name} </h2> */}
         {/* <button onClick={this.changeMsg.bind(this)}>change msg bind </button> */}

         {/* <h3>arrow function method : {this.state.name} </h3> */}
         {/* <button onClick={()=>this.changeMsg()}>change msg with arrow function</button> */}

            <button onClick={this.changeMsg}>change with construtor</button>

      </div>
    )
  }
}

export default EventBind
