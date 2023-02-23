import React, { Component } from 'react'

export class FormBasic extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:"", 
        name:"",
         age : " ",
         address:" "
      }
    }
     SubmitData =(e)=>
     {
       
        alert(`id ${this.state.id} name ${this.state.name} age ${this.state.age} Address ${this.state.address}`)
        e.prevntDefault();
     
      }
    
  render() {
    return (
      <div>
        <form onSubmit={this.SubmitData}>
            Id : <input type="number"  value={this.state.id} onChange={(e)=>this.setState({id:e.target.value})}/>
            Name : <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
            Age: <input type="number" value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}/>
            Address: <input type="text"  value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})}/>


            <button type='submit'> submit </button>
        </form>
      </div>
    )
  }
}

export default FormBasic
