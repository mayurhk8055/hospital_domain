import React, { useContext } from 'react'
import { userConst } from './FormStore'

const FormList = (props) => {
  const {emp,updateUser,deleteUser}=useContext(userConst)
  return (
    <div>
        <h1> TABLE </h1>
        <table>
          <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>

            </tr>
    
          </thead>
          <tbody>
            {
              emp.length >0 && emp.map((e,index)=>{
                return(
                <tr key={index}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.mobile}</td>
                  <td>{e.email}</td>

                  <button onClick={()=>deleteUser(e.id)}> delete</button>
                  <button onClick={()=>{updateUser(e.id);props.element("updateform")}}>update</button>

                </tr>
                )
              })
            }
              
          </tbody>
        </table>
      
    </div>
  )
}

export default FormList
