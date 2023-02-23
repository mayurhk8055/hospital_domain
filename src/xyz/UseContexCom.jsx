import React, { createContext, useState } from 'react'
import ChildCom from './ChildCom';
import ChildCom1 from './ChildCom1';
export const Globale =createContext();

const UseContexCom = () => {
    const [color ,setColor]=useState("blue")
    const [day ,setDay]=useState("")
const getDay=(day)=>{
    console.log(day)
    setDay(day)
}

  return (
    <Globale.Provider value={{appColor:color,getDay:getDay}}>
        <h1> today day is : {day}</h1>
      <ChildCom/>
      <ChildCom1/>
    </Globale.Provider>
  )
}

export default UseContexCom
