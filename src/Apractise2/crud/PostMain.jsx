import React, { Component } from 'react'
import AddPostBtn from './AddPostBtn'
import AddPostForm from './AddPostForm'
import PostList from './PostList'

export class PostMain extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       PostFlag:true
    }
  }
  updateFlag=(flagvalue)=>{
    this.setState({
      PostFlag:flagvalue
    })
  }
  
  render() {
    return (
      <div>
        {this.state.PostFlag && <AddPostBtn changeFlag={this.updateFlag}/>}
        {/* <PostList/> */}
        {this.state.PostFlag ? <PostList/> : <AddPostForm changeFlag={this.changeFlag}/>}
      </div>
    )
  }
}

export default PostMain
