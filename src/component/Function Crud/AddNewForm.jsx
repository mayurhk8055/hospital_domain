import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import {  empContext } from './EmpStore'

const AddNewForm = (props) => {
    const empContext2 = useContext(empContext) 
    // console.log(empContext2);

    const [empId, setEmpId] = useState('')
    const [empName, setEmpName] = useState('')
    const [companyName, setCompanyName] = useState('')

        const saveEmpData=(e)=>{

            const empObj2={
                empId:empId,
                empName:empName,
                companyName:companyName
            }
            // alert(JSON.stringify(empObj))
            empContext2.saveEmp(empObj2)
            // console.log(empObj);
            e.preventDefault()
            props.element('emplist')
        }

        // const updateEmp=(empObj)=>{
        //     employee.filter((e)=>{
        //       if(e.id === empObj.id){
        //           e = empObj
        //           setEmployee([...employee])
        //           console.log(empObj);
                  
        //       }
        //   })
        //   }

    return (
        <div>
            <h4> ADD NEW EMPLOYEE </h4>
            <div>
                <form onSubmit={saveEmpData}>
                    <div>
                        Employee Id : <input type="number" value={empId} onChange={(e) => setEmpId(e.target.value)} />
                    </div>
                    <div>
                        Employee Name : <input type="text" value={empName} onChange={(e) => setEmpName(e.target.value)} />

                    </div>
                    <div>
                        Company Name : <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                    </div>
                    <div>
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
                    
            </div>
        </div>
    )
}

export default AddNewForm
