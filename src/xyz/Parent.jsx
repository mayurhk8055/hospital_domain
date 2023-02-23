import React from 'react'
import ChildTop from './ChildTop'

function Parent() {
    function ParentData(data){
        alert(data)
    }
  return (
    <div>
        <h1> this is parent </h1>

        <ChildTop alert={ParentData}/>
    </div>
  )
}

export default Parent
