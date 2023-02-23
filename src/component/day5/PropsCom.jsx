// import React from 'react'

// const  PropsCom =(props) =>  {
//     console.log(props.user);
//   return (
//     <>
//       <h1>This is props concept</h1>
//       <h2>my name is :{props.user}</h2>
//     </>
//   )
// }

// export default PropsCom


import React from 'react'

function PropsCom(props) {
  console.log(props.user);
  return (
    <div>
       <h2>my name is : {props.user}</h2>
    </div>
  )
}

export default PropsCom
