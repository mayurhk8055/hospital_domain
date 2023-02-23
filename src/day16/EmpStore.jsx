import React,{ createContext,useState } from 'react'


export const empContext = createContext()

const EmpStore = () => {

    //  save emp data / globel state
    const [emp,setEmp] = useState([])

    // save employee tos store
    const saveEmp =(empObj)=>{
        console.log(empObj);
        setEmp([...emp,empObj])

    }



  return (
   <empContext.Provider value={{emp}} >

   </empContext.Provider>
  )
}

export default EmpStore
