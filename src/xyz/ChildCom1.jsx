import React, { useContext } from 'react'
import { Globale } from './UseContexCom'

const ChildCom1 = () => {
    const {appColor}=useContext(Globale)
    console.log(appColor)
  return (
    <div>
      <h1 style={{color:appColor}}> ChildCom1 component</h1>
    </div>
  )
}

export default ChildCom1
