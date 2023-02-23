import React, { Component } from 'react'
import AddNewBtn from './AddNewBtn'
import AddpostData from './AddpostData'
import DataFetchPost from './DataFetchPost'
import  './simple.css'

export class ParentCurd extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flag:true
    }
  }
  changeValue=(pre)=>{
      this.setState({
        flag:pre
      })
  }

  render() {
    return (
      <div>
      
      <h1>hello sdfdsfdsfdg</h1>
        <AddNewBtn a={this.changeValue}/>
        {/* <DataFetchPost /> */}
        {this.state.flag ? <DataFetchPost /> : <AddpostData ab={this.changeValue} />} 
      </div>
    )
  }
}

export default ParentCurd
