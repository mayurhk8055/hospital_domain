import React, { useContext, useEffect, useState } from 'react'

import { employeeContext } from './CompoStore'

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function Employees() {
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [position, setPosition] = useState()

    //use gloabl state 
    const { employee, addEmp,updateEmp,deleteEmp } = useContext(employeeContext)

    const submitEmployeeData = (event) => {

        const eData = {
            eid: id,
            ename: name,
            eposition: position
        }

        // console.log(eData)
        //add to store 
        addEmp(eData)
        event.preventDefault();
    }
    useEffect(() => {
        // console.log(employee)
    })
    const updateEmployee =(empObj)=>{
       console.log(empObj)
        updateEmp(empObj)
    }
    return (
        <div>

            <form onSubmit={submitEmployeeData}>
                <div style={{ marginLeft: '350px' }}>
                    <h4 >Add New Employee </h4>
                    <div >
                        Employee ID : <input type="number" value={id} onChange={e => setId(e.target.value)} />
                    </div>
                    <div >
                        Employee Name : <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div >
                        Employee Position : <input type="text" value={position} onChange={e => setPosition(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit'>Submit Employee</button>
                    </div>
                </div>

                {/* List of employee */}
                <div style={{ marginTop: '30px' }}>
{/*                    
                    <div style={{ marginLeft: '80px', marginRight: "80px", marginTop: "50px" }}>
                        <div style={{ height: 400, width: '100%' }}>
                        <h4 >Employee List</h4>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Employee ID</TableCell>
                                            {/* <TableCell align="center">ID</TableCell> */}
                                            {/* <TableCell align="center">Employee Name</TableCell>
                                            <TableCell align="center">Position</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {employee.map((emp) => (
                                            <TableRow
                                                key={emp.eid}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {emp.eid}
                                                </TableCell>
                                                {/* <TableCell align="right">{post.id}</TableCell> */}
                                                {/* <TableCell align="left">{emp.ename}</TableCell>
                                                <TableCell align="left">{emp.eposition}</TableCell>
                                                <TableCell align="left"><button onClick={()=>updateEmployee(emp)}>Update</button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer> */} 

                        {/* </div> */}
                        <div>
                            <div> <h4 >Employee List</h4></div>
                            <table className='table table-borderd'>
                                <thead>
                                    <tr>
                                        <th>Employee ID </th>
                                        <th> Employee Name</th>
                                        <th>Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {employee.map((emp,i) =>{
                                    return(
                                    <tr key={i.eid}>
                                        <td>{emp.eid}</td>
                                        <td>{emp.ename}</td>
                                        <td>{emp.eposition}</td>
                                        <td><button onClick={()=>updateEmployee(emp.eid)}>Update</button></td>
                                    </tr>
                                    )
                                    }
                                    )}                                   
                               
                                </tbody>
                            </table>
                        </div>
                    </div>
                



            </form>
        </div>
    )
}

export default Employees
