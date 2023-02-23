// import React, { Component } from 'react'

// export class Event extends Component {
//     constructor(props) {
//       super(props)
//      this.ChangeMsg = this.ChangeMsg.bind(this)
//       this.state = {
//          msg:"mayur"
//       }
//     }
//     ChangeMsg(){
//         this.setState({
//             msg:" Rahul"
//         })
//     }
    
//   render() {
//     return (
//       <div>
//             {this.state.msg}
//          {/* <button onClick={this.ChangeMsg.bind(this)}>change msg</button> */}

//          <button onClick={()=>this.ChangeMsg()}>change msg</button>
//          {/* <button onClick={this.ChangeMsg}>change msg</button> */}
//       </div>
//     )
//   }
// }

// export default Event


import React, { Component } from 'react'

export class Event extends Component {
  render() {
    return ( 
      <React.Fragment>
        <h1> welcome react js</h1>
      </React.Fragment>
    

      
    )
  }
}

export default Event

