// import React, { useEffect, useState } from 'react'

// const UseEffectcom = () => {
//     const [count , setCount]=useState(1)
//     useEffect(()=>{
//         console.log(count)
//     },[count==5])
//   return (
//     <div>
//         <h1> use Effect : {count}</h1>

//         <button onClick={()=>setCount(count+1)}>click me</button>
      
//     </div>
//   )
// }

// export default UseEffectcom
// import React, { useRef } from 'react'

// const UseEffectcom = () => {
//     const user=useRef(null)
//    function handleRef()
//    {
//     console.log(" function call")
//     //  user.current.value="0"
//     // user.current.focus();
//     // user.current.style.color="blue";
//     user.current.style.display="none";

//    }
    
//   return (
//     <div>
//       <input type="text" ref={user}/>
//       <button onClick={handleRef}>click</button>
//     </div>
//   )
// }

// export default UseEffectcom


import React, { useState,useMemo } from 'react'

const UseEffectcom = () => {
    const [count , setCount]=useState(0)
    const [item , setItem]=useState(10)

    const useMultiCont = useMemo(
      function Simple()
       {
           console.log("simple")
           return item * 5
       },[item])

       
    
  return (
    <div>
        <h1> use count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>click count</button>
        <h1> use item {item}</h1>
        <h2>{useMultiCont}</h2>
        <button onClick={()=>setItem(item +2)}>click item</button>

    </div>
  )
}

export default UseEffectcom
