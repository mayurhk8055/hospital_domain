import axios from 'axios'
import React, { Component } from 'react'

 class DeletePost extends Component {
    deletePost = async (id) => {
        
        const m = await axios.delete('https://jsonplaceholder.typicode.com/post'+id,{
        
        });
        console.log(m);
        
    }

    render() {
        return (
            <div>
                <button onClick={this.deletePost}>Delete</button>
            </div>
        )
    }
}

export default DeletePost
