import React, { Component } from 'react'
import AddButton from './AddButton'
import AddNewPost from './AddNewPost'
import DataFetch from './DataFetch'

export class PostMang extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         postflag:true
      }
    }
    
    updatePostFlag =(flagValue)=>{
        this.setState({
            postflag:flagValue
        })
    }


  render() {
    return (
      <div className='a'>
        <h2>POST MANAGEMENT </h2>
        
        <AddButton updatePostFlag ={this.updatePostFlag} />
      
        {this.state.postflag ? <DataFetch/> : <AddNewPost updatePostFlag={this.updatePostFlag}/>}
      </div>
    )
  }
}

export default PostMang
