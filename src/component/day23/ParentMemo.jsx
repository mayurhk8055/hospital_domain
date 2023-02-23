// import React from 'react'
// import { useState } from 'react'
// import ChildMemo from './ChildMemo';
// import Memo from './Memo';

// const ParentMemo = () => {
//     const  [count, setcount]=useState(0)
//     setInterval(() => {
//         setcount(count+1)
//     }, 5000);
//     console.log('I am parent');
//   return (

//     <div>
//             <h1>{count}</h1>
//             <ChildMemo/>
//             <Memo name={'mayur'}/>
//     </div>
//   )
// }

// export default ParentMemo

import React from 'react'
import { useState } from 'react'
import ChildMemo from './ChildMemo';
import Memo from './Memo';

const ParentMemo = () => {
  const [count,setCount] =useState(0)
  setInterval(() => {
    setCount(count+1)
    
  }, 3000);
  return (
    <div>
       <h1>{count}</h1>
       <ChildMemo/>
       <Memo name='mayur'/>
    </div>
  )
}

export default ParentMemo

