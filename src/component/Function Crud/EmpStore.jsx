import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import Conditions from './Conditions'
export const empContext = createContext()
const EmpStore = () => {
    // golabal state 
    const [employee,setEmployee]=useState([])
    // update state
    const [upda , setupda]=useState()
      //  console.log(upda)
    
    // save employee to store
    const saveEmp =(empObj)=>{
        console.log(empObj);
        setEmployee([...employee,empObj])
    }

    // delete employee
    const deleteEmp=(empObj)=>{
      const newemp = employee.filter((t)=> t.empId!==empObj)
      setEmployee(newemp)
      alert("data successfully deleted")
    }
    // update employee
    const updateData =(upd)=>{
      // console.log(upd)
      setupda(upd)
    }

    const updaterecord=(upd)=>{
      for(let i in employee){
        if(employee[i].empId==upd.empId){
          employee[i].empName=upd.empName
          employee[i].companyName=upd.companyName        }
      }
    }
   
  return (
    <empContext.Provider value={{employee,saveEmp,deleteEmp,updateData,upda,updaterecord}}>
      <Conditions/>
    </empContext.Provider>
  )
}

export default EmpStore
