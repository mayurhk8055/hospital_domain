import React from 'react'
import { useContext,useState } from 'react'
import { empContext } from './EmpStore'
import UpdateForm from './UpdateForm'
const EmpList = (props) => {
    const { employee,deleteEmp,updateData } = useContext(empContext)
    // console.log(empcompo);

   
   
    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Company Name</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    { employee.length > 0 &&  employee.map((emp, index) => {

                        return (
                            <tr key={index}>
                                <td>{emp.empId}</td>
                                <td>{emp.empName}</td>
                                <td>{emp.companyName}</td>
                                <td>
                                    <button onClick={()=>deleteEmp(emp.empId)}>Delete</button>
                                 <button onClick={()=>{updateData(emp);props.element('updateform')}}>Update</button></td>
                            </tr>
                        )
                    }
                    )
                    }


                </tbody>
            </table>

        </div>
    )
}

export default EmpList
