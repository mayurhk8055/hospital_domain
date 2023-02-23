import React from 'react'

const ChildTop = (props) => {
    const data = " mayur"
    
  return (
    <div>
       <h1>child component </h1>
       <button onClick={()=>props.alert((data))} >click me </button>

    </div>
  )
}

export default ChildTop
