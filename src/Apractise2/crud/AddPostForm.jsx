import axios from 'axios'
import React, { Component } from 'react'

export class AddPostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId:'',
       title:'',
       body:''
    }
  }

  onSubmitData=(event)=>{
   const r = axios ('https://jsonplaceholder.typicode.com/posts', {
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
alert("post data successfully..")
this.props.changeFlag(true)
  event.preventDefault()  
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitData}>
          <div>ADD NEW POST</div>
          <div>
            UserId: <input type="text" value={this.state.userId} onChange={(e)=>this.setState({userId:e.target.value})} />
            title: <input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.title})} />
            body : <input type="text" value={this.state.body} onChange={(e)=>this.setState({body:e.target.value})} />
          </div>
          <div>
            <button type='submit'>Save Post</button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default AddPostForm
