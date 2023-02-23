import React, { useState } from 'react'

const HoverCom = () => {
    const [count,setCount]=useState(0)
    const hover1=()=>{
        setCount (count+1)
    }
  return (
    <div style={{'margin':'100 px'}}>
      <h2 onMouseOver={hover1}>Hover component {count}</h2>
      {/* <HoverCom1/> */}
    </div>
  )
}

export default HoverCom


//  function HoverCom1() {
//     const [count,setCount]=useState(0)
//     const hover1=()=>{
//         setCount (count+1)
//     }
//   return (
//     <div>
//       <h2 onMouseOver={hover1}>Hover component {count}</h2>
//     </div>
//   )
// }

