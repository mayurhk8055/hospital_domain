import React, { useContext } from 'react'
import SuperChild from './SuperChild'
import { Globale } from './UseContexCom'

const ChildCom = () => {
    const {appColor}=useContext(Globale)
    console.log(appColor)
  return (
    <div>
      <h1 style={{color:appColor}}> child component</h1>
      <SuperChild/>
    </div>
  )
}

export default ChildCom
