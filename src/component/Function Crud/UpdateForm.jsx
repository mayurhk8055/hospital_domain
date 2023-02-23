import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import {  empContext } from './EmpStore'

const UpdateForm = (props) => {
    const {upda,updaterecord} = useContext(empContext) 
    // console.log(upda);

    const [empId, setEmpId] = useState(upda.empId)
    const [empName, setEmpName] = useState(upda.empName)
    const [companyName, setCompanyName] = useState(upda.companyName)

    // next logic by create a distructring useState

    // const [user,setuser]=useState({
    //     empId:upda.empId,
    //     empName:upda.empName,
    //     companyName:upda.companyName
    // })

    // const getdata=(e)=>{
    //     const name=e.target.name;
    //     const value=e.target.value

    //     setuser({...user,[name]:value})
    // }


        const saveEmpData=(e)=>{

            const empObj2={
                empId:empId,
                empName:empName,
                companyName:companyName
            }
            // alert(JSON.stringify(empObj))
            // console.log(empObj);
            e.preventDefault()
            updaterecord(empObj2)
            props.element('emplist')
        }

    

    return (
        <div>
            <h4> UPDATE EMPLOYEE </h4>
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
                        <button type="submit">Update</button>
                    </div>
                </form>
                    
            </div>
        </div>
    )
}

export default UpdateForm
