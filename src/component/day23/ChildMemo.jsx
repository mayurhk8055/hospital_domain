// import React from 'react'

// const  ChildMemo = (props)=> {
//     console.log("i am chhild");
//   return (
//     <div>
//             <h2>this is child component </h2>
//             {props.name}
//     </div>
//   )
// }

// export default React.memo(ChildMemo)

// .....................................
import React from 'react'

const ChildMemo = () => {
  console.log("i am child memo");
  return (
    <div>
      <h3>memo of functional compo</h3>
      
      
    </div>
  )
}

export default React.memo(ChildMemo)
