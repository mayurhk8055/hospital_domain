import axios from 'axios'
import React, { Component } from 'react'
import DeleteData from './DeleteData'
import UpdateData from './UpdateData'

export class DataFetchPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: [],
      updatePostData:{}
    }
  }
  async componentDidMount() {

    const m = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(m);
    this.setState({
      post: m.data
    })
  }
  handleUpdate=(e)=>{
    // alert(`userId:${e.userId} title:${e.title} body:${e.body}`)
    this.setState({
      
      updatePostData:e
    })
  }

  render() {
    return (
      <div>
        <UpdateData c={this.state.updatePostData}/>
        <table>
          <thead>
            <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
            </tr>
          </thead>
          <tbody>
          {this.state.post.map((e,i)=>{
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.userId}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
                <td><DeleteData /></td>
                <td><button onClick={()=>this.handleUpdate(e)}>Update</button></td>
              </tr>
            )
          })}

          </tbody>
        </table>
      </div>
    )
  }
}

export default DataFetchPost
