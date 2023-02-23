import axios from 'axios';
import React, { Component } from 'react'

export class DeletePost2 extends Component {
    deleteData= async(id)=>{
       const r = await axios.delete ('https://jsonplaceholder.typicode.com/posts/'+id, )
       if(r.status===200)
       {
        alert("data is successfully deleted")
       }
       console.log(r);
    }
  render() {
    return (
      <div>
        <button onClick={this.deleteData}>Delete</button>
      </div>
    )
  }
}

export default DeletePost2
