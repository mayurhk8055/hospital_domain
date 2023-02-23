import React, { Component } from 'react'

export class CondtionRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user:10
      }
    }
    
  render() {
    // if(this.state.user > 20)
    // {
    //     return(
    //         <div>
    //             <h1> welcome ganesh</h1>
    //         </div>
    //     )
    // }else{
    //     return <div> <h1> sorry wrong state</h1></div>
    // }


    // let msg;
    // if(this.state.user > 5)
    // {
    //     msg = <div> <h1> this is a grater value</h1></div>
    // }else{
    //     msg = <div> <h1> this is a smaller value</h1></div>
    // }
    // return msg
// {
//     return this.state.user > 6 ? " this is greter than ": "this is lees than ";
// }
    
// {
//     return this.state.user >5 && <div> <h1> welcome bhairav</h1></div>
// }
    return (
      <div>
        
      </div>
    )
  }
}

export default CondtionRender
