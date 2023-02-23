import axios from 'axios'
import React, { Component } from 'react'

export class AddpData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    onSubmitData=(event)=>{
      const test = axios  ('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    userId: this.state.userId,
    title: this.state.title,
    body: this.state.body
   
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
alert("data post successfully")
    event.PrevenDefult()
    }
    
  render() {
    return (
      <div>
        <div>
            <h3>add post form</h3>
        </div>
        <>
        <form onSubmit={this.onSubmitData}>
            Userid: <input type="text" value={this.state.userId}  onChange={(e)=>this.setState({userId:e.target.value})}/>
            title: <input type="text"  value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})}/>
            body : <input type="text" value={this.state.body} onChange={(e)=>this.setState({body:e.target.value})} />

            <div>
                <button type='Submit'>Save Post</button>
            </div>
        </form>
        </>
      </div>
    )
  }
}

export default AddpData
