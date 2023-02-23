import React from 'react'
import ChildToParent from './ChildToParent'

function Parent() {

    function ParentAlert(data) {
      
        alert(data)
    }
    
  return (
    <div>
      <ChildToParent alert={ParentAlert}/>
    </div>
  )
}

export default Parent
