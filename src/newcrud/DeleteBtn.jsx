
import axios from 'axios'
import React, { Component } from 'react'

 class DeleteBtn extends Component {
    deletepost = async(id)=>{
        const res = await axios.delete('https://jsonplaceholder.typicode.com/posts/'+id, {

       
    });
    console.log(res);
        if(res.status === 200){
            alert("post data deleted successfully..")
        }
    }
  render() {
    return (
      <div>
        <button className='dlpost' onClick={this.deletepost}>Delete</button>
      </div>
    )
  }
}

export default DeleteBtn
