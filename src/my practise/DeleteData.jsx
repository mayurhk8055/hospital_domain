import axios from 'axios'
import React, { Component } from 'react'

export class DeleteData extends Component {
    deletePost = async(id)=>{
        const d = await axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        if(d.status === 200)
        {
            alert("your data successfully deleted")
        }
    }
  render() {
    return (
      <div>
            <button onClick={this.deletePost}> Delete </button>
      </div>
    )
  }
}

export default DeleteData
