import React, { Component } from 'react'
import AddPButton from './AddPButton'
import AddpData from './AddpData'
import PostList2 from './PostList2'

export class PostMain2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Flag:true
      }
    }
    updateFlag=(flagvalue)=>{
        this.setState({
            Flag:flagvalue
        })
    }
    
  render() {
    return (
      <div>
        
        {/* <AddPButton/> */}
       
        {this.state.Flag && <AddPButton updateFlag={this.updateFlag}/>}
        {/* <PostList2/> */}
        {this.state.Flag ? <PostList2/>: <AddpData updateFlag={this.updateFlag}/>}
      </div>
    )
  }
}

export default PostMain2
