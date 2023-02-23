import React from 'react'

function ChildCompo(props) {
  return (
    <div>
           <h1>Child Compo</h1>
            <button onClick={()=>props.parentFunction("welcome parent compo")}>pass data to parent component </button>
    </div>
  )
}

export default ChildCompo
