import axios from 'axios'
import React, { Component } from 'react'
import DeleteBtn from './DeleteBtn'
import UpdateBtn from './UpdateBtn'

class DataFetch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      updatePostD: {},
      updatePostFlag: false

    }
  }

  // fetch data using axios
  async componentDidMount() {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(result);
    if (result.data.length > 0) {
      this.setState({
        posts: result.data

      })
    }
  }
  handleUpdate = (post) => {
    // alert(`userId:${post.userId} title:${post.title} body:${post.body}`)
    this.setState({
      updatePostD: post,
      updatePostFlag: true
    })
    // console.log(post.userId);
  }
  updatePostFlag = (updatePostFlagvalue) => {
    this.setState({
      updatePostFlag: updatePostFlagvalue
    })

  }

  render() {
    return (
      <div className='datafechtable'>
        {/* <h6>this is list of data</h6> */}
        {/*  <h5>{JSON.stringify(this.state.posts)}</h5> */}
        {this.state.updatePostFlag ? <UpdateBtn updatePostD={this.state.updatePostD} updatePostFlag={this.updatePostFlag} /> :
          <table>
            <thead>
              <tr>
                <th>USER ID</th>
                <th> TITLE</th>
                <th>BODY</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.posts.map((post, index) => {
                  return (
                    <tr key={index}>
                      <td>{post.userId}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                      <td>{<DeleteBtn id={post.id} />}</td>
                      <td><button className='uppost' onClick={() => this.handleUpdate(post)}>update</button></td>
                    </tr>
                  )
                })

              }
            </tbody>
          </table>
        }
      </div>
    )
  }
}

export default DataFetch

