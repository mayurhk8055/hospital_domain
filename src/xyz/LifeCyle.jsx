import axios from 'axios';
import React, { Component } from 'react'

export class LifeCyle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"welcome bhairav",
         userdata:[],
         showcompo:true
      }
      console.log(this.state.msg);
    }
    // static getDerivedStateFromProps(props,state)
    // {
    //     console.log("getderived mount")

    //     return {msg:props.name}
        
    // }
    async componentDidMount(){
        console.log("componentDidmount")
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)

        this.setState({
            userdata:res.data,
            showcompo:false
            
        })
    }
    static getDerivedStateFromProps(props,state)
     {
        console.log("getderived update ")

        return {msg:props.name}
        
 }
 shouldComponentUpdate(){
    console.log("from should update")
    return true
 }
 getSnapshotBeforeUpdate(){
    console.log("from snap shot")
    return null
 }
 componentDidUpdate(){
    console.log("componentDid update")
 }
    
  render() {
    return (
      <div>

        message : {this.state.msg}
        {this.state.showcompo && <LifeCyleMethod/> }
      </div>
    )
  }
}

export default LifeCyle


 class LifeCyleMethod extends Component {
    componentWillUnmount(){
        console.log("from component will unmount")
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
