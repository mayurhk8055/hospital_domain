// import React from 'react'

// const ListRender = () => {
//     // const student = [ "anil" , " ganesh", " bhairav " , " rahul"]

//     const emp =[
//         {name:"rahul", age:20 , address: " pune"},
//         {name:"anil", age:22 , address: " pune"},
//         {name:"ganesh", age:24 , address: " pune"},
//         {name:"bhairav", age:22 , address: " pune"}
//     ]
//   return (
//     <div>
//         <table border={1}>
//         { emp.map((data)=>
//             <tr>
//             <td> {data.name}</td>
//             <td> {data.age}</td>
//             <td> {data.address}</td>
//         </tr>
      
//       )}
            
//       {/* { emp.map((data)=>
//       <h1>{data.name} {data.age} { data.address}</h1>
      
//       )} */}
//       </table>
//     </div>
//   )
// }

// export default ListRender


// import React, { Component } from 'react'
// import './Simple.css'

// export class ListRender extends Component {
//   render() {
//     const style1 ={
//         color:'green',
//         textAlign:'center'
//     }
//     return (
//       <div>
//         {/* inline style */}
//         <h1 style={{color:'blue' ,textAlign:'center'}}> inline style</h1>
//         {/* internal  */}
//         <h2 style={style1}> Internal/ embedded style</h2>
//         {/* external css */}
//         <h3 className='ext'>External css</h3>


//       </div>
//     )
//   }
// }

// export default ListRender

// import React, { Component, PureComponent } from 'react'

// export class ListRender extends PureComponent {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          msg:" welcome"
//       }
//     }
//     Changemsg =()=>{
//         this.setState({
//             msg:"welcome "
//         })
//     }
    
//   render() {
//     console.log("render")
//     return (
//       <div>
//              <h2>{this.state.msg}</h2>
//         <button onClick={this.Changemsg}> click me</button>
//       </div>
//     )
//   }
// }

// export default ListRender

import React, { Component } from 'react'
const userContext = React.createContext()
export class ListRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         result: " welcome ganesh"
      }
    }
    
  render() {
    return (
      <div>
        <h1>this is parent </h1>
        <userContext.Provider value={this.state.result}>

        <ListRender2 />
        </userContext.Provider>

       
      </div>
    )
  }
}

export default ListRender


 class ListRender2 extends Component {
  render() {
    return (
      <div>
         <h2> this is child 1</h2>
         <ListRender3 result={this.props.result}/>
      </div>
    )
  }
}


 class ListRender3 extends Component {
  render() {
    return (
      <div>
        <userContext.Consumer>
            {value=> <h1>{value}</h1>}
        </userContext.Consumer>
        
      </div>
    )
  }
 }

// import React, { useState } from 'react'

// const ListRender = () => {
//     // const [color , setColor] =useState("red")
//     const [count ,setCount] = useState(1)
//     const changeClr=()=>{
//         // setColor('blue')
//         setCount(count+1)
//     }
//   return (
//     <div>
//          <h1>colur : {count}</h1>
//       <button onClick={changeClr}>click me</button>
//     </div>
//   )
// }

// export default ListRender



