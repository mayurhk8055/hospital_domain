// import React, { Component } from 'react'

// export class PropsDeClass extends Component {
    
//   render() {
//   const {name,age}= this.props
//     return (
//       <div>
//         {name}
//         {age}

        
//       </div>
//     )
//   }
// }

// export default PropsDeClass

import React, { Component } from 'react'

export class PropsDeClass extends Component {
  render() {
    let a=12 , b=20
    return (
      <div>
        {a>b ? "a is gratet" : "b is grater"}
      </div>
    )
  }
}

export default PropsDeClass
