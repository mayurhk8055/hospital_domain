import React from 'react'

function ChildToParent(props) {
    const data="mayur"
  return (
    <div>
      <button onClick={()=>props.alert(data)}>click me</button>
    </div>
  )
}

export default ChildToParent
