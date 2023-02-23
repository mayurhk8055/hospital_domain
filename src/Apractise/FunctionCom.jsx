// import React from 'react'
        //......... using simple function syntax
// function FunctionCom() {
//   return (
//     <div>
//         <h1>Functional Component of React ...</h1>
//     </div>
//   )
// }
// ..............................return in one line


// export default FunctionCom

// import React from 'react'

// export default function FunctionCom() {
//   return <h1> Fuction component with single line return keyword </h1>
// }

// .....................................React.Fragment
// import React from 'react'

// export default function FunctionCom() {
//   return (
//     <React.Fragment>
//         <h3>Function component with React. Fragment tag</h3>
//     </React.Fragment>
//   )
// }
// ....................................only Fragment Tag
// import React, { Fragment } from 'react'

// export default function FunctionCom() {
//   return (
//     <Fragment>
//         {2+30}
//         <h2>Function component with only Fragment tag </h2>
//     </Fragment>
//   )
// }
        // ..............empty fragment tag
// import React from 'react'

// export default function FunctionCom() {
//   return (
//     <>
//         <h4>Function using only Fragment tag <></></h4>
//     </>
//   )
// }
    // ...............Function Expression 
// import React from 'react'

// const FunctionCom = ()=> {
//     let a = 10 ,b=20
//   return (
//     //   jsx elemet is use in html tag
//     <div>
//        <h1> {a+b}</h1>
//     </div>
//   )
// }

// export default FunctionCom

    //............................Arrow function Single line return method 
    
    // import React from 'react'
    
    // let FunctionCom =()=> {
    //    <h2>Single Line Arrow function</h2>
       
    // }
    
    // export default FunctionCom
    
        // .................................Arrow function Multiline  return method 

    // import React from 'react'
    
    //  FunctionCom =()=> {
    //   return (
    //     <div>
    //        <h2> </h2>
    //     </div>
    //   )
    // }
    
    // export default FunctionCom
    
    
        //..............................using function trenaery operator 
    // import React from 'react'
    
    // function FunctionCom() {
    //     let a=0;
    //   return (
    //     <div>
    //       { 5>a ? <h1>hello react</h1>:<h1> welcome react js</h1>}
    //     </div>
    //   )
    // }
    
    // export default FunctionCom


        // ............................props component pass msg
    // import React from 'react'
    
    // function FunctionCom(props) {
    //   return (
    //     <div>
    //       <h1>{props.msg}</h1>
    //     </div>
    //   )
    // }
    
    // export default FunctionCom
        
// ....................................props destructuring function 

// import React from 'react'
//         // .....use props
// function FunctionCom(props) {   
//   return (
//     <div>
//       Name:{props.name},
//       Age:{props.age},
//       Company:{props.company}
//     </div>
//   )
// }

// export default FunctionCom

        // .............................props destructuring function with entity parameter

//   import React from 'react'
  
//   function FunctionCom({name,age,company }) {
//     return (
//       <div>
//          <h2>{name}</h2>
//          <h2>{age}</h2>
//          <h2>{company}</h2>
//       </div>
//     )
//   }
  
//   export default FunctionCom
        

