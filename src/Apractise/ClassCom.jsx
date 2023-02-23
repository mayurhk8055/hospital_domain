// import React, { Component } from 'react'
        // ................simple class component
// export class ClassCom extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello  Class Component</h1>
//       </div>
//     )
//   }
// }

// export default ClassCom

        // ...........................one line code of class component
// import React, { Component } from 'react'

// export class ClassCom extends Component {
//   render() {
//     return <h2>welcome in class compo</h2>
//   }
// }

// export default ClassCom
      
        // ................................React.Fragment use in return
// import React, { Component } from 'react'

// export class ClassCom extends Component {
//   render() {
//     return (
//      <React.Fragment>
//         <h3>USe the react fragment1</h3>
//      </React.Fragment>
//     )
//   }
// }

// export default ClassCom

        // ...........................only use Fragment tag
// import React, { Component, Fragment } from 'react'

// export class ClassCom extends Component {
//   render() {
//     return (
//      <Fragment>
//         {2*6}
//         <h3>only use fragment tag</h3>
//      </Fragment>
//     )
//   }
// }

// export default ClassCom

        // ...........................only <>..</> use for fragment
// import React, { Component } from 'react'

// export class ClassCom extends Component {
//   render() {
//     return (
//       <>
//         <h2>fragment use only empty tag </h2>
//       </>
//     )
//   }
// }

// export default ClassCom

    // .......................jsx element 
// import React, { Component } from 'react'

// export class ClassCom extends Component {
//   render() {
//     let a=0;         //  ..... using jsx with ternary opertaor      
//     return (
//       <div>
//         {a<5 ? "true" : "false" }
//       </div>
//     )
//   }
// }

// export default ClassCom

        // ........................class expression for component syntax

// import React from 'react'

//  class ClassCom extends React.Component {
//   render() {
//     return (
//       <div>
//           <h1>use extend react.component </h1>
//       </div>
//     )
//   }
// }

// export default ClassCom


        // ................class props component by parent decalre

// import React, { Component } from 'react'

// export class ClassCom extends Component {
    
    
//   render() {
//     return (
//       <div>
//       <h1>{this.props.msg}</h1>
//       </div>
//     )
//   }
// }

// export default ClassCom

        // ................props destruturing  using const in render method
        
import React, { Component } from 'react'

export class ClassCom extends Component {
   
  render() {
    const {name,age,company } = this.props
    return (
      <div>
           <h1>{name}</h1>
           <h1>{age}</h1>
          <h1> {company}</h1>
      </div>
    )
  }
}

export default ClassCom

