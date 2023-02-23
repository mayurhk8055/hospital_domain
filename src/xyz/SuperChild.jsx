import React, { useContext } from 'react'
import { Globale } from './UseContexCom'

const SuperChild = () => {
    const {appColor,getDay}=useContext(Globale)
    const day ="Monday"
    console.log(appColor)
  return (
    <div>
      <h1 style={{color:appColor}}> superchild component</h1>
      <button onClick={()=>getDay(day)}>Get day</button>
    </div>
  )
}

export default SuperChild
