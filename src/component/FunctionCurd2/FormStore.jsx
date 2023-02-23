import React, { createContext, useState } from 'react'
import ConditionForm from './ConditionForm'
export const userConst =createContext()

const FormStore = () => {
  const [emp,setemp]=useState([])
    const getdata=(gdata)=>{
        console.log(gdata)
        setemp([...emp,gdata])
    }
   const deleteUser=(del)=>{
    const newemp = emp.filter((t)=> t.id!==del)
      setemp(newemp)
      alert("data successfully deleted")
    }
  return (
    <>
    <userConst.Provider value={{emp}}>
        <ConditionForm/>
    </userConst.Provider>
      
    </>
  )
}

export default FormStore
