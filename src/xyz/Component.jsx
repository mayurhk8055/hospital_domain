// import React from 'react'

// const Component = () => {
//   return (
//     <div>
//         <h1>function  component</h1>
      
//     </div>
//   )
// }

// export default Component

// import React from 'react'

// function Component() {
//   return (
//     <div>
//        <h1> this is function component</h1>
//     </div>
//   )
// }

// export default Component

// import React, { Fragment } from 'react'

// class Component1 extends React.Component {
//   render() {
//     let a= 10 , b=12
//     return (
        
//       <>
//           <h1> Class component </h1>
//             {a*b}
//       </>
//     )
//   }
// }

// export default Component1


// import React, { Fragment } from 'react'

// const Component = () => {
//     let a=12 , b=30
//   return (
   
//     // jsx element 
//     <Fragment>
//       <h1> react Fragment</h1>
//       <h2>{10+20} </h2>

//       {a*b}
//     </Fragment>
//   )
// }

// export default Component

// import React from 'react'

// const Component = () => {
//     const a= 50 
//   return (
//     <div>
//         <h1> {a>20 ? "a is grater than 20" : " a is less than 20"}</h1>
//       <h2> {a>40 && " true"}</h2>
//     </div>
//   )
// }

// export default Component

// import React from 'react'

// const Component = (props) => {
//   return (
//     <div>
//         <h1> {props.msg}</h1>
     
//     </div>
//   )
// }

// export default Component

// import React from 'react'

// const Component = ( {msg}) => {
//   return (
//     <div>
//        <h1>my name is : {msg}</h1>
//     </div>
//   )
// }

// export default Component


// import React, { Component } from 'react'

// export class Component1 extends Component {
//   render() {
//      const { name , age } = this.props
//     return (
//       <div>
//         {/* <h2> { this.props.msg} </h2> */}
//         <h2>{name}</h2>
//         <h2>{age}</h2>
         
//       </div>
//     )
//   }
// }

// export default Component1

// import React, { Component } from 'react'

// export class Component1 extends Component {
//     constructor(props) {
//       super(props)
//         this.user = this.ChangeMsg.bind(this)
//       this.state = {
//          user:" welcome"
//       }
//     }
//     ChangeMsg()
//     {
//         this.setState({
//             user:" farewell"
//         })
//     }
    
//   render() {
//     return (
//       <div>
//          <h1> event binding</h1>
//             <h2> {this.state.user}</h2>
//          {/* <button onClick={this.ChangeMsg.bind(this)} >click me</button> */}
//          {/* <button onClick={()=>this.ChangeMsg()}>click me</button> */}
//          {/* <button onClick={this.ChangeMsg}>click me</button> */}
//       </div>
//     )
//   }
// }

// export default Component1

// import React, { Component } from 'react'

// export class Component1 extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          user:" mayur"
//       }
//     }
    
//   render() {
//     if(this.state.user === true)
//     {
//         // console.log(user)
//         this.setState({
//             user:"mk"
//         })
//     }
//     return (
       
//       <div>

//         {this.state.user}


        
//       </div>
//     )
//   }
// }

// export default Component1










